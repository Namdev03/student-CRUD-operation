import React from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../service/axiosInstance";

const courses = [
    "Mern Stack",
    "Data Analytic",
    "Digital Marketing",
    "DSA",
];

const StudentRegister = ({setStudentList}) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm();

    // ✅ Submit Function
    async function registerStudent(studentData) {
    try {

        const res = await axiosInstance.post("/student", studentData); // ✅ fixed endpoint
        const registerstudent = res.data;

        console.log(registerstudent);

        
        setStudentList((prev) => [registerstudent.Data,...prev]);

        reset();

        alert(res.data.message);

    } catch (error) {
        alert("Something went wrong");
        console.error(error);
    }
}

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit(registerStudent)} // ✅ FIXED
                className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
            >
                <h2 className="text-2xl font-bold text-center mb-6">
                    Register Form
                </h2>

                {/* First Name */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium">First Name</label>
                    <input
                        type="text"
                        {...register("firstname", {
                            required: "First name is required",
                            setValueAs: (value) => value.trim(),
                        })}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.firstname && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.firstname.message}
                        </p>
                    )}
                </div>

                {/* Last Name */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Last Name</label>
                    <input
                        type="text"
                        {...register("lastname", {
                            required: "Last name is required",
                            setValueAs: (value) => value.trim(),
                        })}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.lastname && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.lastname.message}
                        </p>
                    )}
                </div>

                {/* Course */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Course</label>
                    <select
                        {...register("course", {
                            required: "Please select a course",
                        })}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="">Select Course</option>
                        {courses.map((course, idx) => (
                            <option key={idx} value={course}>
                                {course}
                            </option>
                        ))}
                    </select>
                    {errors.course && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.course.message}
                        </p>
                    )}
                </div>

                {/* Contact Number */}
                <div className="mb-6">
                    <label className="block mb-1 font-medium">
                        Contact Number
                    </label>
                    <input
                        type="text"
                        {...register("contactNo", {
                            required: "Contact number is required",
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: "Enter a valid 10-digit number",
                            },
                        })}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.contactNo && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.contactNo.message}
                        </p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 disabled:bg-gray-400"
                >
                    {isSubmitting ? "Submitting..." : "Register"}
                </button>
            </form>
        </div>
    );
};

export default StudentRegister;