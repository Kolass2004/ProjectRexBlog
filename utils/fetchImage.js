const axios = require("axios");

const fetchImage = async (query) => {
    try {
        const response = await axios.get("https://api.unsplash.com/search/photos", {
            params: { query, per_page: 1 },
            headers: { Authorization: `Client-ID YOUR_UNSPLASH_API_KEY` },
        });

        const imageUrl = response.data.results[0]?.urls?.regular;
        if (!imageUrl) throw new Error("No related image found.");

        return imageUrl;
    } catch (error) {
        console.error("Error fetching related image:", error.message);
        throw error;
    }
};

module.exports = fetchImage;
