import 'package:flutter/material.dart';

class PhotoGraphy extends StatefulWidget {
  const PhotoGraphy({super.key});

  @override
  State<PhotoGraphy> createState() => _PhotoGraphyState();
}

class _PhotoGraphyState extends State<PhotoGraphy> {
  final List<Map<String, String>> items = [
    {'title': 'Item 1', 'image': 'assets/image1.jpg'},
    {'title': 'Item 2', 'image': 'assets/image2.jpg'},
    {'title': 'Item 3', 'image': 'assets/image3.jpg'},
  ];

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: items.length,
      itemBuilder: (context, index) {
        return ListTile(
          leading: Image.asset(items[index]['image']!),
          title: Text(items[index]['title']!),
        );
      },
    );
  }
}
