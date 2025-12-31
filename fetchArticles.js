const axios = require("axios");

async function fetchArticles() {
  try {
    // Use 127.0.0.1 to avoid Windows localhost issues
    const res = await axios.get("http://127.0.0.1:5000/api/articles");
    console.log("Articles fetched successfully:", res.data);
    return res.data;
  } catch (err) {
    if (err.response) {
      // Server responded with a status outside 2xx
      console.error(`Error fetching articles: ${err.response.status} - ${err.response.statusText}`);
    } else if (err.request) {
      // Request was made but no response received
      console.error("No response received from server:", err.request);
    } else {
      // Something else happened
      console.error("Error fetching articles:", err.message);
    }
    return [];
  }
}

module.exports = fetchArticles;
