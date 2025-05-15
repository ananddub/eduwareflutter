import 'package:eduwareflutter/constant/routes.dart';
import 'package:eduwareflutter/constant/server.dart';
import 'package:eduwareflutter/storage/user.cubit.dart';
import 'package:flutter/material.dart';
// import 'package:eduwareflutter/pages/auth/signup_page.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:go_router/go_router.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({Key? key}) : super(key: key);

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final _formKey = GlobalKey<FormState>();
  final TextEditingController _phoneController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  final TextEditingController _schoolCodeController = TextEditingController();
  bool _isLoading = false;
  bool _obscurePassword = true;
  bool _rememberMe = false;
  String _selectedSchool = 'eduware'; // Default selected school
  // List of available schools
  final List<String> _schools = ['sisdb', 'eduware'];

  @override
  void dispose() {
    _phoneController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  void _login() async {
    if (_formKey.currentState!.validate()) {
      setState(() => _isLoading = true);
      final data = await LoginRequest(
        _selectedSchool,
        _phoneController.text,
        _passwordController.text,
      );
      final myCubit = context.read<UserCubit>();

      try {
        final json = data['data']["0"];
        final usermodel = UserModel(
          empid: json['empid'].toString(),
          name: json['name'].toString(),
          gender: json['gender'].toString(),
          mob: json['mob'].toString(),
          phone: json['phone'].toString(),
          dob: json['dob'].toString(),
          qualification: json['qualification'].toString(),
          designation: json['designation'].toString(),
          fname: json['fname'].toString(),
          doj: json['doj'].toString(),
          town: json['town'].toString(),
          po: json['po'].toString(),
          ps: json['ps'].toString(),
          dist: json['dist'].toString(),
          pin: json['pin'].toString(),
          state: json['state'].toString(),
          ppath: json['ppath'].toString(),
          role: data['data']['role'].toString(),
          idpath: json['idpath'].toString(),
          barcode: json['barcode'].toString(),
          active: json['active'].toString(),
          accessToken: data['data']['access_token'].toString(),
          refreshToken: data['data']['refresh_token'].toString(),
        );

        debugPrint("hello world");
        myCubit.setUser(usermodel);
        context.replace(ApiRoute.photography);
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Center(
              child: Text(
                "Sucessfully logined",
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 16,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            backgroundColor: Colors.green,
          ),
        );
      } catch (e) {
        debugPrint(e.toString());
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Center(
              child: Text(
                "Invalid Crendential phone or password doesnot matched",
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 16,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            backgroundColor: Colors.red,
          ),
        );
      } finally {
        setState(() => _isLoading = false);
      }
    } else {
      ScaffoldMessenger.of(
        context,
      ).showSnackBar(const SnackBar(content: Text("Please fill all fields")));
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF5F5F5),
      body: SafeArea(
        child: SingleChildScrollView(
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 24.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                const SizedBox(height: 60),

                // Logo
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      "Edu",
                      style: TextStyle(
                        fontSize: 32,
                        fontWeight: FontWeight.bold,
                        color: Colors.black,
                      ),
                    ),
                    Container(
                      width: 40,
                      height: 40,
                      decoration: BoxDecoration(
                        color: Colors.indigo,
                        shape: BoxShape.circle,
                      ),
                      child: Center(
                        child: Icon(
                          Icons.school,
                          size: 24,
                          color: Colors.white,
                        ),
                      ),
                    ),
                    Text(
                      "are",
                      style: TextStyle(
                        fontSize: 32,
                        fontWeight: FontWeight.bold,
                        color: Colors.black,
                      ),
                    ),
                  ],
                ),

                const SizedBox(height: 80),

                // Welcome Text
                const Text(
                  "Welcome to EduWare",
                  style: TextStyle(
                    fontSize: 24,
                    fontWeight: FontWeight.bold,
                    color: Colors.black,
                  ),
                ),

                const SizedBox(height: 8),

                const Text(
                  "login now!",
                  style: TextStyle(
                    fontSize: 24,
                    fontWeight: FontWeight.bold,
                    color: Colors.black,
                  ),
                ),

                const SizedBox(height: 40),

                // Form
                Form(
                  key: _formKey,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      // School Field Label
                      const Padding(
                        padding: EdgeInsets.only(left: 12, bottom: 8),
                        child: Text(
                          "School",
                          style: TextStyle(
                            fontSize: 14,
                            fontWeight: FontWeight.w500,
                            color: Colors.black87,
                          ),
                        ),
                      ),

                      // // School Dropdown
                      // Container(
                      //   decoration: BoxDecoration(
                      //     color: Colors.white,
                      //     borderRadius: BorderRadius.circular(12),
                      //     border: Border.all(color: Colors.grey.shade200),
                      //   ),
                      //   child: DropdownButtonFormField<String>(
                      //     value: _selectedSchool,
                      //     decoration: InputDecoration(
                      //       prefixIcon: Icon(
                      //         Icons.school_outlined,
                      //         color: Colors.grey.shade600,
                      //       ),
                      //       border: InputBorder.none,
                      //       focusedBorder: OutlineInputBorder(
                      //         borderSide: BorderSide(
                      //           color: Colors.indigo,
                      //           width: 2.0,
                      //         ),
                      //         borderRadius: BorderRadius.all(
                      //           Radius.circular(20),
                      //         ),
                      //       ),
                      //       contentPadding: EdgeInsets.symmetric(
                      //         horizontal: 16,
                      //         vertical: 16,
                      //       ),
                      //     ),
                      //     items:
                      //         _schools.map((String school) {
                      //           return DropdownMenuItem<String>(
                      //             value: school,
                      //             child: Text(school),
                      //           );
                      //         }).toList(),
                      //     onChanged: (String? newValue) {
                      //       setState(() {
                      //         _selectedSchool = newValue!;
                      //       });
                      //     },
                      //     validator: (value) {
                      //       if (value == null || value.isEmpty) {
                      //         return "Please select a school";
                      //       }
                      //       return null;
                      //     },
                      //     dropdownColor: Colors.white,
                      //     icon: Icon(
                      //       Icons.arrow_drop_down,
                      //       color: Colors.grey.shade600,
                      //     ),
                      //   ),
                      // ),

                      // const SizedBox(height: 20),

                      // School Code TextField
                      Container(
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(12),
                          border: Border.all(color: Colors.white),
                        ),
                        child: TextFormField(
                          controller: _schoolCodeController,
                          decoration: InputDecoration(
                            prefixIcon: Icon(
                              Icons.school_outlined,
                              color: Colors.grey.shade600,
                            ),
                            hintText: 'Enter School Code',
                            focusedBorder: OutlineInputBorder(
                              borderSide: BorderSide(
                                color: Colors.indigo,
                                width: 2.0,
                              ),
                              borderRadius: BorderRadius.all(
                                Radius.circular(20),
                              ),
                            ),

                            border: InputBorder.none,
                            hintStyle: TextStyle(color: Colors.grey.shade400),
                            contentPadding: EdgeInsets.symmetric(
                              horizontal: 16,
                              vertical: 16,
                            ),
                          ),
                          validator: (value) {
                            if (value == null || value.isEmpty) {
                              return 'Please enter school code';
                            }
                            return null;
                          },
                        ),
                      ),
                      SizedBox(height: 20),
                      // Phone Field Label
                      const Padding(
                        padding: EdgeInsets.only(left: 12, bottom: 8),
                        child: Text(
                          "Phone Number",
                          style: TextStyle(
                            fontSize: 14,
                            fontWeight: FontWeight.w500,
                            color: Colors.black87,
                          ),
                        ),
                      ),

                      // Phone Field
                      Container(
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(12),
                          border: Border.all(color: Colors.white),
                        ),
                        child: TextFormField(
                          controller: _phoneController,
                          keyboardType: TextInputType.phone,
                          decoration: InputDecoration(
                            prefixIcon: Icon(
                              Icons.phone_outlined,
                              color: Colors.grey.shade600,
                            ),
                            focusedBorder: OutlineInputBorder(
                              borderSide: BorderSide(
                                color: Colors.indigo,
                                width: 2.0,
                              ),
                              borderRadius: BorderRadius.all(
                                Radius.circular(20),
                              ),
                            ),

                            border: InputBorder.none,
                            hintText: "Enter your phone number",
                            hintStyle: TextStyle(color: Colors.grey.shade400),
                            contentPadding: EdgeInsets.symmetric(
                              horizontal: 16,
                              vertical: 16,
                            ),
                          ),
                          validator: (value) {
                            if (value == null || value.isEmpty) {
                              return "Please enter your phone number";
                            }
                            return null;
                          },
                        ),
                      ),

                      const SizedBox(height: 20),

                      // Password Field Label
                      const Padding(
                        padding: EdgeInsets.only(left: 12, bottom: 8),
                        child: Text(
                          "Password",
                          style: TextStyle(
                            fontSize: 14,
                            fontWeight: FontWeight.w500,
                            color: Colors.black87,
                          ),
                        ),
                      ),

                      // Password Field
                      Container(
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(12),
                          border: Border.all(color: Colors.grey.shade200),
                        ),
                        child: TextFormField(
                          controller: _passwordController,
                          obscureText: _obscurePassword,
                          decoration: InputDecoration(
                            prefixIcon: Icon(
                              Icons.lock_outline,
                              color: Colors.grey.shade600,
                            ),

                            focusedBorder: OutlineInputBorder(
                              borderSide: BorderSide(
                                color: Colors.indigo,
                                width: 2.0,
                              ),
                              borderRadius: BorderRadius.all(
                                Radius.circular(20),
                              ),
                            ),
                            suffixIcon: IconButton(
                              icon: Icon(
                                _obscurePassword
                                    ? Icons.visibility_off
                                    : Icons.visibility,
                                color: Colors.grey.shade600,
                              ),
                              onPressed: () {
                                setState(() {
                                  _obscurePassword = !_obscurePassword;
                                });
                              },
                            ),
                            border: InputBorder.none,
                            hintText: "Enter your password",
                            hintStyle: TextStyle(color: Colors.grey.shade400),
                            contentPadding: EdgeInsets.symmetric(
                              horizontal: 16,
                              vertical: 16,
                            ),
                          ),
                          validator: (value) {
                            if (value == null || value.isEmpty) {
                              return "Please enter your password";
                            }
                            return null;
                          },
                        ),
                      ),

                      const SizedBox(height: 16),

                      // Remember Me & Forgot Password
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          // Remember Me
                          Row(
                            children: [
                              SizedBox(
                                height: 24,
                                width: 24,
                                child: Checkbox(
                                  value: _rememberMe,
                                  onChanged: (value) {
                                    setState(() {
                                      _rememberMe = value!;
                                    });
                                  },
                                  shape: RoundedRectangleBorder(
                                    borderRadius: BorderRadius.circular(4),
                                  ),
                                  activeColor: Colors.indigo.shade700,
                                ),
                              ),
                              const SizedBox(width: 8),
                              const Text(
                                "Remember me",
                                style: TextStyle(
                                  fontSize: 14,
                                  color: Colors.black87,
                                ),
                              ),
                            ],
                          ),

                          // Forgot Password
                          TextButton(
                            onPressed: () {
                              ScaffoldMessenger.of(context).showSnackBar(
                                const SnackBar(
                                  content: Text("Forgot Password clicked"),
                                ),
                              );
                            },
                            style: TextButton.styleFrom(
                              padding: EdgeInsets.zero,
                              minimumSize: Size(50, 30),
                              tapTargetSize: MaterialTapTargetSize.shrinkWrap,
                            ),
                            child: const Text(
                              "Forgot Password?",
                              style: TextStyle(
                                fontSize: 14,
                                fontWeight: FontWeight.w500,
                                color: Color(0xFF3F51B5),
                              ),
                            ),
                          ),
                        ],
                      ),

                      const SizedBox(height: 30),

                      // Login Button
                      SizedBox(
                        width: double.infinity,
                        height: 55,
                        child: ElevatedButton(
                          onPressed: _isLoading ? null : _login,
                          style: ElevatedButton.styleFrom(
                            backgroundColor: Colors.indigo,
                            foregroundColor: Colors.white,
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(12),
                            ),
                            elevation: 0,
                          ),
                          child:
                              _isLoading
                                  ? const SizedBox(
                                    height: 24,
                                    width: 24,
                                    child: CircularProgressIndicator(
                                      color: Colors.black,
                                      strokeWidth: 2.5,
                                    ),
                                  )
                                  : const Text(
                                    "Login",
                                    style: TextStyle(
                                      fontSize: 16,
                                      fontWeight: FontWeight.bold,
                                    ),
                                  ),
                        ),
                      ),

                      const SizedBox(height: 20),

                      // Or Login with
                      // Row(
                      //   children: [
                      //     Expanded(
                      //       child: Divider(
                      //         color: Colors.grey.shade300,
                      //         thickness: 1,
                      //       ),
                      //     ),
                      //     Padding(
                      //       padding: const EdgeInsets.symmetric(horizontal: 16),
                      //       child: Text(
                      //         "Or Login with",
                      //         style: TextStyle(
                      //           fontSize: 14,
                      //           color: Colors.grey.shade600,
                      //         ),
                      //       ),
                      //     ),
                      //     Expanded(
                      //       child: Divider(
                      //         color: Colors.grey.shade300,
                      //         thickness: 1,
                      //       ),
                      //     ),
                      //   ],
                      // ),
                      // const SizedBox(height: 20),

                      // Sign Up Link
                      // Row(
                      //   mainAxisAlignment: MainAxisAlignment.center,
                      //   children: [
                      //     const Text(
                      //       "Don't have an account?",
                      //       style: TextStyle(
                      //         fontSize: 14,
                      //         color: Colors.black87,
                      //       ),
                      //     ),
                      //     TextButton(
                      //       onPressed: () {
                      //         Navigator.push(
                      //           context,
                      //           MaterialPageRoute(
                      //             builder: (context) => const SignupPage(),
                      //           ),
                      //         );
                      //       },
                      //       style: TextButton.styleFrom(
                      //         padding: EdgeInsets.only(left: 4),
                      //         minimumSize: Size(50, 30),
                      //         tapTargetSize: MaterialTapTargetSize.shrinkWrap,
                      //       ),
                      //       child: const Text(
                      //         "Create an account",
                      //         style: TextStyle(
                      //           fontSize: 14,
                      //           fontWeight: FontWeight.bold,
                      //           color: Color(0xFF3F51B5),
                      //         ),
                      //       ),
                      //     ),
                      //   ],
                      // ),
                      // const SizedBox(height: 20),

                      // Bottom Indicator
                      Center(
                        child: Container(
                          width: 60,
                          height: 4,
                          decoration: BoxDecoration(
                            color: Colors.black,
                            borderRadius: BorderRadius.circular(2),
                          ),
                        ),
                      ),

                      const SizedBox(height: 20),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
