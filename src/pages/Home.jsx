import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GenreTitles from "../utils/GenreTitles";
import { MdFavoriteBorder} from "react-icons/md";


//Function to cut the discription length
function TruncateText({ text, maxLength }) {
    const truncatedText = text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    return <span className="truncate">{truncatedText}</span>;
  }

  //Function to format date

  function formatUpdatedDate(isoDateString) {
    const date = new Date(isoDateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchPodcastData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://podcast-api.netlify.app/");
        if (!response.ok) {
          throw new Error("Data fetching failed.");
        }
        const data = await response.json();

        // Sort the posts alphabetically by title
        const sortedData = data.sort((a, b) => a.title.localeCompare(b.title));


        setPosts(sortedData); // Updates state with fetched posts
      } catch (error) {
        setError(error.message); //Updates state with error message
      } finally {
        setLoading(false); // Set loading to false regardless of success or error
    };
  }

    fetchPodcastData();
  }, []); //  Empty dependency array



  return (
    <>
      <h1>Podcasts</h1>
      {/* Ternary operator that manages what displays on the page */}


        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
        <div className="error-message">
          <p>Error: {error}</p>
        </div>
      ) : (
        <ol>
          {/* Itterates over the API data and looks within to find specified data and displays it */}
          {posts.map((post) => (
                <li key={post.id} className="card" >
                    <Link to={`/seasons/${post.id}`} className="card-link">
                        <h2>{post.title}</h2>
                        <img src={post.image} />
                        <TruncateText text={post.description} maxLength={150}/>
                        <p>Seasons: {post.seasons}</p>
                        <p>Genres: {post.genres.map(genre => GenreTitles[genre]).join(', ')}</p>
                        <p>Last Updated: {formatUpdatedDate (post.updated)}</p>
                        <p><MdFavoriteBorder /></p>
                    </Link>
                </li>
          ))}
        </ol>
        )}
        </>
      );
    }
    
    export default Home;