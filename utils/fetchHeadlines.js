const { GoogleGenerativeAI } = require("@google/generative-ai");

const fetchHeadlines = async () => {
    try {
        const apiKey = process.env.GEMINI_API_KEY; // Add your Gemini API key to .env
        const genAI = new GoogleGenerativeAI(apiKey);

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // Prompt for generating news headlines
        const prompt = "Give the top 5 latest news headlines worldwide";

        const result = await model.generateContent(prompt);
        const headlines = result?.response?.text()?.split("\n").filter(Boolean); // Split lines into headlines

        if (!headlines || headlines.length === 0) {
            throw new Error("No headlines were generated.");
        }

        return headlines;
    } catch (error) {
        console.error("Error fetching headlines from Gemini API:", error.message);
        throw error;
    }
};

module.exports = fetchHeadlines;
