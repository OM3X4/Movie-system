import { writeFileSync } from 'fs';

const names = [
  "Iron Man",
  "Avengers: Infinity War",
  "Captain America: The Winter Soldier",
  "Captain America: Civil War",
  "Spider-Man: Homecoming",
  "Spider-Man: Far From Home",
  "Black Panther",
  "Thor: Ragnarok",
  "Thor",
  "Thor: The Dark World",
  "Guardians of the Galaxy",
  "Guardians of the Galaxy Vol. 2",
  "Doctor Strange",
  "Ant-Man",
  "Ant-Man and the Wasp",
  "Deadpool",
  "Deadpool 2",
  "X-Men",
  "X2: X-Men United",
  "X-Men: The Last Stand",
  "X-Men Origins: Wolverine",
  "X-Men: Days of Future Past",
  "X-Men: Apocalypse",
  "X-Men: Dark Phoenix",
  "X-Men: First Class",
  "Logan",
  "The Wolverine",
  "Blade",
  "Blade II",
  "Blade: Trinity",
  "Captain Marvel",
  "Hulk",
  "The Incredible Hulk",
  "Fantastic Four",
  "Fantastic Four: Rise of the Silver Surfer",
  "Fantastic Four",
  "Venom",
  "The Amazing Spider-Man",
  "The Amazing Spider-Man 2",
  "Spider-Man",
  "Spider-Man 2",
  "Spider-Man 3",
  "The Dark Knight",
  "The Dark Knight Rises",
  "Man of Steel",
  "Shazam!",
  "Aquaman",
  "Batman Begins",
  "Zack Snyder's Justice League",
  "Joker",
  "Superman Returns",
  "Superman II",
  "Superman: The Movie",
  "Watchmen",
  "Batman v Superman: Dawn of Justice",
  "The Suicide Squad",
  "Justice League: War",
  "Justice League: Doom",
  "Teen Titans Go! To the Movies",
  "Batman: Mask of the Phantasm",
  "Green Lantern",
  "Constantine",
  "Catwoman",
  "Batman & Robin",
  "Batman Forever",
  "Batman Returns",
  "Batman (1989)",
  "Queen Gambit",
  "Gladiator",
  "Spider-Man: Into the Spider-Verse",
  "Spider-Man: The Animated Series",
  "Spider-Man Unlimited",
  "Ultimate Spider-Man",
  "The Spectacular Spider-Man",
  "Spider-Man and His Amazing Friends",
  "Arcane",
  "Coco",
  "Toy Story",
  "Toy Story 2",
  "Toy Story 3",
  "Toy Story 4",
  "Harry Potter and the Sorcerer's Stone",
  "Harry Potter and the Chamber of Secrets",
  "Harry Potter and the Prisoner of Azkaban",
  "Harry Potter and the Goblet of Fire",
  "Harry Potter and the Order of the Phoenix",
  "Harry Potter and the Half-Blood Prince",
  "Harry Potter and the Deathly Hallows: Part 1",
  "Harry Potter and the Deathly Hallows: Part 2",
  "How to Train Your Dragon",
  "How to Train Your Dragon 2",
  "BoJack Horseman",
  "Rick and Morty",
  "Dragon Ball Z",
  "House",
  "The Good Doctor",
  "The Good Nurse",
  "The Crown",
  "Adventure Time",
  "mr robot",
  "regular show",
  "The Office",
  "Friends"
];   

const fetchData = async () => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w1280"; // Use w1280 for wide images (larger size)
  const apiKey = "726d3a47d08b0364c890983eb5d5111c";
  
  // Initialize an empty array to hold the populated movie data
  const movieDataArray = [];
  
  for (const movieName of names) {
    const encodedMovieName = encodeURIComponent(movieName);  // URL encode the movie name
  
    try {
      // Fetch movie search data from TMDB API
      const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${encodedMovieName}`);
      const data = await response.json();
      const movie = data.results[0]; // Take the first result (if any)
  
      if (!movie) {
        console.log(`No results found for ${movieName}`);
        continue;
      }
  
      const movieId = movie.id;
      const type = movie.media_type;
  
      // Fetch movie details using the movie ID to get ratings and backdrops
      const movieDetailsResponse = await fetch(`https://api.themoviedb.org/3/${type}/${movieId}?api_key=${apiKey}`);
      const movieDetails = await movieDetailsResponse.json();
  
      // Prepare the data object to be populated
      const movieObject = {
        title: movie.title || movie.name,  // Use title for movies and name for TV shows
        year: new Date(movieDetails.release_date || movieDetails.first_air_date).getFullYear(),
        cast: [],
        genres: movieDetails.genres.map(genre => genre.name),
        href: `${movie.title ? movie.title.replace(/\s+/g, '_') : movie.name.replace(/\s+/g, '_')}_(${type === "movie" ? "film" : "tv"})`,
        extract: movieDetails.overview,
        thumbnail: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        thumbnail_width: 259,
        thumbnail_height: 383,
        rating: movieDetails.vote_average,
        wideImg: movieDetails.backdrop_path ? imageBaseUrl + movieDetails.backdrop_path : null,
        duration: type === "movie" ? `${Math.floor(movieDetails.runtime / 60)}h ${movieDetails.runtime % 60}m` : `${movieDetails.number_of_seasons} Seasons`,
        release: new Date(movieDetails.release_date || movieDetails.first_air_date).toLocaleDateString("en-US", {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        genre: movieDetails.genres[0]?.name || 'N/A',
        trailer: null // We'll fetch trailers separately
      };
  
      // Fetch movie cast
      const castResponse = await fetch(`https://api.themoviedb.org/3/${type}/${movieId}/credits?api_key=${apiKey}`);
      const castData = await castResponse.json();
      movieObject.cast = castData.cast.slice(0, 5).map(cast => cast.name); // Take the first 5 cast members
  
      // Fetch movie trailers
      const videoDataResponse = await fetch(`https://api.themoviedb.org/3/${type}/${movieId}/videos?api_key=${apiKey}`);
      const videoData = await videoDataResponse.json();
      const trailers = videoData.results.filter(video => video.type === "Trailer");
      if (trailers.length > 0) {
        movieObject.trailer = `https://www.youtube.com/embed/${trailers[0].key}`;
      }
  
      // Push the populated object to the movieDataArray
      movieDataArray.push(movieObject);
  
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  }
  
  // Once the loop has completed and all fetches are done, return the result
  return movieDataArray;
};

const writeToFile = async () => {
  const x = await fetchData();  // Wait for fetchData to complete
  const dataString = JSON.stringify(x, null, 2);
  
  writeFileSync('output.txt', dataString);
  console.log("Data written to output.txt");
};

writeToFile();
