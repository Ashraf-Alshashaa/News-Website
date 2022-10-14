import React, { useContext } from "react";
import { ReadLaterContext } from "./contexts/readLaterContext";
import NewsCart from "./NewsCard";

const ReadLaterPage = () => {
  const [ReadLater] = useContext(ReadLaterContext);

  return ReadLater.length > 0 ? (
    <main className="readLater-page-container">
      {ReadLater.map((news) => (
        <NewsCart props={news} key={news.id} />
      ))}
    </main>
  ) : (
    <h2 className="emp-massage">You haven't chosen any articles yet!</h2>
  );
};

export default ReadLaterPage;
