require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./Router/student.router');
const authenticationRouter = require('./Router/authenticaton.router');
const AuthenticationDb = require('./Config/Authentication.config');

//=====instance=====
const server = express();
//======middelewares======
server.use(express.json())
server.use(express.urlencoded())
server.use(cors({
    origin: '*'
}))
const port = process.env.PORT;
server.use('/student', router)
server.use('/authentication', authenticationRouter)
//======listen server ====


server.listen(port, async () => {
    try {
        // await connectDataBase()
        await AuthenticationDb()
   
        console.log(`serve is running on port ${port}`);
    } catch (error) {
        process.exit(1)
    }

})
