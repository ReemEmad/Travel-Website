import React from "react"
import Navbar from "./components/navbar"
import {
  Carousel,
  Button,
  Input,
  DatePicker,
  Space,
  Menu,
  Dropdown,
  Row,
  Col,
  Divider,
  Card,
} from "antd"

import {
  DownOutlined,
  ArrowRightOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons"

export default function Home() {
  const { Meta } = Card
  const contentStyle = {
    height: "700px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  }
  const contentStyle1 = {
    height: "440px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    // background: "#364d79",
  }
  const style = { padding: "8px 0" }

  function onChange(date, dateString) {
    console.log(date, dateString)
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item icon={<DownOutlined />} disabled>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      </Menu.Item>
    </Menu>
  )
  return (
    <div>
      <Navbar />
      <div className="carousel">
        <Carousel autoplay>
          <div className="container">
            <p className="centered">Indonesia</p>
            <Button size="large" className="centeredBtn" type="primary">
              Explore Now
            </Button>
            <img style={contentStyle} src="banner.png.webp" />
          </div>
          <div className="container">
            <p className="centered">Australia</p>
            <Button size="large" className="centeredBtn" type="primary">
              Explore Now
            </Button>
            <img style={contentStyle} src="banner2.png.webp" />
          </div>
          <div className="container">
            <p className="centered">Switzerland</p>
            <Button size="large" className="centeredBtn" type="primary">
              Explore Now
            </Button>
            <img style={contentStyle} src="banner3.png.webp" />
          </div>
        </Carousel>
      </div>

      <div className="search">
        <p style={{ marginTop: "10px" }}>Where you want to go?</p>
        <Input placeholder="Where to go?" />
        <Space direction="vertical">
          <DatePicker onChange={onChange} />
        </Space>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            Travel Type {"   "} <DownOutlined />
          </a>
        </Dropdown>

        <Button size="middle" type="primary">
          Search
        </Button>
      </div>

      <div className="destinations">
        <h1>Popular Destinations</h1>
        <div className="grid">
          <Row gutter={16}>
            <Col className="gutter-row" span={8}>
              <div style={style}>
                <img src="travel.webp"></img>
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div style={style}>
                {" "}
                <img src="travel2.webp"></img>
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div style={style}>
                <img src="travel3.webp"></img>
              </div>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col className="gutter-row" span={8}>
              <div style={style}>
                {" "}
                <img src="travel4.webp"></img>
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div style={style}>
                {" "}
                <img src="travel5.webp"></img>
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div style={style}>
                <img src="travel6.webp"></img>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="newsletter">
        <h2>Subscribe to our newsletter</h2>
        <div>
          {" "}
          <Input placeholder="Your mail" size="large" />
          <Button size="large" type="primary" style={{ marginLeft: "10px" }}>
            Subscribe
          </Button>
        </div>
      </div>

      <div className="places">
        <h1>Popular Places</h1>
        <div className="places_grid">
          <Row gutter={30} style={{ marginLeft: "30px" }}>
            <Col className="gutter-row" span={8}>
              <div style={style}>
                {" "}
                <Card
                  hoverable
                  style={{ width: 350 }}
                  cover={<img src="x1.webp"></img>}
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div style={style}>
                {" "}
                <Card
                  hoverable
                  style={{ width: 350 }}
                  cover={<img src="x2.webp"></img>}
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div style={style}>
                <Card
                  hoverable
                  style={{ width: 350 }}
                  cover={<img src="x3.webp"></img>}
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                </Card>
              </div>
            </Col>
          </Row>
          <Row gutter={30} style={{ marginLeft: "30px" }}>
            <Col className="gutter-row" span={8}>
              <div style={style}>
                {" "}
                <Card
                  hoverable
                  style={{ width: 350 }}
                  cover={<img src="x4.webp"></img>}
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div style={style}>
                {" "}
                <Card
                  hoverable
                  style={{ width: 350 }}
                  cover={<img src="x5.webp"></img>}
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div style={style}>
                <Card
                  hoverable
                  style={{ width: 350 }}
                  cover={<img src="x6.webp"></img>}
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                </Card>
              </div>
            </Col>
          </Row>
        </div>
        <Button
          size="large"
          type="primary"
          style={{
            background: "#FF4A52",
            marginTop: "20px",
            borderStyle: "none",
          }}
        >
          More places
        </Button>
      </div>

      <div className="testimonials">
        <Carousel
          style={{ marginLeft: "35%" }}
          autoplay
          dots={false}
          prevArrow={<ArrowLeftOutlined />}
          nextArrow={<ArrowRightOutlined />}
        >
          <div style={contentStyle1}>
            <img src="xauthor.webp" style={{ marginLeft: "22%" }}></img>
            <p>
              "Working in conjunction with humanitarian aid agencies, we have
              supported programmes to help alleviate human suffering."
            </p>
            <p>-Micky Mouse</p>
          </div>
          <div style={contentStyle1}>
            <img src="xauthor.webp" style={{ marginLeft: "22%" }}></img>
            <p>
              "Working in conjunction with humanitarian aid agencies, we have
              supported programmes to help alleviate human suffering."
            </p>
            <p>-Jerry Mouse</p>
          </div>
          <div style={contentStyle1}>
            <img src="xauthor.webp" style={{ marginLeft: "22%" }}></img>
            <p>
              "Working in conjunction with humanitarian aid agencies, we have
              supported programs to help alleviate human suffering."
            </p>
            <p>-David Mouse</p>
          </div>
        </Carousel>
      </div>

      <div className="footer">
        <div>
          <img src="xfooter.webp"></img>
          <p>
            5th flora, 700/D kings road, green lane New York-1782 +10 367 826
            2567 contact@carpenter.com
          </p>
        </div>
        <div>
          <h2>Company</h2>
          <p>Pricing</p>
          <p>About</p>
          <p>Gallery</p>
          <p>Contact</p>
        </div>
        <p style={{ alignSelf: "start" }}>
          {" "}
          Copyright ©2021 All rights reserved
        </p>
      </div>
    </div>
  )
}
