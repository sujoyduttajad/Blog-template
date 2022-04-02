import React from "react";
import ArticleList from "../components/ArticleList";
import MainFeed from "../components/MainFeed";
import Sidebar from "../components/Sidebar";

const Home = ({ data }) => {



  return (
    <div className="blog">
      <Sidebar/>
      <MainFeed articles={data}/>
      <ArticleList/>
    </div>
  );
};

export default Home;
