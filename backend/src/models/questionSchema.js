const { default: mongoose } = require("mongoose");

const questionSchema = new mongoose.Schema({
    title:{
        type: String
    },
    problemStatement:{
        type: String        
    },
    inputFormat:{
        type: String
    },
    outputFormat:{
        type: String
    },
    constraints:{
        type: String
    },
    expectedComplexity:{
        type: String
    },
    userAttempt:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Userattempt"
        }
    ]
})

module.exports = mongoose.model("Question",questionSchema)