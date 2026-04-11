const router = require('express').Router()
const {allStudent,postStudent,deletaStudent,updateStudent,getStudentByID} = require('../Controller/student.controller')
//=========getstuent by ID Data=======
router.get('/',allStudent)
//=========getAllstuent Data=======
router.get('/getStudentbyid/:ID',getStudentByID)
//=========poststuent Data=======
router.post('/addstudent',postStudent)
//========Delete student Data=====
router.delete('/deletestudent',deletaStudent)
//========update student Data=====
router.patch('/updatedata',updateStudent)

module.exports = router