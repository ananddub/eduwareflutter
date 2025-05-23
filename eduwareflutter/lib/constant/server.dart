import 'package:dio/dio.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

// const BaseUrl = 'http://95.111.232.91:4000';
const BaseUrl = 'http://localhost:4000';
Dio CustomDios() {
  final dio = Dio();
  dio.options.baseUrl = BaseUrl;
  return dio;
}

Future<List<dynamic>> getAdmision({String? classId, String? sectionId}) async {
  if (classId == null) {
    throw ArgumentError('classId is required');
  }
  if (sectionId == null) {
    return CustomDios().get('/admision?class=$classId').then((response) {
      return response.data["data"];
    });
  }
  return CustomDios().get('/admision?class=$classId&section=$sectionId').then((
    response,
  ) {
    return response.data["data"];
  });
}

Future<List<dynamic>> setImagesToServer(String admno, FormData formData) async {
  return CustomDios()
      .post(
        '/photo',
        data: formData,
        options: Options(
          headers: {'Content-Type': 'multipart/form-data', 'admno': admno},
        ),
      )
      .then((response) {
        debugPrint(response.data);
        return response.data["data"];
      });
}

String ImageUrl(String admno, [String? date = "today"]) {
  return '${BaseUrl}/image/$admno?date=$date';
}

Future<Map<String, dynamic>> LoginRequest(
  String database,
  String phone,
  String password,
) async {
  final map = {'database': database, 'phone': phone, 'password': password};

  final response = await CustomDios().post(
    '/auth/login',
    data: map,
    options: Options(headers: {'Content-Type': 'application/json'}),
  );

  debugPrint(response.data.toString());
  return response.data;
}
