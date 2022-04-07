import React, {useState, useEffect} from "react";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import "./styles/global.scss";
import { Routes, Route, Link } from "react-router-dom";

require('dotenv').config()

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${process.env.REACT_APP_API_KEY}`);
      const resToJson = await response.json();
      setData(resToJson.articles)
    }

    getNews();
  }, []);

  console.log(data)

  return (
    <Routes>
      <Route path="/" element={<Home data={data}/>} />
      <Route path="/Blog" element={<Blog/>} />
    </Routes>
  );
}

export default App;
