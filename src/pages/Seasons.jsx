import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { MdFavoriteBorder} from "react-icons/md";

function Seasons() {
  const { id } = useParams();
  const [seasons, setSeasons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSeasons = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://podcast-api.netlify.app/id/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch seasons.");
        }
        const data = await response.json();
        setSeasons(data.seasons);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSeasons();
  }, [id]);

  return (
    <>
      <h1>Seasons</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <div className="error-message">
          <p>Error: {error}</p>
        </div>
      ) : (
        <div className="season-card">
          {seasons.map((season) => (
            <div key={season.id} className="card">
              <Link to={`/seasons/${season.id}`} className="card-link">
                <h2>{season.title}</h2>
                <img src={season.image} alt={season.title} />
                <p>{season.description}</p>
                <p>Number of Episodes: {season.episodes.length}</p>
                <button  onClick={() => handleAddToFavorites(post)}><MdFavoriteBorder /></button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Seasons;
