const API_KEY ="63c27e6d3eda83d82ff59ce8afb3fd6a"

const contentRequests = {
    fetchTrending :`/trending/all/week?api_key=${API_KEY}&language=en=us`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en=us`
}
export default contentRequests
