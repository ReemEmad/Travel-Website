import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { Button, message } from "antd"
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  PhoneFilled,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  GooglePlusOutlined,
  UserOutlined,
} from "@ant-design/icons"
import { logout } from "../Apis/userApis"

export default function Navbar({ props }) {
  const history = useHistory()
  const [welcome, setWelcome] = useState()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      setWelcome("Welcome Back!")
    }
  }, [])

  const logoutFn = async () => {
    let { data } = await logout(localStorage.getItem("token"))
    console.log(data)
    localStorage.clear()
    message.success("You have been successfully logged out")
    setWelcome(undefined)
    console.log(window.location.pathname)
    if (window.location.pathname === "/user") window.location.reload(true)
  }

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
        {welcome !== undefined && (
          <div className="navbar_right_item-logout">
            <Button type="primary" onClick={logoutFn}>
              Logout
            </Button>
          </div>
        )}
        {welcome ? (
          <div className="navbar__item" style={{ marginLeft: "25%" }}>
            <Link to="/user">
              <UserOutlined />
            </Link>
          </div>
        ) : (
          <div className="navbar__item" style={{ marginLeft: "35%" }}>
            <Button type="primary" onClick={() => history.push("/login")}>
              Login
            </Button>
          </div>
        )}
        <div
          className="navbar__item"
          // style={{ marginLeft: "44%" }}
        >
          <Link to="/">
            10(256)-928 256 <PhoneFilled />
          </Link>
        </div>
        <div className="navbar__item">
          <Link to="/">
            <InstagramOutlined />
          </Link>
        </div>
        <div className="navbar__item">
          <Link to="/">
            <FacebookOutlined />
          </Link>
        </div>
        <div className="navbar__item">
          <Link to="/">
            <GooglePlusOutlined />
          </Link>
        </div>
      </header>
    </div>
  )
}
