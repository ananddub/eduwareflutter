import 'dart:convert';

import 'package:dio/dio.dart';
import 'package:eduwareflutter/constant/server.dart';
import 'package:featurehub_sse_client/featurehub_sse_client.dart';
import 'package:flutter/material.dart';
import 'package:image_cropper/image_cropper.dart';
import 'package:intl/intl.dart';
import 'package:image_picker/image_picker.dart';

class PhotoDashboard extends StatefulWidget {
  final Map<String, dynamic> data;
  const PhotoDashboard({super.key, required this.data});

  @override
  State<PhotoDashboard> createState() => _PhotoDashboardState();
}

class _PhotoDashboardState extends State<PhotoDashboard> {
  final List<Map<String, dynamic>> _sections = [];
  var date = DateTime.now();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[100],
      body: NestedScrollView(
        headerSliverBuilder: (context, innerBoxIsScrolled) {
          return [
            SliverAppBar(
              title: Text('Photo Dashboard'),
              backgroundColor: Colors.grey[100],
              pinned: true,
              flexibleSpace: FlexibleSpaceBar(),
            ),
          ];
        },
        body: SingleChildScrollView(
          physics: const BouncingScrollPhysics(),
          child: Column(
            children: [
              Container(
                margin: const EdgeInsets.only(top: 20),
                padding: const EdgeInsets.all(16),
                child: Column(
                  children: [
                    Container(
                      child: Hero(
                        tag: "student-${widget.data['regno']}",
                        child: Container(
                          width: 120,
                          height: 120,
                          decoration: BoxDecoration(
                            color: Colors.white,
                            shape: BoxShape.circle,
                            border: Border.all(color: Colors.white, width: 4),
                            boxShadow: [
                              BoxShadow(
                                color: Colors.black.withOpacity(0.1),
                                blurRadius: 10,
                                spreadRadius: 2,
                              ),
                            ],
                          ),
                          child: Stack(
                            children: [
                              SizedBox(
                                width: 120,
                                height: 120,
                                child: ClipOval(
                                  child:
                                      widget.data['imagepath']
                                              .toString()
                                              .isNotEmpty
                                          ? Image.network(
                                            ImageUrl(
                                              widget.data['admno'],
                                              date.toString(),
                                            ),
                                            fit: BoxFit.cover,
                                            errorBuilder:
                                                (context, error, stackTrace) =>
                                                    _defaultProfileImage(),
                                          )
                                          : _defaultProfileImage(),
                                ),
                              ),
                              Positioned(
                                bottom: 0,
                                right: 0,
                                child: Container(
                                  decoration: BoxDecoration(
                                    border: Border.all(color: Colors.grey),
                                    borderRadius: BorderRadius.circular(50),
                                    color: Colors.white,
                                  ),

                                  child: IconButton(
                                    onPressed: _openCamera,
                                    icon: Icon(Icons.camera_alt, size: 30),
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                    const SizedBox(height: 16),

                    // Student ID
                    Container(
                      padding: const EdgeInsets.symmetric(
                        horizontal: 12,
                        vertical: 6,
                      ),
                      decoration: BoxDecoration(
                        color: Colors.indigo.withOpacity(0.1),
                        borderRadius: BorderRadius.circular(20),
                        border: Border.all(
                          color: Colors.indigo[200]!,
                          width: 1,
                        ),
                      ),
                      child: Text(
                        "Admission No: ${widget.data['admno'] ?? 'N/A'}",
                        style: TextStyle(
                          fontSize: 14,
                          color: Colors.indigo[700],
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                    ),
                    const SizedBox(height: 16),

                    // Quick Info Chips
                    Wrap(
                      alignment: WrapAlignment.center,
                      spacing: 8,
                      runSpacing: 8,
                      children: [
                        _buildInfoChip(
                          "Class ${widget.data['class'] ?? 'N/A'}-${widget.data['section'] ?? 'N/A'}",
                          Icons.class_,
                          Colors.blue,
                        ),
                        _buildInfoChip(
                          "Roll: ${widget.data['roll']?.toString() ?? 'N/A'}",
                          Icons.format_list_numbered,
                          Colors.purple,
                        ),
                        _buildInfoChip(
                          widget.data['house'] ?? 'N/A',
                          Icons.home_work,
                          Colors.orange,
                        ),
                      ],
                    ),
                    const SizedBox(height: 20),
                  ],
                ),
              ),

              // Student Details Sections
              ListView.builder(
                physics: const NeverScrollableScrollPhysics(),
                shrinkWrap: true,
                itemCount: _sections.length,
                itemBuilder: (context, index) {
                  final section = _sections[index];
                  return _buildSection(
                    title: section['title'],
                    icon: section['icon'],
                    color: section['color'],
                    items: section['items'],
                  );
                },
              ),

              // Bottom Padding
              const SizedBox(height: 30),
            ],
          ),
        ),
      ),
    );
  }

  Future<void> _event() async {
    EventSource eventSource = await EventSource.connect("$BaseUrl/photo/event");
    eventSource.listen((event) {
      final data = event.data as String;
      final jsonData = jsonDecode(data);
      debugPrint('event data $jsonData');
      if (jsonData['admno'] == widget.data['admno']) {
        setState(() {
          date = DateTime.now();
        });
      }
    });
  }

  @override
  void initState() {
    super.initState();
    _event();
    _initSections();
  }

  void _openCamera() {
    debugPrint('Opening camera');
    ImagePicker().pickImage(source: ImageSource.camera).then((value) {
      if (value != null) {
        debugPrint("Image selected $value");

        ImageCropper()
            .cropImage(
              sourcePath: value.path,
              uiSettings: [
                AndroidUiSettings(
                  toolbarTitle: 'Cropper',
                  toolbarColor: Colors.deepOrange,
                  toolbarWidgetColor: Colors.white,
                  aspectRatioPresets: [
                    CropAspectRatioPreset.original,
                    CropAspectRatioPreset.square,
                  ],
                ),
                IOSUiSettings(
                  title: 'Cropper',
                  aspectRatioPresets: [
                    CropAspectRatioPreset.original,
                    CropAspectRatioPreset.square,
                  ],
                ),
              ],
            )
            .then((croppedImage) async {
              if (croppedImage != null) {
                FormData formData = FormData.fromMap({
                  'file': await MultipartFile.fromFile(croppedImage.path),
                });
                String value = widget.data['admno'] as String;
                await setImagesToServer(value, formData);
                // Handle the cropped image
              }
            });
      }
    });
  }

  Widget _buildInfoChip(String label, IconData icon, Color color) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
      decoration: BoxDecoration(
        color: color.withOpacity(0.1),
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: color.withOpacity(0.3), width: 1),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(icon, size: 16, color: color),
          const SizedBox(width: 6),
          Text(
            label,
            style: TextStyle(
              fontSize: 14,
              fontWeight: FontWeight.w500,
              color: color,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildSection({
    required String title,
    required IconData icon,
    required Color color,
    required List<Map<String, dynamic>> items,
  }) {
    return Container(
      margin: const EdgeInsets.fromLTRB(16, 0, 16, 16),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16),
        boxShadow: [
          BoxShadow(
            color: Colors.grey.withOpacity(0.1),
            blurRadius: 10,
            spreadRadius: 0,
            offset: const Offset(0, 1),
          ),
        ],
      ),
      child: Theme(
        data: Theme.of(context).copyWith(
          dividerColor: Colors.transparent,
          colorScheme: ColorScheme.light(primary: color),
        ),
        child: ExpansionTile(
          initiallyExpanded: title == 'Personal Information',
          tilePadding: const EdgeInsets.symmetric(horizontal: 20, vertical: 8),
          childrenPadding: const EdgeInsets.fromLTRB(20, 0, 20, 20),
          leading: Container(
            padding: const EdgeInsets.all(8),
            decoration: BoxDecoration(
              color: color.withOpacity(0.1),
              shape: BoxShape.circle,
            ),
            child: Icon(icon, color: color, size: 24),
          ),
          title: Text(
            title,
            style: TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.bold,
              color: Colors.grey[800],
            ),
          ),
          children: [
            ListView.separated(
              physics: const NeverScrollableScrollPhysics(),
              shrinkWrap: true,
              itemCount: items.length,
              separatorBuilder:
                  (context, index) =>
                      Divider(color: Colors.grey[200], height: 1),
              itemBuilder: (context, index) {
                final item = items[index];
                return Padding(
                  padding: const EdgeInsets.symmetric(vertical: 12),
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Expanded(
                        flex: 2,
                        child: Text(
                          item['label'],
                          style: TextStyle(
                            fontSize: 15,
                            color: Colors.grey[700],
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                      ),
                      const SizedBox(width: 16),
                      Expanded(
                        flex: 3,
                        child: Text(
                          item['value'],
                          style: const TextStyle(
                            fontSize: 15,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                      ),
                    ],
                  ),
                );
              },
            ),
          ],
        ),
      ),
    );
  }

  Widget _defaultProfileImage() {
    return Container(
      color: Colors.indigo.shade100,
      child: Icon(Icons.person, size: 60, color: Colors.indigo.shade500),
    );
  }

  String _formatDate(dynamic date) {
    if (date == null) return 'N/A';
    try {
      final DateTime parsedDate = DateTime.parse(date.toString());
      return DateFormat('dd MMM yyyy').format(parsedDate);
    } catch (e) {
      return date.toString();
    }
  }

  void _initSections() {
    // Personal Information
    _sections.add({
      'title': 'Personal Information',
      'icon': Icons.person,
      'color': Colors.blue,
      'items': [
        {'label': 'Name', 'value': widget.data['name'] ?? 'N/A'},
        {'label': 'Registration No', 'value': widget.data['regno'] ?? 'N/A'},
        {'label': 'Admission No', 'value': widget.data['admno'] ?? 'N/A'},
        {'label': 'Date of Birth', 'value': _formatDate(widget.data['dob'])},
        {'label': 'Gender', 'value': widget.data['gender'] ?? 'N/A'},
        {'label': 'Nationality', 'value': widget.data['nationality'] ?? 'N/A'},
        {'label': 'Category', 'value': widget.data['category'] ?? 'N/A'},
        {'label': 'Religion', 'value': widget.data['religion'] ?? 'N/A'},
        {'label': 'Blood Group', 'value': widget.data['bloodgroup'] ?? 'N/A'},
        {'label': 'Email', 'value': widget.data['email'] ?? 'N/A'},
      ],
    });

    // Academic Information
    _sections.add({
      'title': 'Academic Information',
      'icon': Icons.school,
      'color': Colors.green,
      'items': [
        {'label': 'Class', 'value': widget.data['class'] ?? 'N/A'},
        {'label': 'Section', 'value': widget.data['section'] ?? 'N/A'},
        {
          'label': 'Roll Number',
          'value': widget.data['roll']?.toString() ?? 'N/A',
        },
        {'label': 'House', 'value': widget.data['house'] ?? 'N/A'},
        {
          'label': 'Date of Admission',
          'value': _formatDate(widget.data['doa']),
        },
        {
          'label': 'Previous School',
          'value': widget.data['prevschool'] ?? 'N/A',
        },
        {'label': 'Previous Class', 'value': widget.data['prevclass'] ?? 'N/A'},
        {'label': 'Test Marks', 'value': widget.data['testmarks'] ?? 'N/A'},
        {'label': 'Session', 'value': widget.data['session'] ?? 'N/A'},
      ],
    });

    // Parent Information
    _sections.add({
      'title': 'Parent Information',
      'icon': Icons.family_restroom,
      'color': Colors.purple,
      'items': [
        {'label': 'Father\'s Name', 'value': widget.data['fname'] ?? 'N/A'},
        {
          'label': 'Father\'s Occupation',
          'value': widget.data['foccu'] ?? 'N/A',
        },
        {
          'label': 'Father\'s Annual Income',
          'value': widget.data['fannual'] ?? 'N/A',
        },
        {'label': 'Father\'s Mobile', 'value': widget.data['fmob'] ?? 'N/A'},
        {'label': 'Mother\'s Name', 'value': widget.data['mname'] ?? 'N/A'},
        {
          'label': 'Mother\'s Occupation',
          'value': widget.data['moccu'] ?? 'N/A',
        },
        {
          'label': 'Mother\'s Annual Income',
          'value': widget.data['mannual']?.toString() ?? 'N/A',
        },
        {'label': 'Mother\'s Mobile', 'value': widget.data['mmob'] ?? 'N/A'},
        {'label': 'Guardian\'s Name', 'value': widget.data['gname'] ?? 'N/A'},
        {
          'label': 'Guardian\'s Occupation',
          'value': widget.data['goccu'] ?? 'N/A',
        },
        {
          'label': 'Guardian\'s Annual Income',
          'value': widget.data['gannual']?.toString() ?? 'N/A',
        },
        {'label': 'WhatsApp Number', 'value': widget.data['whatsapp'] ?? 'N/A'},
      ],
    });

    // Address Information
    _sections.add({
      'title': 'Permanent Address',
      'icon': Icons.home,
      'color': Colors.orange,
      'items': [
        {'label': 'Town/Village', 'value': widget.data['ptown'] ?? 'N/A'},
        {'label': 'Police Station', 'value': widget.data['pps'] ?? 'N/A'},
        {'label': 'District', 'value': widget.data['pdist'] ?? 'N/A'},
        {'label': 'State', 'value': widget.data['pstate'] ?? 'N/A'},
        {
          'label': 'PIN Code',
          'value': widget.data['ppin']?.toString() ?? 'N/A',
        },
      ],
    });

    // Current Address
    _sections.add({
      'title': 'Current Address',
      'icon': Icons.location_on,
      'color': Colors.red,
      'items': [
        {'label': 'Town/Village', 'value': widget.data['ctown'] ?? 'N/A'},
        {'label': 'Police Station', 'value': widget.data['cps'] ?? 'N/A'},
        {'label': 'District', 'value': widget.data['cdist'] ?? 'N/A'},
        {'label': 'State', 'value': widget.data['cstate'] ?? 'N/A'},
        {'label': 'PIN Code', 'value': widget.data['cpin'] ?? 'N/A'},
      ],
    });

    // Other Information
    _sections.add({
      'title': 'Other Information',
      'icon': Icons.info,
      'color': Colors.teal,
      'items': [
        {
          'label': 'Disability',
          'value': widget.data['disability'] == 'Yes' ? 'Yes' : 'No',
        },
        {'label': 'Disability Type', 'value': widget.data['disatype'] ?? 'N/A'},
        {
          'label': 'Scholarship',
          'value': widget.data['schlor'] == 1 ? 'Yes' : 'No',
        },
        {
          'label': 'Scholarship By',
          'value': widget.data['schlorofferedby'] ?? 'N/A',
        },
        {'label': 'Hostel', 'value': widget.data['hostel'] ?? 'N/A'},
        {'label': 'Transport', 'value': widget.data['transport'] ?? 'N/A'},
        {
          'label': 'Session Dues',
          'value': widget.data['sessiondues']?.toString() ?? 'N/A',
        },
        {
          'label': 'Active Status',
          'value': widget.data['active'] == 1 ? 'Active' : 'Inactive',
        },
      ],
    });
  }
}
