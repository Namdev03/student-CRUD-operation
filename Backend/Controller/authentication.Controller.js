const { parse } = require('dotenv')
const authenticationSchema = require('../Model/Authentication.Model')
const bcrypt = require('bcrypt')
async function registerationApi(req, res) {
    try {
        const { name, phoneNo, gmail, password } = req.body
        const passwordencrption = await bcrypt.hash(password, 10)
        const registeration = await authenticationSchema.create({
            name,
            phoneNo,
            gmail,
            password: passwordencrption
        })
        res.status(201).json({ message: "registration successfully", Data: registeration })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
async function loginApi(req, res) {
    try {
        const { gmail, password } = req.body
        const gmailfind = await authenticationSchema.findOne({ gmail })
        if (!gmail) {
            res.status(404).json({ message: "user not found", Data: "Null" })

            return;
        }
        const isMatch = bcrypt.compare(password, gmailfind.password)
        if (!isMatch) {
            res.status(404).json({ message: "please enter vailid password" })
            return;
        }
        res.status(200).json({ message: "successfullt login", Data: gmailfind })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { registerationApi,loginApi }