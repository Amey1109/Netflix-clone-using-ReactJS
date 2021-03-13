import React from "react";
import "./App.css"
import Row from "./components/Row";
import contentRequests from "./config/requests";
import Banner from "./components/Banner"
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="app">
      <Navbar/>
      <Banner/>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={contentRequests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={contentRequests.fetchTrending} />

      <Row title="Top Rated" fetchUrl={contentRequests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={contentRequests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={contentRequests.fetchComedyMovies} />
      <Row title="Documentries" fetchUrl={contentRequests.fetchDocumentries} />
      <Row title="Horror Movies" fetchUrl={contentRequests.fetchHorrorMovies} />
      <Row
        title="Romance Movies"
        fetchUrl={contentRequests.fetchRomanceMovies}
      />
    </div>
  );
}

export default App;
