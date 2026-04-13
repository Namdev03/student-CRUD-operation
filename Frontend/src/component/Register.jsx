import React from "react";
import { useForm } from "react-hook-form";
import authentictionIntace from "../service/AuthenticationIntace";
import { useNavigate } from "react-router";
import Login from "./Login";

function Register() {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    async function registerApi(payload) {
        try {
            console.log("hellow register");

            const res = await authentictionIntace.post('/authentication', payload)
            const data = res.data
            console.log(`register data`, data);
            reset()
            navigate(<Login />)
        } catch (error) {
            alert(error.message)
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Create Account
                </h2>

                <form onSubmit={handleSubmit(registerApi)} className="space-y-5">
                    {/* Name */}
                    <div>
                        <label className="block text-gray-600 mb-1">Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm">{errors.name.message}</p>
                        )}
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-gray-600 mb-1">Phone Number</label>
                        <input
                            type="tel"
                            placeholder="Enter phone number"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                            {...register("phoneNo", {
                                required: "Phone number is required",
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: "Enter valid 10-digit number",
                                },
                            })}
                        />
                        {errors.phoneNo && (
                            <p className="text-red-500 text-sm">{errors.phoneNo.message}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-600 mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                            {...register("gmail", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Enter a valid email",
                                },
                            })}
                        />
                        {errors.gmail && (
                            <p className="text-red-500 text-sm">{errors.gmail.message}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-600 mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Minimum 6 characters",
                                },
                            })}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition duration-300 font-semibold"
                    >
                        Register
                    </button>
                </form>

                {/* Footer */}
                <p className="text-sm text-center text-gray-500 mt-4">
                    Already have an account?{" "}
                    <span
                        onClick={() => navigate("/login")}
                        className="text-indigo-600 cursor-pointer hover:underline"
                    >
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Register