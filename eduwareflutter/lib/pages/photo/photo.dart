import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class PhotoGraphy extends StatefulWidget {
  const PhotoGraphy({super.key});

  @override
  State<PhotoGraphy> createState() => _PhotoGraphyState();
}

// nest
class _PhotoGraphyState extends State<PhotoGraphy> {
  late Future<List> data;
  final ScrollController _scrollController = ScrollController();
  bool _expanded = true;
  void getData() {
    data = Dio().get('http://192.168.1.5:4000/admision').then((response) {
      return response.data["data"];
    });
  }

  @override
  void initState() {
    super.initState();
    getData();
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
            Text(
              count,
              style: TextStyle(
                fontSize: 24,
                color: color,
                fontWeight: FontWeight.bold,
              ),
            ),
          ],
        ),
      ),
    );
  }

  @override
  void dispose() {
    _scrollController.dispose();
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
          // App Bar
          _AppBar(), // Stats Section
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

          // Section Title
          SliverToBoxAdapter(
            child: Container(
              margin: const EdgeInsets.fromLTRB(20, 24, 20, 8),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    'Student List',
                    style: TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                      color: Colors.grey[800],
                    ),
                  ),
                  Container(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 12,
                      vertical: 6,
                    ),
                    decoration: BoxDecoration(
                      color: Colors.indigo.withOpacity(0.1),
                      borderRadius: BorderRadius.circular(20),
                    ),
                    child: Row(
                      children: [
                        Icon(
                          Icons.filter_list,
                          size: 16,
                          color: Colors.indigo[700],
                        ),
                        const SizedBox(width: 4),
                        Text(
                          'Filter',
                          style: TextStyle(
                            fontSize: 14,
                            fontWeight: FontWeight.w500,
                            color: Colors.indigo[700],
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),

          // Student List
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
                  return SliverList(
                    delegate: SliverChildBuilderDelegate((context, index) {
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
                            onTap: () {},
                            borderRadius: BorderRadius.circular(0),
                            child: Padding(
                              padding: const EdgeInsets.symmetric(
                                vertical: 10,
                                horizontal: 10,
                              ),
                              child: Row(
                                children: [
                                  Hero(
                                    tag:
                                        'student-${snapshot.data![index]['regno'] ?? ''}',
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
                                          snapshot.data![index]['image'] ?? '',
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
                                          snapshot.data![index]['name'] ??
                                              'No name',
                                          style: const TextStyle(
                                            fontSize: 16,
                                            fontWeight: FontWeight.bold,
                                            color: Colors.indigo,
                                          ),
                                        ),
                                        const SizedBox(height: 6),
                                        Text(
                                          'Admission No: ${snapshot.data![index]['admno'] ?? 'N/A'}',
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
                                                    '${snapshot.data![index]['class'] ?? 'N/A'}',
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
                                                    '${snapshot.data![index]['roll'].toString() ?? 'N/A'}',
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
                                                    '${snapshot.data![index]['section'] ?? 'N/A'}',
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
                    }, childCount: snapshot.data!.length),
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
        AnimatedContainer(
          duration: const Duration(milliseconds: 300),
          alignment: Alignment.centerLeft,
          height: 40,
          decoration: BoxDecoration(
            border: Border(bottom: BorderSide(color: Colors.transparent)),
            color:
                this._expanded
                    ? Colors.indigo.shade400
                    : Colors.white.withOpacity(0.0),
            borderRadius: BorderRadius.circular(12),
          ),
          width: this._expanded ? 300 : 40,
          child: TextField(
            style: TextStyle(color: Colors.white),
            decoration: InputDecoration(
              filled: true,
              fillColor: Colors.transparent,
              hintText: "Enter your roll",
              hintStyle: TextStyle(color: Colors.white.withOpacity(0.5)),
              border: InputBorder.none,
              prefixIcon: IconButton(
                onPressed: () {
                  setState(() {
                    this._expanded = !this._expanded;
                  });
                },
                icon: const Icon(Icons.search, color: Colors.white),
                tooltip: 'Search',
              ),
              suffixIcon:
                  this._expanded
                      ? IconButton(
                        icon: Icon(Icons.forward, color: Colors.white),
                        onPressed: () {},
                      )
                      : Text(""),
            ),
          ),
        ),
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
