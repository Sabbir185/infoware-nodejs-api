const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        mobile: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
        },
        role: {
            type: String,
            enum: ["admin", "staff"],
            default: "staff",
        },
    },
    {
        timestamps: true,
    }
);

const Admin = mongoose.model('Admin', AdminSchema);


module.exports = Admin;