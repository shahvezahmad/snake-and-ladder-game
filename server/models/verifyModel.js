const mongoose = require('mongoose');

const verifySchema = new mongoose.Schema({
    mail: {
        type: String,
        minlength: 3,
    },
    isVerify: {
        type: Boolean,
        default:false,
    },
    token:{
        type:String,
        required:true,
    },
    otp:{
        type:Number,
    }
}, { timestamps: true })


verifySchema.index({createdAt: 1},{expireAfterSeconds: 1800});
module.exports = mongoose.model('VerifySchema', verifySchema);

