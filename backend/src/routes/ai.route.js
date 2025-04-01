const express = require('express');
const generateContent = require('../services/ai.service');
const question = require('../models/questionSchema')
const router = express.Router();


router.post("/mock-test", async(req,res)=>{
    try {
        //fectch questionInfo
        const {jobTitle , jobDescription} = req.body;
        if (!jobDescription || !jobTitle) {
            return res.status(400).json({ error: "Job title and description are required." });
        }

        //create question
        const prompt = `Generate a LeetCode-style coding question for a ${jobTitle}. Job description: ${jobDescription}`;
        console.log("Received request with prompt:", prompt);
        const response = await generateContent(prompt) 
        if (!response) {
            return res.status(500).json({ error: "AI failed to generate a question." });
        }
        //JSON
        const genQuestion = JSON.parse(response)

        //stores in db
        const {title,problemStatement,inputFormat,outputFormat,constraints,expectedComplexity} = genQuestion;
        const savedQuestion = await question.create({
            title,
            problemStatement,
            inputFormat,
            outputFormat,
            constraints,
            expectedComplexity
        })
        console.log("Question saved successfully:", savedQuestion);

        res.json(genQuestion)
        
        
    } catch (error) {
        console.error("Error in /mock-test route:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }

})


module.exports = router