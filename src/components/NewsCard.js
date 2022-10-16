import React from "react";
import { Link } from "react-router-dom";
import ReadLaterButton from "./ReadLaterButton";

const NewsCart = (props) => {
  const data = props.props;
  const { title, imageUrl, date, id } = data;

  return (
    <div className="card">
      <div className="img-card-container">
        <img src={imageUrl} alt={title} />
      </div>
      <time>{date}</time>
      <h3>{title}</h3>
      <div className="buttons-container">
        <Link className="link" to={`/details/${id}`} state={data}>
          Show details
        </Link>
        <ReadLaterButton props={{ data: data, innerText: null }} />
      </div>
    </div>
  );
};

export default NewsCart;
