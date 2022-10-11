import React from "react";
import { Link } from "react-router-dom";

const NewsCart = (props) => {
  const { props: data } = props;
  return (
    <div className="card">
      <img src={data.imageUrl} alt={data.title} />
      <time>{data.date}</time>
      <h2>{data.title}</h2>
      <Link className="link" to={`/details/${data.id}`} state={data}>
        read more
      </Link>
    </div>
  );
};

export default NewsCart;
