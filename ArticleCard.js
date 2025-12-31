import React from "react";

const ArticleCard = ({ article }) => {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h3>{article.title}</h3>
      <p><strong>Author:</strong> {article.author}</p>
      <p><strong>Published:</strong> {article.publishedDate}</p>
      <p>{article.content}</p>
    </div>
  );
};

export default ArticleCard;
