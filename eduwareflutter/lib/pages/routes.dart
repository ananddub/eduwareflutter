import 'package:eduwareflutter/constant/routes.dart';
import 'package:eduwareflutter/pages/photo/photo.dart';
import 'package:eduwareflutter/pages/photo/photo_dashboard.dart';
import 'package:flutter/cupertino.dart';
import 'package:go_router/go_router.dart';

class AppRouter {
    // BuildContext, Animation<double>, Animation<double>, Widget
    static Widget _slideTranistion(
            BuildContext context,
            Animation<double> animation,
            Animation<double> secondaryAnimation,
            Widget child,
            ) {
        final tween = Tween<Offset>(
                begin: const Offset(1, 0),
                end: Offset.zero,
                ).animate(animation);
        return SlideTransition(position: tween, child: child);
    }

    static Widget _expandTranistion(
            BuildContext context,
            Animation<double> animation,
            Animation<double> secondaryAnimation,
            Widget child,
            ) {
        final tween = Tween(begin: 0.0, end: 1.0).animate(animation);
        return SizeTransition(
                sizeFactor: tween,
                axis: Axis.horizontal,
                child: child,
                );
    }

    GoRouter router = GoRouter(
            initialLocation: ApiRoute.photography,
            routes: [
            GoRoute(
                path: ApiRoute.photography,
                pageBuilder:
                (context, state) => CustomTransitionPage(
                    child: PhotoGraphy(),
                    transitionsBuilder: _expandTranistion,
                    ),
                ),
            GoRoute(
                path: ApiRoute.photodashboard,
                pageBuilder: (context, state) {
                final value = state.extra as Map<String, dynamic>;
                return CustomTransitionPage(
                        child: PhotoDashboard(data: value),
                        transitionsBuilder: _expandTranistion,
                        );
                },
                ),
            ],
            );
}
