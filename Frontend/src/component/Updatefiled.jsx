import React from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../service/axiosInstance";

export default function StudentFormTile() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

async function updateData(Id,payload) {
    try {
        const res = await axiosInstance.patch(`/student/updatedata/${Id}`,payload)
        const updatedData = res.data
        
    } catch (error) {
        alert('somthing went wrong')
    }
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        
        <h2 className="text-2xl font-bold mb-4 text-center">
          Student Form
        </h2>

        <form onSubmit={handleSubmit()} className="space-y-4">

          {/* First Name */}
          <div>
            <input
              type="text"
              placeholder="First Name"
              {...register("firstname", { required: "First name is required" })}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.firstname && (
              <p className="text-red-500 text-sm">{errors.firstname.message}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastname", { required: "Last name is required" })}
              className="w-full p-2 border rounded-lg"
            />
            {errors.lastname && (
              <p className="text-red-500 text-sm">{errors.lastname.message}</p>
            )}
          </div>

          {/* Course */}
          <div>
            <select
              {...register("course", { required: "Course is required" })}
              className="w-full p-2 border rounded-lg"
            >
              <option value="">Select Course</option>
              <option value="Mern Stack">Mern Stack</option>
              <option value="Data Analytic">Data Analytic</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="DSA">DSA</option>
            </select>
            {errors.course && (
              <p className="text-red-500 text-sm">{errors.course.message}</p>
            )}
          </div>

          {/* Contact Number */}
          <div>
            <input
              type="text"
              placeholder="Contact Number"
              {...register("contactNo", {
                required: "Contact number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter valid 10-digit number"
                }
              })}
              className="w-full p-2 border rounded-lg"
            />
            {errors.contactNo && (
              <p className="text-red-500 text-sm">
                {errors.contactNo.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Update
          </button>

        </form>
      </div>
    </div>
  );
}