const axios = require("axios");
const cheerio = require("cheerio");

async function getGoogleLinks(query) {
  try {
    const res = await axios.get(`https://www.google.com/search?q=${encodeURIComponent(query)}`, {
      headers: { "User-Agent": "Mozilla/5.0" }
    });

    const $ = cheerio.load(res.data);
    const links = [];
    $("a").each((i, el) => {
      const href = $(el).attr("href");
      if (href && href.startsWith("http") && links.length < 2) {
        links.push(href);
      }
    });

    return links;
  } catch (err) {
    console.error("Error searching Google:", err);
    return [];
  }
}

module.exports = getGoogleLinks;