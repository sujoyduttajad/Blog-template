import React from "react";
import ArticleList from "./ArticleList";
import MainFeed from "./MainFeed";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div class="blog">
      <Sidebar/>
      <div class="blog-header blog-is-sticky">
        <div class="blog-article header-article">
          <div class="blog-big__title">Self</div>
          <div class="blog-menu rounded small-title">Pinned Issue</div>
        </div>
        <div class="blog-article page-number">NO. 01</div>
      </div>
      <MainFeed/>
      <ArticleList/>
    </div>
  );
};

export default Home;
