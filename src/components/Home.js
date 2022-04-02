import React, {useState, useEffect} from "react";
import ArticleList from "./ArticleList";
import MainFeed from "./MainFeed";
import Sidebar from "./Sidebar";

const Home = () => {

  const [data, setData] = useState();
  console.log(process.env.REACT_APP_API_KEY)

  useEffect(() => {
    const getNews = async () => {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${process.env.REACT_APP_API_KEY}`);
      const resToJson = await response.json();
      console.log(resToJson);
    }

    getNews();
  }, [])

  return (
    <div className="blog">
      <Sidebar/>
      <div className="blog-header blog-is-sticky">
        <div className="blog-article header-article">
          <div className="blog-big__title">Self</div>
          <div className="blog-menu rounded small-title">Pinned Issue</div>
        </div>
        <div className="blog-article page-number">NO. 01</div>
      </div>
      <MainFeed/>
      <ArticleList/>
    </div>
  );
};

export default Home;
