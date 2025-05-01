import 'package:eduwareflutter/constant/routes.dart';
import 'package:eduwareflutter/constant/server.dart';
import 'package:featurehub_sse_client/featurehub_sse_client.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class PhotoGraphy extends StatefulWidget {
  const PhotoGraphy({super.key});

  @override
  State<PhotoGraphy> createState() => _PhotoGraphyState();
}

// nest
class _PhotoGraphyState extends State<PhotoGraphy> {
  late Future<List> data;
  final ScrollController _scrollController = ScrollController();
  final TextEditingController _searchController = TextEditingController();
  String _searchQuery = '';
  String selectedClass = 'X';
  String selectedSection = 'A';
  List<String> classOptions = [
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
    'X',
  ];
  bool _expanded = false;
  void getData() {
    data = getAdmision(classId: selectedClass, sectionId: selectedSection);
  }

  Future<void> event() async {
    EventSource eventSource = await EventSource.connect("$BaseUrl/photo/event");
    eventSource.listen((event) {
      debugPrint('event data ${event.data}');
      setState(() {
        getData();
      });
    });
  }

  @override
  void initState() {
    super.initState();
    getData();
    event();
  }

  void navigateToAdmissionDetails(data) {
    context.push(ApiRoute.photodashboard, extra: data['tblAdmission']);
  }

  Widget _buildStatChip(
    String label,
    String count,
    Color color,
    IconData icon,
  ) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
      child: Container(
        child: Column(
          children: [
            Text(
              label,
              style: TextStyle(
                fontSize: 15,
                color: color,
                fontWeight: FontWeight.w600,
              ),
            ),
            FutureBuilder(
              future: data,
              builder: (context, snapshot) {
                if (snapshot.connectionState == ConnectionState.waiting) {
                  return SizedBox(
                    width: 25,
                    height: 25,
                    child: CircularProgressIndicator(
                      color: Colors.blue,
                      strokeWidth: 1,
                    ),
                  );
                } else if (snapshot.hasError) {
                } else if (snapshot.hasData) {
                  var total = snapshot.data!.length;
                  if (label == 'Completed') {
                    var completed = 0;
                    for (var event in snapshot.data!) {
                      if (event!["tblPhoto"] != null) {
                        completed++;
                      }
                    }
                    debugPrint('Completed: $completed');
                    total = completed;
                  } else if (label == 'Pending') {
                    var pending = 0;
                    for (var event in snapshot.data!) {
                      if (event!["tblPhoto"] == null) {
                        pending++;
                      }
                    }
                    debugPrint('Pending: $pending');
                    total = pending;
                  }
                  return Text(
                    total.toString(),
                    style: TextStyle(
                      fontSize: 24,
                      color: color,
                      fontWeight: FontWeight.bold,
                    ),
                  );
                }

                return Text('Error');
              },
            ),
          ],
        ),
      ),
    );
  }

  @override
  void dispose() {
    _scrollController.dispose();
    _searchController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[50],
      body: CustomScrollView(
        controller: _scrollController,
        physics: const BouncingScrollPhysics(),
        slivers: [
          _AppBar(),
          SliverToBoxAdapter(
            child: Container(
              margin: const EdgeInsets.fromLTRB(16, 16, 16, 8),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                spacing: 10,
                children: [
                  _buildStatChip("Total", "1000", Colors.blue, Icons.people),
                  _buildStatChip(
                    "Completed",
                    "59",
                    Colors.green,
                    Icons.check_circle,
                  ),
                  _buildStatChip(
                    "Pending",
                    "94",
                    Colors.orange,
                    Icons.pending_actions,
                  ),
                ],
              ),
            ),
          ),

          SliverToBoxAdapter(
            child: Container(
              margin: const EdgeInsets.fromLTRB(16, 16, 16, 8),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Student List',
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                      color: Colors.grey[800],
                    ),
                  ),
                  const SizedBox(height: 8),
                  Container(
                    padding: const EdgeInsets.all(12),
                    decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(10),
                      boxShadow: [
                        BoxShadow(
                          color: Colors.indigo.withOpacity(0.1),
                          spreadRadius: 1,
                          blurRadius: 6,
                          offset: const Offset(0, 2),
                        ),
                      ],
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(
                          children: [
                            Icon(
                              Icons.filter_alt_rounded,
                              color: Colors.indigo[700],
                              size: 18,
                            ),
                            const SizedBox(width: 6),
                            Text(
                              'Filters',
                              style: TextStyle(
                                fontWeight: FontWeight.w600,
                                color: Colors.indigo[700],
                                fontSize: 14,
                              ),
                            ),
                            const Spacer(),
                            IconButton(
                              onPressed: () {
                                setState(() {
                                  _expanded = !_expanded;
                                });
                              },
                              icon: Icon(
                                _expanded
                                    ? Icons.expand_less
                                    : Icons.expand_more,
                                color: Colors.indigo[700],
                                size: 20,
                              ),
                              padding: EdgeInsets.zero,
                              constraints: const BoxConstraints(),
                            ),
                          ],
                        ),
                        if (_expanded) ...[
                          const SizedBox(height: 12),
                          // Search field
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 10),
                            child: TextField(
                              controller: _searchController,
                              decoration: InputDecoration(
                                isDense: true,
                                hintText: 'Search by name or reg. no.',
                                hintStyle: TextStyle(
                                  fontSize: 14,
                                  color: Colors.grey[500],
                                ),
                                enabledBorder: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(8),
                                  borderSide: BorderSide(
                                    color: Colors.grey[300]!,
                                  ),
                                ),
                                focusedBorder: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(8),
                                  borderSide: BorderSide(
                                    color: Colors.indigo[700]!,
                                  ),
                                ),
                                prefixIcon: Icon(
                                  Icons.search,
                                  size: 20,
                                  color: Colors.indigo[700],
                                ),
                              ),
                              style: const TextStyle(
                                fontSize: 14,
                                fontWeight: FontWeight.w500,
                              ),
                              onChanged: (value) {
                                setState(() {
                                  _searchQuery = value;
                                });
                              },
                            ),
                          ),
                          const SizedBox(height: 12),
                          Row(
                            children: [
                              Expanded(
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      'Class:',
                                      style: TextStyle(
                                        fontWeight: FontWeight.w500,
                                        color: Colors.grey[800],
                                        fontSize: 12,
                                      ),
                                    ),
                                    const SizedBox(height: 6),
                                    Container(
                                      padding: const EdgeInsets.symmetric(
                                        horizontal: 10,
                                      ),
                                      decoration: BoxDecoration(
                                        color: Colors.grey[50],
                                        borderRadius: BorderRadius.circular(6),
                                        border: Border.all(
                                          color: Colors.grey.withOpacity(0.3),
                                        ),
                                      ),
                                      child: DropdownButtonHideUnderline(
                                        child: DropdownButton<String>(
                                          value: selectedClass,
                                          isExpanded: true,
                                          icon: Icon(
                                            Icons.arrow_drop_down,
                                            color: Colors.indigo[700],
                                            size: 20,
                                          ),
                                          items:
                                              classOptions
                                                  .map(
                                                    (roman) => DropdownMenuItem(
                                                      value: roman,
                                                      child: Text(
                                                        roman,
                                                        style: const TextStyle(
                                                          fontSize: 13,
                                                        ),
                                                      ),
                                                    ),
                                                  )
                                                  .toList(),
                                          onChanged: (value) {
                                            setState(() {
                                              selectedClass = value!;
                                            });
                                          },
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                              const SizedBox(width: 12),
                              Expanded(
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      'Section:',
                                      style: TextStyle(
                                        fontWeight: FontWeight.w500,
                                        color: Colors.grey[800],
                                        fontSize: 12,
                                      ),
                                    ),
                                    const SizedBox(height: 6),
                                    Container(
                                      padding: const EdgeInsets.symmetric(
                                        horizontal: 10,
                                      ),
                                      decoration: BoxDecoration(
                                        color: Colors.grey[50],
                                        borderRadius: BorderRadius.circular(6),
                                        border: Border.all(
                                          color: Colors.grey.withOpacity(0.3),
                                        ),
                                      ),
                                      child: DropdownButtonHideUnderline(
                                        child: DropdownButton<String>(
                                          value: selectedSection,
                                          isExpanded: true,
                                          icon: Icon(
                                            Icons.arrow_drop_down,
                                            color: Colors.indigo[700],
                                            size: 20,
                                          ),
                                          items:
                                              ['A', 'B', 'C', 'D']
                                                  .map(
                                                    (section) =>
                                                        DropdownMenuItem(
                                                          value: section,
                                                          child: Text(
                                                            section,
                                                            style:
                                                                const TextStyle(
                                                                  fontSize: 13,
                                                                ),
                                                          ),
                                                        ),
                                                  )
                                                  .toList(),
                                          onChanged: (value) {
                                            setState(() {
                                              selectedSection = value!;
                                            });
                                          },
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ],
                          ),
                          const SizedBox(height: 12),
                          SizedBox(
                            width: double.infinity,
                            child: ElevatedButton(
                              onPressed: () {
                                setState(() {
                                  getData();
                                });
                              },
                              style: ElevatedButton.styleFrom(
                                backgroundColor: Colors.indigo,
                                foregroundColor: Colors.white,
                                padding: const EdgeInsets.symmetric(
                                  vertical: 8,
                                ),
                                shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(6),
                                ),
                                elevation: 0,
                              ),
                              child: const Text(
                                'Apply Filter',
                                style: TextStyle(
                                  fontWeight: FontWeight.w600,
                                  fontSize: 13,
                                ),
                              ),
                            ),
                          ),
                        ],
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),

          SliverPadding(
            padding: const EdgeInsets.symmetric(horizontal: 0),
            sliver: FutureBuilder<List>(
              future: data,
              builder: (context, snapshot) {
                if (snapshot.connectionState == ConnectionState.waiting) {
                  return const SliverFillRemaining(
                    child: Center(
                      child: CircularProgressIndicator(color: Colors.indigo),
                    ),
                  );
                }

                if (snapshot.hasError) {
                  return SliverFillRemaining(
                    child: Center(
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          const Icon(
                            Icons.error_outline,
                            color: Colors.red,
                            size: 64,
                          ),
                          const SizedBox(height: 16),
                          Text(
                            'Error: ${snapshot.error}',
                            style: const TextStyle(
                              color: Colors.red,
                              fontSize: 16,
                            ),
                          ),
                          const SizedBox(height: 24),
                          ElevatedButton.icon(
                            onPressed: () {
                              setState(() {
                                getData();
                              });
                            },
                            icon: const Icon(Icons.refresh),
                            label: const Text('Try Again'),
                            style: ElevatedButton.styleFrom(
                              backgroundColor: Colors.indigo,
                              foregroundColor: Colors.white,
                              padding: const EdgeInsets.symmetric(
                                horizontal: 20,
                                vertical: 12,
                              ),
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(12),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  );
                }

                if (snapshot.hasData && snapshot.data!.isNotEmpty) {
                  // Filter data based on search query
                  var filteredData = snapshot.data!;
                  if (_searchQuery.isNotEmpty) {
                    filteredData =
                        snapshot.data!.where((item) {
                          var admission = item['tblAdmission'];
                          var name =
                              admission['name']?.toString().toLowerCase() ?? '';
                          var regno =
                              admission['regno']?.toString().toLowerCase() ??
                              '';
                          var query = _searchQuery.toLowerCase();
                          return name.contains(query) || regno.contains(query);
                        }).toList();
                  }

                  if (filteredData.isEmpty) {
                    return SliverFillRemaining(
                      child: Center(
                        child: Column(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            Icon(
                              Icons.search_off,
                              color: Colors.grey[400],
                              size: 64,
                            ),
                            const SizedBox(height: 16),
                            Text(
                              'No students found',
                              style: TextStyle(
                                color: Colors.grey[600],
                                fontSize: 16,
                                fontWeight: FontWeight.w500,
                              ),
                            ),
                          ],
                        ),
                      ),
                    );
                  }

                  return SliverList(
                    delegate: SliverChildBuilderDelegate((context, index) {
                      var data = filteredData[index]['tblAdmission'];
                      return Container(
                        margin: const EdgeInsets.only(bottom: 1),
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(16),
                          boxShadow: [
                            BoxShadow(
                              color: Colors.grey.withOpacity(0.1),
                              spreadRadius: 1,
                              blurRadius: 8,
                              offset: const Offset(0, 3),
                            ),
                          ],
                        ),
                        child: Material(
                          color: Colors.transparent,
                          borderRadius: BorderRadius.circular(16),
                          child: InkWell(
                            onTap: () {
                              navigateToAdmissionDetails(snapshot.data![index]);
                            },
                            borderRadius: BorderRadius.circular(0),
                            child: Padding(
                              padding: const EdgeInsets.symmetric(
                                vertical: 10,
                                horizontal: 10,
                              ),
                              child: Row(
                                children: [
                                  Hero(
                                    tag: 'student-${data['regno'] ?? ''}',
                                    child: Container(
                                      width: 55,
                                      height: 55,
                                      decoration: BoxDecoration(
                                        shape: BoxShape.circle,
                                        border: Border.all(
                                          color: Colors.indigo.withOpacity(0.5),
                                          width: 1,
                                        ),
                                        boxShadow: [
                                          BoxShadow(
                                            color: Colors.indigo.withOpacity(
                                              0.2,
                                            ),
                                            spreadRadius: 1,
                                            blurRadius: 2,
                                            offset: const Offset(0, 3),
                                          ),
                                        ],
                                      ),
                                      child: ClipOval(
                                        child: Image.network(
                                          ImageUrl(data['admno']),
                                          fit: BoxFit.contain,
                                          errorBuilder: (
                                            context,
                                            error,
                                            stackTrace,
                                          ) {
                                            return Container(
                                              color: Colors.indigo.withOpacity(
                                                0.1,
                                              ),
                                              child: Icon(
                                                Icons.camera_alt,
                                                size: 30,
                                                color: Colors.indigo[300],
                                              ),
                                            );
                                          },
                                        ),
                                      ),
                                    ),
                                  ),
                                  const SizedBox(width: 20),
                                  Expanded(
                                    child: Column(
                                      crossAxisAlignment:
                                          CrossAxisAlignment.start,
                                      children: [
                                        Text(
                                          data['name'] ?? 'No name',
                                          style: const TextStyle(
                                            fontSize: 16,
                                            fontWeight: FontWeight.bold,
                                            color: Colors.indigo,
                                          ),
                                        ),
                                        const SizedBox(height: 6),
                                        Text(
                                          'Admission No: ${data['admno'] ?? 'N/A'}',
                                          style: TextStyle(
                                            fontSize: 14,
                                            color: Colors.grey[700],
                                            fontWeight: FontWeight.w500,
                                          ),
                                        ),
                                        const SizedBox(height: 8),
                                        Row(
                                          children: [
                                            Container(
                                              padding:
                                                  const EdgeInsets.symmetric(
                                                    horizontal: 10,
                                                    vertical: 4,
                                                  ),
                                              decoration: BoxDecoration(
                                                color: Colors.blue.withOpacity(
                                                  0.1,
                                                ),
                                                borderRadius:
                                                    BorderRadius.circular(12),
                                                border: Border.all(
                                                  color: Colors.blue
                                                      .withOpacity(0.3),
                                                  width: 1,
                                                ),
                                              ),
                                              child: Row(
                                                children: [
                                                  Icon(
                                                    Icons.class_,
                                                    size: 14,
                                                    color: Colors.blue[700],
                                                  ),
                                                  const SizedBox(width: 4),
                                                  Text(
                                                    '${data['class'] ?? 'N/A'}',
                                                    style: TextStyle(
                                                      fontSize: 13,
                                                      fontWeight:
                                                          FontWeight.w500,
                                                      color: Colors.blue[700],
                                                    ),
                                                  ),
                                                ],
                                              ),
                                            ),
                                            const SizedBox(width: 8),
                                            Container(
                                              padding:
                                                  const EdgeInsets.symmetric(
                                                    horizontal: 10,
                                                    vertical: 4,
                                                  ),
                                              decoration: BoxDecoration(
                                                color: Colors.purple
                                                    .withOpacity(0.1),
                                                borderRadius:
                                                    BorderRadius.circular(12),
                                                border: Border.all(
                                                  color: Colors.purple
                                                      .withOpacity(0.3),
                                                  width: 1,
                                                ),
                                              ),
                                              child: Row(
                                                children: [
                                                  Icon(
                                                    Icons.numbers,
                                                    size: 14,
                                                    color: Colors.purple[700],
                                                  ),
                                                  const SizedBox(width: 4),
                                                  Text(
                                                    '${data['roll'].toString() ?? 'N/A'}',
                                                    style: TextStyle(
                                                      fontSize: 13,
                                                      fontWeight:
                                                          FontWeight.w500,
                                                      color: Colors.purple[700],
                                                    ),
                                                  ),
                                                ],
                                              ),
                                            ),
                                            const SizedBox(width: 8),
                                            Container(
                                              padding:
                                                  const EdgeInsets.symmetric(
                                                    horizontal: 10,
                                                    vertical: 4,
                                                  ),
                                              decoration: BoxDecoration(
                                                color: Colors.orange
                                                    .withOpacity(0.1),
                                                borderRadius:
                                                    BorderRadius.circular(12),
                                                border: Border.all(
                                                  color: Colors.orange
                                                      .withOpacity(0.3),
                                                  width: 1,
                                                ),
                                              ),
                                              child: Row(
                                                children: [
                                                  Icon(
                                                    Icons.group,
                                                    size: 14,
                                                    color: Colors.orange[700],
                                                  ),
                                                  const SizedBox(width: 4),
                                                  Text(
                                                    '${data['section'] ?? 'N/A'}',
                                                    style: TextStyle(
                                                      fontSize: 13,
                                                      fontWeight:
                                                          FontWeight.w500,
                                                      color: Colors.orange[700],
                                                    ),
                                                  ),
                                                ],
                                              ),
                                            ),
                                          ],
                                        ),
                                      ],
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ),
                      );
                    }, childCount: filteredData.length),
                  );
                }

                // Fallback state if data is empty
                return const SliverFillRemaining(
                  child: Center(
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Icon(
                          Icons.photo_album_outlined,
                          size: 80,
                          color: Colors.grey,
                        ),
                        SizedBox(height: 24),
                        Text(
                          'No photography data available',
                          style: TextStyle(
                            fontSize: 18,
                            color: Colors.grey,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                        SizedBox(height: 8),
                        Text(
                          'Pull down to refresh',
                          style: TextStyle(fontSize: 14, color: Colors.grey),
                        ),
                      ],
                    ),
                  ),
                );
              },
            ),
          ),

          // Bottom Padding
          SliverToBoxAdapter(child: SizedBox(height: 100)),
        ],
      ),
    );
  }

  void _Dailog() {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          content: Column(
            mainAxisSize: MainAxisSize.min,
            spacing: 4,
            children: [
              TextField(
                decoration: InputDecoration(
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(8),
                    borderSide: const BorderSide(color: Colors.grey, width: 1),
                  ),
                ),
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                spacing: 20,
                children: [
                  Column(
                    children: [
                      Text("Class"),
                      Text("I"),
                      Text("II"),
                      Text("III"),
                      Text("IV"),
                      Text("V"),
                      Text("VI"),
                      Text("VII"),
                      Text("IX"),
                      Text("X"),
                      Text("XI"),
                      Text("XII"),
                    ],
                  ),
                  Column(
                    children: [
                      Text("Section"),
                      Text("A"),
                      Text("B"),
                      Text("C"),
                      Text("D"),
                      Text("E"),
                      Text("F"),
                      Text("G"),
                      Text("H"),
                      Text("J"),
                      Text("K"),
                      Text("L"),
                    ],
                  ),
                ],
              ),
            ],
          ),
          actions: [],
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
          contentPadding: const EdgeInsets.fromLTRB(24, 20, 24, 10),
        );
      },
    );
  }

  Widget _AppBar() {
    return SliverAppBar(
      expandedHeight: 180.0,
      floating: false,
      pinned: true,
      stretch: true,
      backgroundColor: Colors.indigo,
      leading: const BackButton(color: Colors.white),
      actions: [
        IconButton(
          onPressed: () {
            setState(() {
              getData();
            });
          },
          icon: const Icon(Icons.refresh, color: Colors.white),
          tooltip: 'Refresh',
        ),
      ],
      flexibleSpace: FlexibleSpaceBar(
        title: Text(
          'Photography',
          style: TextStyle(
            color: Colors.white,
            fontWeight: FontWeight.bold,
            fontSize: 20,
          ),
        ),
        background: Container(
          decoration: BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,
              colors: [Colors.indigo.shade800, Colors.indigo.shade600],
            ),
          ),
          child: Stack(
            children: [
              Positioned(
                right: -50,
                top: -50,
                child: Container(
                  width: 200,
                  height: 200,
                  decoration: BoxDecoration(
                    color: Colors.white.withOpacity(0.1),
                    shape: BoxShape.circle,
                  ),
                ),
              ),
              Positioned(
                left: -30,
                bottom: -30,
                child: Container(
                  width: 150,
                  height: 150,
                  decoration: BoxDecoration(
                    color: Colors.white.withOpacity(0.1),
                    shape: BoxShape.circle,
                  ),
                ),
              ),
              Center(
                child: Icon(
                  Icons.camera_alt,
                  size: 60,
                  color: Colors.white.withOpacity(0.3),
                ),
              ),
            ],
          ),
        ),
        stretchModes: const [StretchMode.zoomBackground],
      ),
    );
  }
}
