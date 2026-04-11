const mongoose = require('mongoose')

async function connectDataBase() {
    try {
        const connection = await mongoose.connect(process.env.CONNECT_URI)
        console.log("data base connected successfully!");

    } catch (error) {
        throw new Error(error)

    }
}

module.exports = connectDataBase