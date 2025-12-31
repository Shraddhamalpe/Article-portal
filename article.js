const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedDate: { type: String, required: true },
  content: { type: String }
});

module.exports = mongoose.model("Article", ArticleSchema);
