import React, { useState } from "react"
import { PageHeader, Menu, Input } from "antd"
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
import { Link } from "react-router-dom"

const { SubMenu } = Menu
export default function Navbar() {
  const [current, setcurrent] = useState("mail")

  let handleClick = (e) => {
    console.log("click ", e)
    setcurrent(e.key)
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        background: "#ffffff",
        position: "fixed",
        top: 0,
        zIndex: 10,
        height: "100px",
        boxShadow:
          "2px 4px 5px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      <PageHeader
        className="site-page-header"
        title={<img src="navbar.webp" />}
      />

      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home">
          {" "}
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="about">About</Menu.Item>
        <Menu.Item key="dest">
          <Link to="/tour">Destination</Link>
        </Menu.Item>

        <SubMenu key="SubMenu" title="Pages">
          <Menu.Item key="setting:1">Destination Details</Menu.Item>
          <Menu.Item key="setting:2">Items</Menu.Item>
        </SubMenu>

        <Menu.Item key="contact">Contact</Menu.Item>

        <SubMenu key="SubMenu1" title="Blog">
          <Menu.Item key="setting:3">
            <Link to="/blog">Blog</Link>
          </Menu.Item>
          <Menu.Item key="setting:4">Single Blog</Menu.Item>
        </SubMenu>
      </Menu>

      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        style={{
          // paddingLeft: "17%",
          marginLeft: "35.5%",
          height: "100px",
          display: "flex",
          alignItems: "center",
          boxShadow: "2px 4px 5px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Menu.Item key="phone">
          10(256)-928 256 <PhoneFilled />
        </Menu.Item>

        <Menu.Item>
          <InstagramOutlined />
        </Menu.Item>
        <Menu.Item>
          <FacebookOutlined />
        </Menu.Item>
        <Menu.Item>
          <LinkedinOutlined />
        </Menu.Item>
        <Menu.Item>
          <GooglePlusOutlined />
        </Menu.Item>
        <Menu.Item
          style={{
            background: "red",
            // lineHeight: "70px",
            // alignItems: "flex-end",
          }}
        >
          <SearchOutlined style={{ color: "#ffffff", fontWeight: "900" }} />
        </Menu.Item>
      </Menu>
    </div>
  )
}
