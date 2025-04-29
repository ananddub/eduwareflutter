import 'package:flutter/material.dart';

class PhotoDashboard extends StatefulWidget {
  const PhotoDashboard({super.key});

  @override
  State<PhotoDashboard> createState() => _PhotoDashboardState();
}

class _PhotoDashboardState extends State<PhotoDashboard> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: BackButton(onPressed: () {}),
        title: Text("Dashboard"),
      ),
      body: Center(child: Text("Photo Dashboard")),
    );
  }
}
