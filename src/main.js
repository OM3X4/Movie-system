/* eslint-disable */


// Base URL for images from TMDb
const [wideImg , setWideImg] = useState();
const [rating , setRating] = useState();
const [trailer , setTrailer] = useState();
const [movieName , setMovieName] = useState();
const [duration , setDuration] = useState();
const [release , setRelease] = useState();
const [mainGenre , setMainGenre] = useState();


useEffect(() => {
    const imageBaseUrl = "https://image.tmdb.org/t/p/w1280"; // Use w1280 for wide images (larger size)
    const apiKey = "726d3a47d08b0364c890983eb5d5111c";
    const movieName = title
    fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${movieName}`)
    .then(response => response.json())
    .then(data => {
      const movie = data.results[0]; // Take the first result (if any)
      const movieId = movie.id;
      const type = movie.media_type
  
      // Fetch movie details using the movie ID to get ratings and backdrops
      fetch(`https://api.themoviedb.org/3/${type}/${movieId}?api_key=${apiKey}`)
        .then(response => response.json())
        .then(movieDetails => {
            setMovieName(movieDetails.title)
            setRating(movieDetails.vote_average);

          // Get the backdrop image URL (wide image)
            const backdropPath = movieDetails.backdrop_path ? imageBaseUrl + movieDetails.backdrop_path : null;
          if (backdropPath) {
            setWideImg(backdropPath)
          } else {
            console.log("No backdrop image available.");
          }
        
        const runtime = movieDetails.runtime; // Duration in minutes
        if(type == "movie"){
            if (runtime) {
                const hours = Math.floor(runtime / 60);  // Convert to hours
                const minutes = runtime % 60;           // Remaining minutes
                setDuration(`${hours}h ${minutes}m`);   // Set the formatted duration
            } else {
                console.log("No runtime information available.");
            }
        }else{
            setDuration(movieDetails.number_of_seasons + " Seasons")
        }

        const releaseDate = type == "movie" ? movieDetails.release_date : movieDetails.first_air_date; // Release date in the format YYYY-MM-DD
        if (releaseDate) {
            // Optionally, format the release date
            const formattedReleaseDate = new Date(releaseDate).toLocaleDateString("en-US", {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            setRelease(formattedReleaseDate); // Set the formatted release date
        } else {
            console.log("No release date available.");
        }

        const genres = movieDetails.genres;
        if (genres && genres.length > 0) {
            setMainGenre(genres[0].name); // Set the name of the first genre
        } else {
            console.log("No genres available.");
        }

        
          // Fetch movie trailers
          fetch(`https://api.themoviedb.org/3/${type}/${movieId}/videos?api_key=${apiKey}`)
            .then(response => response.json())
            .then(videoData => {
              const trailers = videoData.results.filter(video => video.type === "Trailer");
              if (trailers.length > 0) {
                trailers.forEach(trailer => {
                    setTrailer(`https://www.youtube.com/embed/${trailer.key}`);
                });
              } else {
                console.log("No trailers found.");
              }
            });
        });
    })
    .catch(error => console.error("Error fetching movie data:", error));
} , [])
