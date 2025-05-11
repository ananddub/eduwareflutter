import 'package:eduwareflutter/pages/photo/photo.dart';
import 'package:eduwareflutter/pages/routes.dart';
import 'package:eduwareflutter/storage/user.cubit.dart';
import 'package:eduwareflutter/storage/user.secure.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

void main() {
  final storage = SecureStorageService();
  runApp(
    MultiBlocProvider(
      providers: [BlocProvider<UserCubit>(create: (_) => UserCubit(storage))],
      child: const MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'Eduware Demo',

      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.blue),
      ),
      routerConfig: AppRouter().router,
    );
  }
}
