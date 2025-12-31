const axios = require("axios");

async function updateArticle(articleId, updatedContent) {
  try {
    await axios.put(`http://localhost:5000/api/articles/${articleId}`, {
      content: updatedContent
    });
    console.log(`Article ${articleId} updated successfully!`);
  } catch (err) {
    console.error("Error updating article:", err);
  }
}

module.exports = updateArticle;
