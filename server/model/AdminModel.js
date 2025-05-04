const { Schema, model } = require("mongoose");


const adminschema = new Schema({
    admin_pwd: {
        type: Number
    }
}, {
    timestamps: true
})

const admin = model('Admin', adminschema)
module.exports = admin