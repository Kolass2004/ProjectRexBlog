const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: "YOUR_OPENAI_API_KEY",
});

const openai = new OpenAIApi(configuration);

module.exports = openai;