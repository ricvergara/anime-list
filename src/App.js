import { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  const [movieList, SetMovieList] = useState([]);
  const [topMovie, SetTopMovie] = useState([]);
  const [search, SetSearch] = useState("");

  const GetTopMovie = async () => {
    const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
      .then(res => res.json());
    SetTopMovie(temp.top.slice(0, 10));
  }

  const HandleSearch = e => {
    e.preventDefault();

    FetchMovie(search);

  }

  const FetchMovie = async (query) => {
    const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
      .then(res => res.json());

    SetMovieList(temp.results);
  }


  useEffect(() => {
    GetTopMovie();
  }, []);

  return (
    <div className="App">
      <Header />

      <div className="content-wrap">
        <Sidebar
          topMovie={topMovie} />

        <MainContent
          HandleSearch={HandleSearch}
          search={search}
          SetSearch={SetSearch}
          movieList={movieList}
        />
      </div>

    </div>
  );
}

export default App;
