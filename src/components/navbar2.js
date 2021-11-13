import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { Button, message, Modal, Input, Layout } from "antd"
import { login } from "../Apis/userApis"
import { slide as Menu } from "react-burger-menu"
import {
  PhoneFilled,
  FacebookOutlined,
  InstagramOutlined,
  GooglePlusOutlined,
  UserOutlined,
} from "@ant-design/icons"
import { logout } from "../Apis/userApis"

export default function Navbar({ props }) {
  const history = useHistory()
  const [welcome, setWelcome] = useState()
  const [isModalVisible, setisModalVisible] = useState(false)
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [loading, setLoading] = useState(false)

  const { Header, Content, Sider } = Layout

  const loginFn = async () => {
    if (email === "" || password === "") {
      message.error("please enter your email and password")
      return
    }
    try {
      setLoading(true)
      let Fdata = new FormData()
      Fdata.append("email", email)
      Fdata.append("password", password)
      let { data } = await login(Fdata)
      localStorage.setItem("token", data.token)
      console.log(data)
      localStorage.setItem("name", data.name)
      localStorage.setItem("email", data.email)
      setLoading(false)
      setWelcome("haha")
      setisModalVisible(false)
      message.success("You've logged in successfully")
    } catch (e) {
      setLoading(false)
      message.error(e.response.data.message)
    }
  }
  const handleCancel = (e) => {
    console.log(e)
    setisModalVisible(false)
  }

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

    if (window.location.pathname === "/user") window.location.reload(true)
  }

  return (
    <>
      <header className="navbar showInDesktop" style={{ zIndex: "100" }}>
        <Link to="/">
          <img
            className="navbar__title"
            src="navbar.webp"
            alt=""
            width="150px"
          />
        </Link>
        <Link to="/">
          <div className="navbar_right_item">Home</div>
        </Link>

        <Link to="/categories">
          <div className="navbar_right_item">Categories</div>
        </Link>
        <Link to="/tours">
          <div className="navbar_right_item">Tours</div>
        </Link>
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
          <Link to="/user">
            <div className="navbar__item" style={{ marginLeft: "25%" }}>
              <UserOutlined />
            </div>
          </Link>
        ) : (
          <div className="navbar__item" id="navbar__item_last">
            <Button type="primary" onClick={() => setisModalVisible(true)}>
              Login
            </Button>
          </div>
        )}
        <Link to="/">
          <div
            className="navbar__item"
            // style={{ marginLeft: "44%" }}
          >
            10(256)-928 <PhoneFilled />
          </div>
        </Link>
        <Link to="/">
          <div className="navbar__item">
            <InstagramOutlined />
          </div>
        </Link>
        <Link to="/">
          <div className="navbar__item">
            <FacebookOutlined />
          </div>
        </Link>
        <Link to="/">
          <div className="navbar__item">
            <GooglePlusOutlined />
          </div>
        </Link>
      </header>
      <Menu className="toggle">
        {/* <Header className="header"> */}
        <header className="navbar" style={{ zIndex: "100" }}>
          <Link to="/">
            <img
              className="navbar__title"
              src="navbar.webp"
              alt=""
              width="150px"
            />
          </Link>
          <Link to="/">
            <div className="navbar_right_item">Home</div>
          </Link>

          <Link to="/categories">
            <div className="navbar_right_item">Categories</div>
          </Link>
          <Link to="/tours">
            <div className="navbar_right_item">Tours</div>
          </Link>
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
            <Link to="/user">
              <div className="navbar__item ">
                <UserOutlined />
              </div>
            </Link>
          ) : (
            <div className="navbar__item" id="navbar__item_last">
              <Button type="primary" onClick={() => setisModalVisible(true)}>
                Login
              </Button>
            </div>
          )}
          <Link to="/">
            <div
              className="navbar__item"
              // style={{ marginLeft: "44%" }}
            >
              10(256)-928 <PhoneFilled />
            </div>
          </Link>
          <Link to="/">
            <div className="navbar__item">
              <InstagramOutlined />
            </div>
          </Link>
          <Link to="/">
            <div className="navbar__item">
              <FacebookOutlined />
            </div>
          </Link>
          <Link to="/">
            <div className="navbar__item">
              <GooglePlusOutlined />
            </div>
          </Link>
        </header>
        {/* </Header> */}
      </Menu>
      {/* </Layout> */}

      <Modal
        title="login"
        onCancel={handleCancel}
        onOk={loginFn}
        visible={isModalVisible}
        className="login-modal"
      >
        <Input
          placeholder="Email"
          prefix={<UserOutlined />}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <Input.Password
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <br />
        <p>
          Don't have an account?{" "}
          {
            <Link to="/register">
              <span className="link-register">Register here</span>
            </Link>
          }
        </p>
      </Modal>
    </>
  )
}
