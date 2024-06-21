import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EpisodesList() {
  const { id } = useParams();
  const [episodes, setEpisodes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await fetch(`https://podcast-api.netlify.app/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch episodes.");
        }
        const data = await response.json();
        setEpisodes(data.episodes); // Updates state with fetched episodes
      } catch (error) {
        setError(error.message); // Updates state with error message
      }
    };

    fetchEpisodes();
  }, [id]);

  return (
    <>
      <h1>Episodes</h1>

      {error ? (
        <div className="error-message">
          <p>Error: {error}</p>
        </div>
      ) : (
              <div>
          {episodes.length > 0 ? (
            episodes.map((episode, index) => (
              <div key={index} className="card">
                <h2>{episode.title}</h2>
                <img src={episode.seasonImage} alt={episode.title} />
                <p>{episode.description}</p>
                <audio controls>
                  <source src={episode.file} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            ))
          ) : (
            <p>No episodes available.</p>
          )}
        </div>
      )}
    </>
  );
}

export default EpisodesList;

