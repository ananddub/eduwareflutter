import 'dart:convert';
import 'package:eduwareflutter/storage/user.cubit.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

class SecureStorageService {
  final FlutterSecureStorage _storage = const FlutterSecureStorage();
  final String _userKey = 'user_data';

  Future<void> saveUser(UserModel user) async {
    final jsonString = jsonEncode(user.toJson());
    await _storage.write(key: _userKey, value: jsonString);
  }

  Future<UserModel?> readUser() async {
    final jsonString = await _storage.read(key: _userKey);
    if (jsonString == null) return null;

    final Map<String, dynamic> userMap = jsonDecode(jsonString);
    return UserModel.fromJson(userMap);
  }

  Future<void> clearUser() async {
    await _storage.delete(key: _userKey);
  }
}
