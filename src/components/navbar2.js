import React from "react"
import { Link } from "react-router-dom"
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  PhoneFilled,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  GooglePlusOutlined,
  SearchOutlined,
} from "@ant-design/icons"

export default function Navbar() {
  return (
    <div>
      <header className="navbar" style={{ zIndex: "100" }}>
        <Link to="/">
          <img
            className="navbar__title"
            src="navbar.webp"
            alt=""
            width="150px"
          />
        </Link>

        <div className="navbar_right_item">
          <Link to="/">Home</Link>
        </div>
        <div className="navbar_right_item">
          <Link to="/categories">Categories</Link>
        </div>
        <div className="navbar_right_item">
          <Link to="/tours">Tours</Link>
        </div>
        <div className="navbar_right_item">
          <Link to="/blog">Blog</Link>
        </div>
        <div className="navbar__item">
          <Link to="/">parki</Link>
        </div>
      </header>
    </div>
  )
}
