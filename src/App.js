import React, {useState, useEffect} from "react";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import "./styles/global.scss";

require('dotenv').config()

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const getNews = async () => {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${process.env.REACT_APP_API_KEY}`);
      const resToJson = await response.json();
      console.log(resToJson);
      setData(resToJson)
    }

    getNews();
  }, [])

  return (
    <>
      <Home data={data}/>
      <Blog/>
    </>
  );
}

export default App;
