import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ReadLaterContext } from "./contexts/readLaterContext";

const NewsCart = (props) => {
  const [ReadLater, setItem] = useContext(ReadLaterContext);
  const { props: data } = props;
  return (
    <div className="card">
      <div className="img-card-container">
        <img src={data.imageUrl} alt={data.title} />
      </div>
      <time>{data.date}</time>
      <h3>{data.title}</h3>
      <div className="buttons-container">
        <Link className="link" to={`/details/${data.id}`} state={data}>
          Show details
        </Link>
        <button
          className="read-later-button"
          onClick={() => {
            setItem(data);
          }}
        >
          <i
            className={
              ReadLater.includes(data)
                ? "fa-solid fa-bookmark  fa-2xl"
                : "fa-regular fa-bookmark fa-2xl "
            }
          ></i>
        </button>
      </div>
    </div>
  );
};

export default NewsCart;
