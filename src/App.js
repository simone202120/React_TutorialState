import { sculptureList } from "./data.js";
import { useState } from "react";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>
          {sculpture.name} by {sculpture.artist}
        </i>
      </h2>

      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      <div className="description">
        {showMore && <p>{sculpture.description}</p>}
      </div>
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
