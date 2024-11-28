const openai = require("../config/openaiAuth");

const generateArticle = async (headline) => {
    try {
        const prompt = `Write a detailed blog article based on this headline: "${headline}". The article should be engaging, informative, and structured with subheadings.`;
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 1024,
        });

        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error("Error generating article:", error.message);
        throw error;
    }
};

module.exports = generateArticle;
