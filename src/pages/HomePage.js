import React, { useContext } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { CategoriesContext } from "../contexts/categoriesContext";

const HomePage = () => {
  const [categories] = useContext(CategoriesContext);
  const url = `https://inshorts.deta.dev/news?category=world`;
  const { data, status, isLoading, errorMassage } = useFetch(url);

  const categoriesCards = categories.map(({ category, icon, summary }, idx) => (
    <Link
      to={`/${category}`}
      key={category + "div"}
      id={"category-card-" + idx}
      className="category-card"
    >
      {icon}
      <h2>{category}</h2>
      <p>{summary}</p>
    </Link>
  ));

  return isLoading ? (
    <h2 className="loading">Loading...</h2>
  ) : status === 200 ? (
    <main className="home-page-container">
      <article className="main-home-container">
        <section className="articles-container">
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
                  <h5 className={"title" + idx}>
                    {window.innerWidth > 820
                      ? news.title
                      : news.title.split(" ").slice(0, 4).join(" ") + " ..."}
                  </h5>
                </Link>
              )
          )}
        </section>
        <section className="welcome-container">
          <h1>News Website</h1>
          <p>
            Through our website, you will be able to see the latest news in many
            fields
          </p>
        </section>
      </article>
      <article className="categories-container">{categoriesCards}</article>
    </main>
  ) : (
    <h2 className="err">{errorMassage}</h2>
  );
};

export default HomePage;
