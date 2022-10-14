import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ReadLaterContext } from "./contexts/readLaterContext";

const DetailsPage = () => {
  const [ReadLater, setItem] = useContext(ReadLaterContext);
  const { state: data } = useLocation();
  const { author, content, date, imageUrl, readMoreUrl, title } = data;

  return (
    <main className="details-container">
      <h2>{data.title}</h2>
      <time>{date}</time>

      <div className="details-img-container">
        <img src={imageUrl} alt={title} />
      </div>
      <article>
        <h3>Content</h3>
        <p>{content}</p>
        <h6>Author: {author}</h6>
      </article>
      <div className="source-link-container">
        <a href={readMoreUrl} target="blank" className="source-link">
          Read more from the source
        </a>
      </div>
      <div className="read-later-button-container">
        <button
          onClick={() => {
            setItem(data);
          }}
        >
          {ReadLater.includes(data) ? (
            <div>
              <span>remove from My Article</span>
              <i className="fa-solid fa-bookmark  fa-2xl"></i>
            </div>
          ) : (
            <div>
              <span>add to My Article</span>
              <i className="fa-regular fa-bookmark fa-2xl"></i>
            </div>
          )}
        </button>
      </div>
    </main>
  );
};

export default DetailsPage;
