import React from "react";
import { useLocation } from "react-router-dom";
import NavigateButtons from "../components/NavigateButtons";
import ReadLaterButton from "../components/ReadLaterButton";

const DetailsPage = () => {
  const { state: data } = useLocation();
  const { author, content, date, imageUrl, readMoreUrl, title } = data;

  return (
    <main className="details-container">
      {window.innerWidth > 820 && (
        <NavigateButtons textContent={{ back: "back", forward: "forward" }} />
      )}
      <h2>{title}</h2>
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
        <ReadLaterButton
          props={{
            data: data,
            innerText: [
              <span>remove from My Article</span>,
              <span>add to My Article</span>,
            ],
          }}
        />
      </div>
    </main>
  );
};

export default DetailsPage;
