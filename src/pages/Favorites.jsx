import React from "react";
import GenreTitles from "../utils/GenreTitles";

// Function to format date
function formatUpdatedDate(isoDateString) {
  const date = new Date(isoDateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function Favorites({ favoriteShows, removeFromFavorites }) {
  return (
    <>
      <h1>Favorite Shows</h1>
      <ul>
        {favoriteShows.map((show) => (
          <li key={show.id} className="favorite-card">
            <h2>{show.title}</h2>
            <img src={show.image} alt={show.title} />
            <p>{show.description}</p>
            <p>Seasons: {show.seasons}</p>
            <p>
              Genres: {show.genres.map((genre) => GenreTitles[genre]).join(", ")}
            </p>
            <p>Last Updated: {formatUpdatedDate(show.updated)}</p>
            <button onClick={() => removeFromFavorites(show.id)}>
              Remove from Favorites
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Favorites;
