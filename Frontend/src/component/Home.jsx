import React from 'react'
import StudentRegister from '../pages/StudentRegister'
import StudentTable from '../pages/StudentTable'
function Home() {
const [studentList, setStudentList] = useState([])

  return (
   <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
    
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        
        {/* Form Section */}
        <div className="flex-1 bg-white rounded-2xl shadow-md p-4 sm:p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
                Register Student
            </h2>
            <StudentRegister setStudentList={setStudentList} />
        </div>

        {/* Table Section */}
        <div className="flex-1 bg-white rounded-2xl shadow-md p-4 sm:p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
                Student Records
            </h2>
            <div className="overflow-x-auto">
                <StudentTable studentList={studentList} setStudentList={setStudentList} />
            </div>
        </div>

    </div>

</div>
  )
}

export default Home