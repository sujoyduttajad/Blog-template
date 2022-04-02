import React from 'react'

const Sidebar = () => {
  return (
    <div class="blog-part is-menu">
        <a href="/Work" class="blog-menu">
          Work
          <svg
            fill="none"
            stroke="currentColor"
            stroke-width=".7"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-arrow-up-right"
            viewBox="0 0 24 24"
          >
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </a>
        <a href="/Studio" class="blog-menu">
          Studio
        </a>
        <a href="/Blog" class="blog-menu">
          Blog
        </a>
        <a href="/Contact" class="blog-menu">
          Contact
        </a>
        <a href="/Contact" class="blog-menu mention">
          @MagazineDope
        </a>
        <a href="/" class="blog-menu subscribe">
          Subscribe
        </a>
      </div>
  )
}

export default Sidebar