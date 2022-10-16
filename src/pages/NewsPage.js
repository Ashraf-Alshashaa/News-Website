import React from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import NewsCart from "../components/NewsCard";
import NavigateButtons from "../components/NavigateButtons";

const NewsPage = () => {
  const { category } = useParams();
  const url = `https://inshorts.deta.dev/news?category=${category}`;
  const { data, isLoading } = useFetch(url);

  return isLoading ? (
    <h2 className="loading">Loading...</h2>
  ) : (
    <main className="news-page-container">
      <h2 className="category-title">{data.category}</h2>
      {window.innerWidth > 820 && (
        <NavigateButtons textContent={{ back: "back", forward: "forward" }} />
      )}
      {data.data.map((news) => (
        <NewsCart props={news} key={news.id} />
      ))}
    </main>
  );
};

export default NewsPage;
