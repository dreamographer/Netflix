
const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?&append_to_response=videos`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?language=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?language=en-US&query=horror&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming`,
    videosRequest:'http://api.themoviedb.org/3/movie/897087/videos?'
  };
  export default requests