import React, { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import fetchArticles from "../services/fetchArticles";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then((data) => setArticles(data));
  }, []);

  return (
    <div>
      {articles.length === 0 ? (
        <p>Loading articles...</p>
      ) : (
        articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))
      )}
    </div>
  );
};

export default ArticleList;
