import React from 'react'

const Sidebar = () => {
  return (
    <div className="blog-part is-menu">
        <a href="/Work" className="blog-menu">
          Work
          <svg
            fill="none"
            stroke="currentColor"
            stroke-width=".7"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-arrow-up-right"
            viewBox="0 0 24 24"
          >
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </a>
        <a href="/Studio" className="blog-menu">
          Studio
        </a>
        <a href="/Blog" className="blog-menu">
          Blog
        </a>
        <a href="/Contact" className="blog-menu">
          Contact
        </a>
        <a href="/Contact" className="blog-menu mention">
          @MagazineDope
        </a>
        <a href="/" className="blog-menu subscribe">
          Subscribe
        </a>
      </div>
  )
}

export default Sidebar