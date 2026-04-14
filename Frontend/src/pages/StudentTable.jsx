import React, { useEffect, useState } from "react";
import axiosInstance from "../service/axiosInstance";
import { useNavigate } from "react-router";

const students = [
    "First Name",
    "Last Name",
    "Course",
    "Contact No",
    "Active status",
    "CreatedAt",
    "Action"
];

const StudentTable = ({studentList,setStudentList}) => {
    const navigate = useNavigate()
    async function fetchAllStudentApi(payload) {
        try {
            const res = await axiosInstance.get("/student/")
            setStudentList(res.data.Data);
            alert(res.data.message)
        } catch (error) {
            alert("faild to fetch student data")
        }
    }
    async function deleteStudentDataApi(studentId) {
    try {
        const res = await axiosInstance.delete(`/student/delete/${studentId}`);
        console.log("delete res", res.data);

        setStudentList((prev) =>
            prev.filter((student) => student._id !== studentId)
        );
        alert(res.data.message);

    } catch (error) {
        alert("Something went wrong");
        console.error(error);
    }
}

    useEffect(() => {
        fetchAllStudentApi()
    }, [])
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">
                Student List
            </h2>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">

                    {/* Table Head */}
                    <thead className="bg-blue-500 text-white">
                        <tr>
                            {students.map((studentHead, idx) => (
                                <th className="py-2 px-4 border" key={idx}>{studentHead}</th>
                            ))}


                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className=" text-black">
                        {studentList.map((student, idx) => (
                            <tr key={idx} >
                                <td className="py-2 px-4 border">{student.firstname}</td>
                                <td className="py-2 px-4 border">{student.lastname}</td>
                                <td className="py-2 px-4 border">{student.course}</td>
                                <td className="py-2 px-4 border">{student.contactNo}</td>
                                <td className="py-2 px-4 border">{student.isActive? <span className="rounded-full text-center bg-green-600 text-white">Active</span>:<span className="rounded-full text-center bg-red-600 text-white">Deactive</span>}</td>
                                <td className="py-2 px-4 border">{student.createdAt}</td>
                           <td className="py-2 px-4 border">
                            <div>
                                <button className="bg-red-600 text-black rounded-full" onClick={()=>{
                                    console.log(student._id,student.firstname);
                                    deleteStudentDataApi(student._id)
                                }}>Delete</button>
                                <button onClick={()=> navigate('/update')} >Update</button>
                            </div>
                           </td>

                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentTable;