import React from "react";

const students = [
    "First Name",
    " Last Name",
    "Course",
    "Contact No"
];

const StudentTable = () => {
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
                            {students.map((studentHead, idx)=>(
                           <th className="py-2 px-4 border" key={idx}>{studentHead}</th>
                            ))}
                            
                           
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {students.map((student, index) => (
                            <tr
                                key={index}
                                className="text-center hover:bg-gray-100"
                            >
                                <td className="py-2 px-4 border">
                                    {student.firstname}
                                </td>
                                <td className="py-2 px-4 border">
                                    {student.lastname}
                                </td>
                                <td className="py-2 px-4 border">
                                    {student.course}
                                </td>
                                <td className="py-2 px-4 border">
                                    {student.contactNo}
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