import 'dart:async';
import 'package:eduwareflutter/storage/user.cubit.dart';
import 'package:flutter/material.dart';
import 'package:eduwareflutter/constant/routes.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:go_router/go_router.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({Key? key}) : super(key: key);

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _fadeAnimation;
  late Animation<double> _scaleAnimation;
  late Animation<double> _rotateAnimation;

  Future<void> verify() async {
    try {
      final usercubit = context.read<UserCubit>();
      final value = await usercubit.storageService.readUser();
      usercubit.setUser(value!);
      debugPrint("value ${value.toString()}");
      if (usercubit.state != null && usercubit.state!.empid != null) {
        context.go(ApiRoute.photography);
      } else {
        context.go(ApiRoute.login);
      }
    } catch (e) {
      context.go(ApiRoute.login);
    }
  }

  @override
  void initState() {
    super.initState();

    try {
      _controller = AnimationController(
        duration: const Duration(seconds: 2),
        vsync: this,
      );

      _fadeAnimation = Tween<double>(begin: 0.0, end: 1.0).animate(
        CurvedAnimation(
          parent: _controller,
          curve: const Interval(0.0, 0.7, curve: Curves.easeIn),
        ),
      );

      _scaleAnimation = Tween<double>(begin: 0.5, end: 1.0).animate(
        CurvedAnimation(
          parent: _controller,
          curve: const Interval(0.2, 0.8, curve: Curves.elasticOut),
        ),
      );

      _rotateAnimation = Tween<double>(begin: 0.0, end: 0.1).animate(
        CurvedAnimation(
          parent: _controller,
          curve: const Interval(0.0, 0.5, curve: Curves.bounceOut),
        ),
      );

      _controller.forward();

      Timer(const Duration(seconds: 3), () {
        if (mounted) {
          verify();
          // Check if widget is still mounted
        }
      });
    } catch (e) {
      print('Error in SplashScreen initState: $e');
    }
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [
              Colors.blue[800]!,
              Colors.indigo[600]!,
              Colors.purple[500]!,
            ],
            stops: const [0.0, 0.5, 1.0],
          ),
        ),
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              // लोगो एनिमेशन
              RotationTransition(
                turns: _rotateAnimation,
                child: ScaleTransition(
                  scale: _scaleAnimation,
                  child: FadeTransition(
                    opacity: _fadeAnimation,
                    child: Container(
                      width: 140,
                      height: 140,
                      decoration: BoxDecoration(
                        color: Colors.white,
                        shape: BoxShape.circle,
                        boxShadow: [
                          BoxShadow(
                            color: Colors.black.withOpacity(0.2),
                            blurRadius: 15,
                            spreadRadius: 2,
                            offset: const Offset(0, 8),
                          ),
                        ],
                      ),
                      child: Center(
                        child: Stack(
                          alignment: Alignment.center,
                          children: [
                            Icon(
                              Icons.school,
                              size: 80,
                              color: Colors.indigo[700],
                            ),
                            Positioned(
                              top: 25,
                              right: 25,
                              child: Icon(
                                Icons.auto_stories,
                                size: 30,
                                color: Colors.orange[700],
                              ),
                            ),
                            Positioned(
                              bottom: 25,
                              left: 25,
                              child: Icon(
                                Icons.emoji_events,
                                size: 30,
                                color: Colors.green[600],
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ),
                ),
              ),
              const SizedBox(height: 40),

              // एप्लिकेशन का नाम
              FadeTransition(
                opacity: _fadeAnimation,
                child: const Text(
                  'EDUWARE',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 38,
                    fontWeight: FontWeight.bold,
                    letterSpacing: 5,
                    shadows: [
                      Shadow(
                        color: Colors.black26,
                        blurRadius: 5,
                        offset: Offset(0, 3),
                      ),
                    ],
                  ),
                ),
              ),

              const SizedBox(height: 15),

              // टैगलाइन
              FadeTransition(
                opacity: _fadeAnimation,
                child: Container(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 16,
                    vertical: 8,
                  ),
                  decoration: BoxDecoration(
                    color: Colors.white.withOpacity(0.2),
                    borderRadius: BorderRadius.circular(20),
                  ),
                  child: const Text(
                    'शिक्षा का डिजिटल भविष्य',
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 16,
                      fontWeight: FontWeight.w500,
                      letterSpacing: 1,
                    ),
                  ),
                ),
              ),

              const SizedBox(height: 60),

              // लोडिंग इंडिकेटर
              FadeTransition(
                opacity: _fadeAnimation,
                child: SizedBox(
                  width: 40,
                  height: 40,
                  child: CircularProgressIndicator(
                    valueColor: AlwaysStoppedAnimation<Color>(
                      Colors.yellow[200]!,
                    ),
                    strokeWidth: 3,
                  ),
                ),
              ),

              const SizedBox(height: 20),

              // वर्जन टेक्स्ट
              FadeTransition(
                opacity: _fadeAnimation,
                child: Text(
                  'Version 1.0.0',
                  style: TextStyle(
                    color: Colors.white.withOpacity(0.7),
                    fontSize: 12,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
