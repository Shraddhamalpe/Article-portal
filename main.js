require("dotenv").config({ path: "../.env" });

const fetchArticles = require("./fetchArticles");
const getGoogleLinks = require("./getGoogleLinks");
const scrapeArticle = require("./scrapeArticle");
const rewriteArticle = require("./rewriteArticle");
const updateArticle = require("./updateArticle");

async function main() {
  const articles = await fetchArticles();

  for (const article of articles) {
    console.log("Processing:", article.title);

    const links = await getGoogleLinks(article.title);
    const contents = [];

    for (const link of links) {
      const content = await scrapeArticle(link);
      contents.push(content);
    }

    const updated = await rewriteArticle(article.content, contents);
    await updateArticle(article._id, updated);
  }
}

main().catch(err => {
  console.error("Error in main:", err);
});
