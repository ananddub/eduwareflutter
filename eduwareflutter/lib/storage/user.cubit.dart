import 'package:eduwareflutter/storage/user.secure.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class UserModel {
  final String empid;
  final String name;
  final String gender;
  final String mob;
  final String phone;
  final String dob;
  final String qualification;
  final String designation;
  final String fname;
  final String doj;
  final String town;
  final String po;
  final String ps;
  final String dist;
  final String pin;
  final String state;
  final String ppath;
  final String idpath;
  final String barcode;
  final String active;
  final String role;
  final String accessToken;
  final String refreshToken;

  UserModel({
    required this.empid,
    required this.name,
    required this.gender,
    required this.mob,
    required this.phone,
    required this.dob,
    required this.qualification,
    required this.designation,
    required this.fname,
    required this.doj,
    required this.town,
    required this.po,
    required this.ps,
    required this.dist,
    required this.pin,
    required this.role,
    required this.state,
    required this.ppath,
    required this.idpath,
    required this.barcode,
    required this.active,
    required this.accessToken,
    required this.refreshToken,
  });

  factory UserModel.fromJson(Map<String, dynamic> json) {
    return UserModel(
      empid: json['empid'] ?? '',
      name: json['name'] ?? '',
      gender: json['gender'] ?? '',
      mob: json['mob'] ?? '',
      phone: json['phone'] ?? '',
      dob: json['dob'] ?? '',
      qualification: json['qualification'] ?? '',
      designation: json['designation'] ?? '',
      fname: json['fname'] ?? '',
      doj: json['doj'] ?? '',
      town: json['town'] ?? '',
      po: json['po'] ?? '',
      ps: json['ps'] ?? '',
      dist: json['dist'] ?? '',
      pin: json['pin'] ?? '',
      state: json['state'] ?? '',
      ppath: json['ppath'] ?? '',
      role: json['role'] ?? 'user',
      idpath: json['idpath'] ?? '',
      barcode: json['barcode'] ?? '',
      active: json['active'] ?? '',
      accessToken: json['access_token'] ?? '',
      refreshToken: json['refresh_token'] ?? '',
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'empid': empid,
      'name': name,
      'gender': gender,
      'mob': mob,
      'phone': phone,
      'dob': dob,
      'qualification': qualification,
      'designation': designation,
      'fname': fname,
      'doj': doj,
      'town': town,
      'po': po,
      'ps': ps,
      'dist': dist,
      'role': role,
      'pin': pin,
      'state': state,
      'ppath': ppath,
      'idpath': idpath,
      'barcode': barcode,
      'active': active,
      'access_token': accessToken,
      'refresh_token': refreshToken,
    };
  }

  UserModel copyWith({
    String? empid,
    String? name,
    String? gender,
    String? mob,
    String? phone,
    String? dob,
    String? qualification,
    String? designation,
    String? fname,
    String? doj,
    String? town,
    String? po,
    String? ps,
    String? dist,
    String? pin,
    String? role,
    String? state,
    String? ppath,
    String? idpath,
    String? barcode,
    String? active,
    String? accessToken,
    String? refreshToken,
  }) {
    return UserModel(
      empid: empid ?? this.empid,
      name: name ?? this.name,
      gender: gender ?? this.gender,
      mob: mob ?? this.mob,
      phone: phone ?? this.phone,
      dob: dob ?? this.dob,
      qualification: qualification ?? this.qualification,
      designation: designation ?? this.designation,
      fname: fname ?? this.fname,
      doj: doj ?? this.doj,
      town: town ?? this.town,
      po: po ?? this.po,
      ps: ps ?? this.ps,
      dist: dist ?? this.dist,
      pin: pin ?? this.pin,
      state: state ?? this.state,
      role: state ?? this.role,
      ppath: ppath ?? this.ppath,
      idpath: idpath ?? this.idpath,
      barcode: barcode ?? this.barcode,
      active: active ?? this.active,
      accessToken: accessToken ?? this.accessToken,
      refreshToken: refreshToken ?? this.refreshToken,
    );
  }
}

class UserCubit extends Cubit<UserModel?> {
  final SecureStorageService storageService;

  UserCubit(this.storageService) : super(null);

  Future<void> setUser(UserModel user) async {
    emit(user);
    await storageService.saveUser(user);
  }

  Future<void> updateTokens({
    required String accessToken,
    required String refreshToken,
  }) async {
    if (state != null) {
      final updated = state!.copyWith(
        accessToken: accessToken,
        refreshToken: refreshToken,
      );
      emit(updated);
      await storageService.saveUser(updated);
    }
  }

  Future<void> clearUser() async {
    emit(null);
    await storageService.clearUser();
  }

  Future<void> restoreUser() async {
    final user = await storageService.readUser();
    if (user != null) {
      emit(user);
    }
  }
}
