const studentSchema = require('../Model/studendataData.model')
//========== get All Student ================
async function allStudent(req, res) {
    try {
        const allstudent = await studentSchema.find();

        if (!allstudent || allstudent.length === 0) {
            return res.status(404).json({
                message: "No student data",
                Data: []
            });
        }

        res.status(200).json({
            message: "All student details",
            Data: allstudent
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
            Data: null
        });
    }
}
//========== get Student by ID ================

async function getStudentByID(req, res) {  
    try {
        const{_id} = req.body ;

        const getstudentbyid = await studentSchema.findById(_id)
           if (!getstudentbyid) {
            return res.status(404).json({
                message: `No student data of ${_id}`,
                Data: []
            });
        }
        res.status(200).json({
            message: `student data for ${_id}` ,
            Data: getstudentbyid
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
            Data: null
        });
    }
}
//==========Add Student data ================

async function postStudent(req, res) {

    try {
        const { firstname, lastname, course, contactNo, isActive } = req.body;

        const poststudent = await studentSchema.create({
            firstname,
            lastname,
            course,
            contactNo,
            isActive
        });

        res.status(201).json({
            message: "Student data uploaded successfully",
            Data: poststudent
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
            Data: null
        });
    }
}
//========== delete data by ID Student ================

async function deletaStudent(req, res) {

    try {
        const _id = req.body
        const deletestudent = await studentSchema.findByIdAndDelete(_id)
        if (!deletestudent) {
            return res.status(404).json({ message: "no student avialble of this ID", Data: "Null" })

        }
        res.status(200).json({
            message: "Student data deleted successfully",
            Data: deletestudent
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
            Data: null
        });
    }
}
//========== update Student data ================

async function updateStudent(req, res) {
    console.log(req.params);

    try {
        const { _id } = req.params;

        const updatestudent = await studentSchema.findOneAndReplace(
            _id,
            req.body,
            { returnDocument: 'after', runValidators: true }
        );

        if (!updatestudent) {
            return res.status(404).json({
                message: "No student available with this ID",
                Data: null
            });
        }

        res.status(200).json({
            message: "Student data updated successfully",
            Data: updatestudent
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
            Data: null
        });
    }
}
module.exports = { allStudent, postStudent, deletaStudent, updateStudent,  getStudentByID}