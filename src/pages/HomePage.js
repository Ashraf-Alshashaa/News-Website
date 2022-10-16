import React from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import CategoriesNavList from "../components/CategoriesNavList";

const HomePage = () => {
  const url = `https://inshorts.deta.dev/news?category=world`;
  const { data, isLoading } = useFetch(url);

  const catagoriesHomeProps = {
    name: "category-card",
    Id: "category-card-",
    Key: "navHome",
    textContainer: true,
    containerName: `categories-container`,
    setIsCategoriesList: null,
  };

  const articles = () => {
    const items = data.data.map(
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
            <h5 className={"title" + idx}>
              {window.innerWidth > 820
                ? news.title
                : news.title.split(" ").slice(0, 4).join(" ") + " ..."}
            </h5>
          </Link>
        )
    );
    return items;
  };

  return isLoading ? (
    <h2 className="loading">Loading...</h2>
  ) : (
    <main className="home-page-container">
      <article className="main-home-container">
        <section className="articles-container">{articles()}</section>
        <section className="welcome-container">
          <h1>News Website</h1>
          <p>
            Through our website, you will be able to see the latest news in many
            fields
          </p>
        </section>
      </article>
      <CategoriesNavList props={catagoriesHomeProps} />
    </main>
  );
};

export default HomePage;
