import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ReadLaterContext } from "./readLaterContext";

const DetailsPage = () => {
  const [ReadLater, setReadLater] = useContext(ReadLaterContext);
  const { state: data } = useLocation();
  const { author, content, date, imageUrl, readMoreUrl, title } = data;
  console.log(data);

  return (
    <main className="details-container">
      <h2>{data.title}</h2>
      <time>{date}</time>
      <article>
        <section>
          <h3>Content</h3>
          <p>{content}</p>
          <h6>Author: {author}</h6>
        </section>
        <div className="details-img-container">
          <img src={imageUrl} alt={title} />
        </div>
      </article>
      <a href={readMoreUrl} target="blank">
        read more
      </a>
      <button
        className="read-later-button"
        onClick={() => {
          setReadLater((prev) =>
            !prev.includes(data)
              ? [...prev, data]
              : ReadLater.filter((item) => item !== data)
          );
        }}
      >
        {ReadLater.includes(data)
          ? "Remove from Read later"
          : "Add to Read later"}
      </button>
    </main>
  );
};

export default DetailsPage;
