const { Schema, model } = require("mongoose");

const ProjectSchema = new Schema({
    wedding_name: {
        type: String,
        required: true,
        trim: true
    },
    Package: {
        type: String,
        required: true,
        trim: true
    },
    Date: {
        type: Date,
        required: true
    },
    Mobile_Number: {
        type: String,
        required: true,
        trim: true
    },
    months: {
        type: Number,
        default: 0
    },
    days: {
        type: Number,
        default: 0
    },
    hours: {
        type: Number,
        default: 0
    },
    minutes: {
        type: Number,
        default: 0
    },
    pin: {
        type: String,
        trim: true
    },
    wedding_face: {
        type: String
    },
    wedding_img: {
        type: []
    }
});

const ProjectModel = model("Project", ProjectSchema);
module.exports = ProjectModel;
