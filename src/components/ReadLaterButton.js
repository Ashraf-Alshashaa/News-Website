import React, { useContext } from "react";
import { ReadLaterContext } from "../contexts/readLaterContext";
const ReadLaterButton = (props) => {
  const { data, innerText } = props.props;
  const [ReadLater, setItem] = useContext(ReadLaterContext);
  return (
    <button
      onClick={() => {
        setItem(data);
      }}
    >
      {ReadLater.includes(data) ? (
        <div>
          {innerText && innerText[0]}
          <i className="fa-solid fa-bookmark  fa-2xl"></i>
        </div>
      ) : (
        <div>
          {innerText && innerText[1]}
          <i className="fa-regular fa-bookmark fa-2xl"></i>
        </div>
      )}
    </button>
  );
};

export default ReadLaterButton;
