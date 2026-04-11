require('dotenv').config();
const express = require('express');
const connectDataBase = require('./Config/conect.config');
const router = require('./Router/student.router');

//=====instance=====
const server = express();
//======middelewares======
server.use(express.json())
server.use(express.urlencoded())
const port = process.env.PORT;
server.use('/student',router)
//======listen server ====
server.listen(port,async()=>{
    try {
        await  connectDataBase()
        console.log(`serve is running on port ${port}`);
    } catch (error) {
        process.exit(true)
    }
    
})
