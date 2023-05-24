import { useEffect, useState } from "react";

import "./App.css";

import Axios from 'axios'
import Header from "./components/Header";
require('dotenv').config

function App() {
  const APIkey = ''
  const [movieList, setMovieList] = useState();
  const [watchlist, setwatchlist] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {}, [])

  const getData = () => {

  }


  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
