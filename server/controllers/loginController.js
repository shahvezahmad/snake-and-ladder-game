const User = require('../models/registerModel');
const StatusCodes = require("http-status-codes");

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        const isPasswordCorrect = await user.comparePassword(password);
        if (isPasswordCorrect) {
            const tokens = await User.findOne({ email })
            if(user.verify===false){
                return res.status(401).json({ msg:"PLEASE VERIFY YOUR EMAIL FIRST" })
            }
            else{
                // console.log("here");
                return res.status(201).json({msg:"OK"});
            }
        }
        else {
            // console.log("here");
            res.status(StatusCodes.OK).json({ err: "Credentials do not match" })
        }
    } catch (error) {
        res.status(StatusCodes.OK).json({ err: "Credentials Do Not Match" })
        console.log("error")
    }
}
module.exports = { login }