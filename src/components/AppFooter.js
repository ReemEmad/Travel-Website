import React from "react"

export default function AppFooter() {
  return (
    <div className="footer">
      <div>
        <img src="xfooter.webp" alt=""></img>
        <p>
          5th flora, 700/D kings road, green lane New York-1782 +10 367 826 2567
          contact@carpenter.com
        </p>
      </div>
      <div className="footer_links">
        <h2>Company</h2>
        <a href="/">Home</a>
        <br />
        <a href="/categories">Categories</a>
        <br />
        <a href="/Tours">Tours</a>
        <br />
        <a href="/Blog">Blog</a>
      </div>
      <p className="footer_links_p"> Copyright ©2021 All rights reserved</p>
    </div>
  )
}
