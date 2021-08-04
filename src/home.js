import React, { useEffect, useState } from "react"
import Navbar from "./components/navbar2"
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
import { Link } from "react-router-dom"
import {
  DownOutlined,
  ArrowRightOutlined,
  ArrowLeftOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons"

import { toursApi, searchApi, categoriesApi } from "./Apis/homeApis"

export default function Home() {
  const [tours, setTours] = useState([])
  const [categories, setCategories] = useState([])
  const [date, setDate] = useState("")

  let getTours = async () => {
    let { data } = await toursApi()
    setTours(data)
    console.log(data)
  }
  let getCategories = async () => {
    let { data } = await categoriesApi()
    setCategories(data)
    console.log("categories", data)
  }

  useEffect(() => {
    getTours()
    getCategories()
  }, [])

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

  function onChange(dateString) {
    setDate(dateString)
    console.log(dateString)
  }

  let searchFn = () => {
    let data = new FormData()
    data.append("key", "alexandria")
    data.append("value", date)

    let result = searchApi(data)
    console.log(result)
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
          {/* {//categories} */}
          {categories.map((item) => (
            <div className="container">
              {/* <p className="centered">{item.name}</p> */}
              <Button size="large" className="centeredBtn" type="primary">
                Explore Now
              </Button>
              <img
                // style={contentStyle}
                src={item.images[0].path.replace(
                  "127.0.0.1:8000",
                  "ec2-18-188-18-65.us-east-2.compute.amazonaws.com/TravelsAgency/public",
                )}
                alt=""
                // width="300"
                // height="400"
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* //TODO */}
      {/* //Search */}

      <div className="search">
        <p style={{ marginTop: "10px" }}>Where you want to go?</p>
        <Input placeholder="Where to go?" />
        <Space direction="vertical">
          <DatePicker onChange={onChange} />
        </Space>

        <Button size="middle" type="primary" onClick={searchFn}>
          Search
        </Button>
      </div>

      <div className="destinations">
        <h1 style={{ fontSize: "220%" }}>Popular Cities</h1>
        <p>
          Suffered alteration in some form, by injected humour or good day
          randomised booth anim 8-bit hella wolf moon beard words.
        </p>
        <div className="grid">
          <Row gutter={16}>
            {categories.map((item) => (
              <Col className="gutter-row" span={8}>
                <div className="destinations_card">
                  <img
                    alt=""
                    color="#4C4C4C"
                    width="100%"
                    height="200px"
                    src={item.images[0].path.replace(
                      "127.0.0.1:8000",
                      "ec2-18-188-18-65.us-east-2.compute.amazonaws.com/TravelsAgency/public",
                    )}
                  />
                  <div
                    style={{
                      color: "white",
                      fontFamily: "Noto Sans JP",
                      fontSize: "25px",
                      position: "absolute",
                      top: "150px",
                      left: "40px",
                      transform: "none",

                      // background: "#FF4A52",
                    }}
                  >
                    {item.name}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          {/* <Row gutter={16}>
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
          </Row> */}
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
        <h1>Popular Tours</h1>
        <p>
          Suffered alteration in some form, by injected humour or good day
          randomised booth anim 8-bit hella wolf moon beard words.
        </p>
        <div className="places_grid">
          <Row gutter={30} style={{ marginLeft: "30px" }}>
            {tours.map((tour) => (
              <Col className="gutter-row" span={8}>
                <div style={style}>
                  {" "}
                  <Card
                    hoverable
                    style={{ width: 350 }}
                    cover={
                      <>
                        <img
                          src={tour.images[0].path.replace(
                            "127.0.0.1:8000",
                            "ec2-18-188-18-65.us-east-2.compute.amazonaws.com/TravelsAgency/public",
                          )}
                          alt=""
                        />
                        <div
                          style={{
                            fontWeight: "bold",
                            position: "absolute",
                            top: "25px",
                            left: "-105px",
                            // background: "#f7f8f8f8",
                          }}
                        >
                          <Button
                            style={{
                              background: "#1EC6B6",
                              border: "none",
                              color: "white",
                              borderRadius: "15px",
                            }}
                          >
                            {tour.price}LE
                          </Button>
                        </div>
                      </>
                    }
                  >
                    <Meta title={tour.name} style={{ marginRight: "67%" }} />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        paddingTop: "15px",
                      }}
                    >
                      <ClockCircleOutlined />
                      &nbsp; {tour.duration} days
                    </div>
                  </Card>
                </div>
              </Col>
            ))}
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
          <Link to="/tours">More places</Link>
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
            <img src="xauthor.webp" style={{ marginLeft: "22%" }} alt=""></img>
            <p>
              "Working in conjunction with humanitarian aid agencies, we have
              supported programmes to help alleviate human suffering."
            </p>
            <p>-Micky Mouse</p>
          </div>
          <div style={contentStyle1}>
            <img src="xauthor.webp" style={{ marginLeft: "22%" }} alt=""></img>
            <p>
              "Working in conjunction with humanitarian aid agencies, we have
              supported programmes to help alleviate human suffering."
            </p>
            <p>-Jerry Mouse</p>
          </div>
          <div style={contentStyle1}>
            <img src="xauthor.webp" style={{ marginLeft: "22%" }} alt=""></img>
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
          <img src="xfooter.webp" alt=""></img>
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
