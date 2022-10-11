import React from "react";
import useFetch from "./hooks/useFetch";
import { useParams } from "react-router-dom";
import NewsCart from "./NewsCard";

const NewsPage = () => {
  const { category } = useParams();
  const url = `https://inshorts.deta.dev/news?category=${category}`;
  const { data, status, isLoading, errorMassage } = useFetch(url);

  return isLoading ? (
    <h2 className="loading">Loading...</h2>
  ) : status === 200 ? (
    <main>
      <h2 className="category-title">{data.category}</h2>
      {data.data.map((news) => (
        <NewsCart props={news} key={news.id} />
      ))}
    </main>
  ) : (
    <h2 className="err">{errorMassage}</h2>
  );
};

export default NewsPage;
