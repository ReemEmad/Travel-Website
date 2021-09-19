import React, { useEffect, useState } from "react"
import Navbar from "./components/navbar2"
import {
  Carousel,
  Button,
  Input,
  DatePicker,
  Space,
  Menu,
  Row,
  Col,
  Card,
  Spin,
} from "antd"
import imgSrc from "./banner.png.webp"
import { Link } from "react-router-dom"
import {
  DownOutlined,
  ArrowRightOutlined,
  ArrowLeftOutlined,
  ClockCircleOutlined,
  LoadingOutlined,
} from "@ant-design/icons"

import { toursApi, searchApi, categoriesApi } from "./Apis/homeApis"

export default function Home() {
  const [tours, setTours] = useState([])
  const [categories, setCategories] = useState([])
  const [searchText, setsearchText] = useState("")
  const [date, setDate] = useState("")
  const [loading, setloading] = useState(false)
  const [loadingAll, setLoadingAll] = useState(false)

  let getAllData = async () => {
    setLoadingAll(true)
    let { data } = await toursApi()
    setTours(data)

    let result = await categoriesApi()
    setCategories(result.data)
    setLoadingAll(false)
  }

  // let getCategories = async () => {
  //   let { data } = await categoriesApi()
  //   setCategories(data)
  //   console.log("categories", data)
  // }

  useEffect(() => {
    // getTours()
    // getCategories()
    getAllData()
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

  let searchFn = async () => {
    let formdata = new FormData()
    formdata.append("key", searchText)
    formdata.append("value", date)
    setloading(true)
    let { data } = await searchApi(formdata)
    console.log(data)
    setloading(false)
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

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

  return (
    <Spin spinning={loadingAll} indicator={antIcon}>
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
                <div
                  className="imgClass"
                  // src={item.images[0].path.replace(
                  //   "127.0.0.1:8000",
                  //   "ec2-18-188-18-65.us-east-2.compute.amazonaws.com/TravelsAgency/public",
                  // )}
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* //TODO */}
        {/* //Search */}

        <div className="search">
          <p style={{ marginTop: "10px" }}>Where you want to go?</p>
          <Input
            placeholder="Where to go?"
            onChange={(e) => setsearchText(e.target.value)}
          />
          <Space direction="vertical">
            <DatePicker onChange={onChange} />
          </Space>

          <Button size="middle" type="primary" onClick={searchFn}>
            Search
          </Button>
        </div>

        <div className="destinations">
          {loading ? (
            <Spin tip="loading..."></Spin>
          ) : (
            <>
              <h1 style={{ fontSize: "220%" }}>Popular Cities</h1>
              <p>
                Suffered alteration in some form, by injected humour or good day
                randomised booth anim 8-bit hella wolf moon beard words.
              </p>
              <div className="grid">
                <Row gutter={16}>
                  {categories.map((item) => (
                    <Col className="gutter-row" span={8}>
                      <Link to={`/category/${item.id}`}>
                        <div className="destinations_card">
                          <img
                            alt=""
                            width="100%"
                            height="240px"
                            src="https://images.pexels.com/photos/2058911/pexels-photo-2058911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            // src={item.images[0].path}
                            //   .replace(
                            //   "127.0.0.1:8000",
                            //   "ec2-18-188-18-65.us-east-2.compute.amazonaws.com/TravelsAgency/public",
                            // )}
                          />
                        </div>
                      </Link>
                      <div className="cardItemName">{item.name}</div>
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
                <Link to="/categories">More Cities</Link>
              </Button>
            </>
          )}
        </div>

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

        <div className="newsletter">
          <h2>Subscribe To Our Newsletter</h2>
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
                          <Link to={`/tour/${tour.id}`}>
                            <img
                              src={imgSrc}
                              width="350"
                              height="200"
                              // src={tour.images[0].path}
                              //   .replace(
                              //   "127.0.0.1:8000",
                              //   "ec2-18-188-18-65.us-east-2.compute.amazonaws.com/TravelsAgency/public",
                              // )}
                              alt=""
                            />
                          </Link>
                          <div
                            style={{
                              fontWeight: "bold",
                              position: "absolute",
                              top: "25px",
                              left: "20px",
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
                      <Meta title={tour.name} style={{ marginRight: "0%" }} />
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
              <img
                src="xauthor.webp"
                style={{ marginLeft: "22%" }}
                alt=""
              ></img>
              <p>
                "Working in conjunction with humanitarian aid agencies, we have
                supported programmes to help alleviate human suffering."
              </p>
              <p>-Micky Mouse</p>
            </div>
            <div style={contentStyle1}>
              <img
                src="xauthor.webp"
                style={{ marginLeft: "22%" }}
                alt=""
              ></img>
              <p>
                "Working in conjunction with humanitarian aid agencies, we have
                supported programmes to help alleviate human suffering."
              </p>
              <p>-Jerry Mouse</p>
            </div>
            <div style={contentStyle1}>
              <img
                src="xauthor.webp"
                style={{ marginLeft: "22%" }}
                alt=""
              ></img>
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
    </Spin>
  )
}
