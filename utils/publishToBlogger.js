const blogger = require("../config/bloggerAuth");

const publishToBlogger = async (article, imageUrl) => {
    try {
        const content = `
            <img src="${imageUrl}" alt="Related Image" style="width:100%; height:auto;">
            <p>${article.replace("\n", "<br>")}</p>
        `;

        const post = {
            blogId: "YOUR_BLOGGER_BLOG_ID",
            requestBody: {
                title: article.split("\n")[0], // Use the first line as the title
                content: content, // Include image and article content
            },
        };

        const response = await blogger.posts.insert(post);
        console.log("Published post ID:", response.data.id);
    } catch (error) {
        console.error("Error publishing to Blogger:", error.message);
        throw error;
    }
};

module.exports = publishToBlogger;
