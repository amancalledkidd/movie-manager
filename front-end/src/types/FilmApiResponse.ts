export type FilmApiResponse = {
    page: number;
    results: FilmInfo[];
    total_pages: number;
    total_results: number;
  };
  
export type FilmInfo = {
    adult: boolean;
    backdrop_path: string | null; // Path to the backdrop image, can be null
    genre_ids: number[]; // Array of genre IDs
    id: number; // Unique ID for the film
    original_language: string; // Original language of the film
    original_title: string; // Original title of the film
    overview: string; // Brief summary of the film
    popularity: number; // Popularity score of the film
    poster_path: string | null; // Path to the poster image, can be null
    release_date: string; // Release date of the film
    title: string; // Title of the film
    video: boolean; // Indicates if there's a video available
    vote_average: number; // Average vote score
    vote_count: number; // Number of votes
  };
