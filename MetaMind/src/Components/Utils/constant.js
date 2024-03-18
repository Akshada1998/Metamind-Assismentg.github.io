export const API_END_POINT = "http://localhost:8080/api/v1/user";
//Now Playing
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzkwNjJiNDJjYWE2YTAzZmE0ZGQwZGRlNjIwYWYzZSIsInN1YiI6IjY1ZjU5ZGRjZTAzOWYxMDE3ZDA0M2U0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P9ybvmqnew3eHVAaatr7T28labO31wA18VCVhxOCVVc",
  },
};
export const Now_Playing_Movies =
  "https://api.themoviedb.org/3/movie/now_playing";

export const Watch_List_Movies =
  "https://api.themoviedb.org/3/account/{account_id}/watchlist/movies";

export const Popular_Movies = "https://api.themoviedb.org/3/movie/popular";

export const Upcoming_Movies = "https://api.themoviedb.org/3/movie/upcoming";

export const Top_Rated_Movies = "https://api.themoviedb.org/3/movie/top_rated";

export const TMDB_img_url = "https://image.tmdb.org/t/p/w500";
