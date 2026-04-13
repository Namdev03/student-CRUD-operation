const mongoose = require('mongoose')

async function AuthenticationDb() {
    try {
        const connection = await mongoose.connect(process.env.CONNECT_URIAUTHENTICATION)
        console.log(" Authentication data base connected successfully!");

    } catch (error) {
        throw new Error(error)

    }
}

module.exports =  AuthenticationDb