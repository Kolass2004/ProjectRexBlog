require("dotenv").config(); 
const express = require("express");
const cron = require("node-cron");
const fetchHeadlines = require("./utils/fetchHeadlines");
const generateArticle = require("./utils/generateArticle");
const fetchImage = require("./utils/fetchImage");
const publishToBlogger = require("./utils/publishToBlogger");
const sendErrorEmail = require("./utils/sendErrorEmail");

const app = express();
const PORT = process.env.PORT || 3000;

// Schedule task at 9 PM daily
cron.schedule("0 21 * * *", async () => {
    try {
        console.log("Starting daily blog automation...");
        const headlines = await fetchHeadlines();
        console.log("Fetched headlines:", headlines);

        for (const headline of headlines) {
         
            const article = await generateArticle(headline);
            console.log("Generated article:", article);
            const imageUrl = await fetchImage(headline);
            console.log("Fetched related image:", imageUrl);
            await publishToBlogger(article, imageUrl);
            console.log("Article published successfully.");
        }
    } catch (error) {
        console.error("Error in blog automation workflow:", error.message);
        await sendErrorEmail(error.message); // Email the error
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
