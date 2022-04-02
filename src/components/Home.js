import React from "react";
import ArticleList from "./ArticleList";
import MainFeed from "./MainFeed";
import Sidebar from "./Sidebar";

const Home = ({ data }) => {



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
