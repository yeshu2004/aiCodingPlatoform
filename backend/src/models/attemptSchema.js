const { default: mongoose } = require("mongoose");

const attemptSchema = new mongoose.Schema({
    userCode:{
        type: String,
        required: true
    },
    language:{
        type: String
    },
    validSolution:{
        type: Boolean
    },
    aiFeedback:{
        type: String
    },
    aiImprovedCode:{
        type: String
    },
    questionId: { 
        type: mongoose.Schema.Types.ObjectId, ref: "Question" 
    }
},{timestamps: true})

module.exports = mongoose.model("Userattempt",attemptSchema)