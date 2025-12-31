const axios = require("axios");
const cheerio = require("cheerio");

async function scrapeArticle(url) {
  try {
    const res = await axios.get(url);
    const $ = cheerio.load(res.data);
    let content = "";
    $("article p, p").each((i, el) => {
      content += $(el).text() + "\n";
    });
    return content;
  } catch (err) {
    console.error("Error scraping article:", err);
    return "";
  }
}

module.exports = scrapeArticle;