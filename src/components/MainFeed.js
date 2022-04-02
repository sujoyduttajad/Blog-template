import React from 'react'
import format from 'date-fns/format';
import { Link } from "react-router-dom";

const MainFeed = () => {
  return (
    <div className="blog-header-container">
        <div className="blog-header">
          <div className="blog-article header-article">
            <div className="blog-big__title">Esteem</div>
            <div className="blog-menu small-title date">
                {
                    format(new Date(), 'dd.MM.yyyy')
                }
            </div>
          </div>
          <div className="blog-article">
            <img
              src="https://images.unsplash.com/photo-1496629062893-b0f566065d44?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h2>
              Sharing The <span>Widespread</span> Acclaim About Motivation
            </h2>
            <div className="blog-detail">
              <span>By Richard Carnation</span>
              <span>5 Min Read</span>
            </div>
            <p>
              Blonde received widespread acclaim, with critics praising Ocean's
              introspective lyrics and the album's unconventional
            </p>
            <Link to="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-corner-down-right"
                viewBox="0 0 24 24"
              >
                <path d="M15 10l5 5-5 5" />
                <path d="M4 4v7a4 4 0 004 4h12" />
              </svg>
              See More
            </Link>
          </div>
        </div>
        <div className="blog-header">
          <div className="blog-article header-article">
            <div className="blog-big__title">Love</div>
            <div className="blog-menu small-title date">12.06.2021</div>
          </div>
          <div className="blog-article">
            <img
              src="https://images.unsplash.com/photo-1529255484355-cb73c33c04bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h2>
              Talking About <span>Vulnerability</span> During Quarantine
            </h2>
            <div className="blog-detail">
              <span>By Tom Hiddleston</span>
              <span>5 Min Read</span>
            </div>
            <p>
              Having traveled to Turkey multiple times, with critics praising
              Ocean's introspective lyrics and the album's unconventional
            </p>
            <Link to="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-corner-down-right"
                viewBox="0 0 24 24"
              >
                <path d="M15 10l5 5-5 5" />
                <path d="M4 4v7a4 4 0 004 4h12" />
              </svg>
              See More
            </Link>
          </div>
        </div>
        <div className="blog-header">
          <div className="blog-article header-article">
            <div className="blog-big__title">Control</div>
            <div className="blog-menu small-title date">12.06.2021</div>
          </div>
          <div className="blog-article">
            <img
              src="https://images.unsplash.com/photo-1616248249518-b16013cd4e42?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkzfHxibGFjayUyMGFuZCUyMHdoaXRlfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h2>
              How 2020 Changed <span>Understanding</span> Of Mental Health
            </h2>
            <div className="blog-detail">
              <span>By Scarlett Witch</span>
              <span>5 Min Read</span>
            </div>
            <p>
              Time is defines ad the indefinete continued progress, with critics
              praising Ocean's introspective lyrics and the album's
            </p>
            <Link to="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-corner-down-right"
                viewBox="0 0 24 24"
              >
                <path d="M15 10l5 5-5 5" />
                <path d="M4 4v7a4 4 0 004 4h12" />
              </svg>
              See More
            </Link>
          </div>
        </div>
      </div>
  )
}

export default MainFeed