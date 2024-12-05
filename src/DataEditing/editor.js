/* eslint-disable */
import mainStream from "./Movies.js"

const DataCopy = [...mainStream];

const fetchData = async () => {
    for (const dataya of DataCopy) {
      const imageBaseUrl = "https://image.tmdb.org/t/p/w1280"; // Use w1280 for wide images (larger size)
      const apiKey = "726d3a47d08b0364c890983eb5d5111c";
      const movieName = encodeURIComponent(dataya.title);  // URL encode the movie name
      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${movieName}`);
        const data = await response.json();
        const movie = data.results[0]; // Take the first result (if any)
        if (!movie) {
          console.log(`No results found for ${dataya.title}`);
          continue;
        }
        const movieId = movie.id;
        const type = movie.media_type;
  
        // Fetch movie details using the movie ID to get ratings and backdrops
        const movieDetailsResponse = await fetch(`https://api.themoviedb.org/3/${type}/${movieId}?api_key=${apiKey}`);
        const movieDetails = await movieDetailsResponse.json();
  
        // Rating
        dataya.rating = movieDetails.vote_average;
  
        // Backdrop image
        const backdropPath = movieDetails.backdrop_path ? imageBaseUrl + movieDetails.backdrop_path : null;
        if (backdropPath) {
          dataya.wideImg = backdropPath;
        } else {
          console.log("No backdrop image available.");
        }
  
        // Duration / Season count
        const runtime = movieDetails.runtime; // Duration in minutes
        if (type === "movie" && runtime) {
          const hours = Math.floor(runtime / 60);
          const minutes = runtime % 60;
          dataya.duration = `${hours}h ${minutes}m`; // Set the formatted duration
        } else if (type === "tv" && movieDetails.number_of_seasons) {
          dataya.duration = `${movieDetails.number_of_seasons} Seasons`;
        } else {
          console.log("No duration or season information available.");
        }
  
        // Release Date
        const releaseDate = type === "movie" ? movieDetails.release_date : movieDetails.first_air_date;
        if (releaseDate) {
          const formattedReleaseDate = new Date(releaseDate).toLocaleDateString("en-US", {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
          dataya.release = formattedReleaseDate; // Set the formatted release date
        } else {
          console.log("No release date available.");
        }
  
        // Genre
        const genres = movieDetails.genres;
        if (genres && genres.length > 0) {
          dataya.genre = genres[0].name; // Set the name of the first genre
        } else {
          console.log("No genres available.");
        }
  
        // Fetch movie trailers
        const videoDataResponse = await fetch(`https://api.themoviedb.org/3/${type}/${movieId}/videos?api_key=${apiKey}`);
        const videoData = await videoDataResponse.json();
        const trailers = videoData.results.filter(video => video.type === "Trailer");
        if (trailers.length > 0) {
          // You could also loop through trailers and save all links, but here I just pick the first one
          dataya.trailer = `https://www.youtube.com/embed/${trailers[0].key}`;
        } else {
          console.log("No trailers found.");
        }
  
        // Fetch reviews for the movie
        const reviewsResponse = await fetch(`https://api.themoviedb.org/3/${type}/${movieId}/reviews?api_key=${apiKey}`);
        const reviewsData = await reviewsResponse.json();
        const reviews = reviewsData.results.slice(0, 5); // Get the first 5 reviews
  
        dataya.reviews = reviews.map(review => ({
          author: review.author,
          content: review.content,
          created_at: new Date(review.created_at).toLocaleDateString("en-US", {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          url: `https://www.themoviedb.org/review/${review.id}`
        }));
  
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    }
  
    // Once the loop has completed and all fetches are done, log the result
    console.log(JSON.stringify(DataCopy));
  };
  

// Call the function
fetchData();
