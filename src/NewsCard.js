import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ReadLaterContext } from "./readLaterContext";

const NewsCart = (props) => {
  const [ReadLater, setReadLater] = useContext(ReadLaterContext);
  const { props: data } = props;
  return (
    <div className="card">
      <img src={data.imageUrl} alt={data.title} />
      <time>{data.date}</time>
      <h3>{data.title}</h3>
      <div className="buttons-container">
        <Link className="link" to={`/details/${data.id}`} state={data}>
          Show details
        </Link>
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
      </div>
    </div>
  );
};

export default NewsCart;
