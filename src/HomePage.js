import React from "react";
import useFetch from "./hooks/useFetch";
import { Link } from "react-router-dom";

const HomePage = () => {
  const url = `https://inshorts.deta.dev/news?category=world`;
  const { data, status, isLoading, errorMassage } = useFetch(url);

  return isLoading ? (
    <h2 className="loading">Loading...</h2>
  ) : status === 200 ? (
    <main className="home-page-container">
      <article className="articles-container">
        {data.data.map(
          (news, idx) =>
            idx < 6 && (
              <Link
                to={`/details/${news.id}`}
                state={news}
                key={news.id}
                id={"article" + idx}
                className={"article"}
              >
                <img src={news.imageUrl} alt={news.title} />
                <h5 className={"title" + idx}>{news.title}</h5>
              </Link>
            )
        )}
      </article>
    </main>
  ) : (
    <h2 className="err">{errorMassage}</h2>
  );
};

export default HomePage;
