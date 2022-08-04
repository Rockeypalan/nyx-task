import mongoose from "mongoose";

const recordSchema = mongoose.Schema(
    {
    username:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        required: true
    },
    imgCollection: {
        type: Array
    }
},
    {
        timestamps: true,
    }

);

const Record = mongoose.model('Record', recordSchema);

export default Record;