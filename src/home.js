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
  ArrowRightOutlined,
  ArrowLeftOutlined,
  ClockCircleOutlined,
  LoadingOutlined,
} from "@ant-design/icons"
import { toursApi, searchApi, categoriesApi } from "./Apis/homeApis"
import AppFooter from "./components/AppFooter"
import AppModal from "./components/AppModal"
import { getBlogsApi } from "./Apis/blogApis"

export default function Home() {
  const [tours, setTours] = useState([])
  const [categories, setCategories] = useState([])
  const [searchText, setsearchText] = useState("")
  const [loading, setloading] = useState(false)
  const [loadingAll, setLoadingAll] = useState(false)
  const [isModalVisible, setisModalVisible] = useState(true)
  const [date, setDate] = useState("")

  const [data, setdata] = useState([])

  let getBlogs = async () => {
    let { data } = await getBlogsApi()
    console.log(data)
    setdata(data)
  }

  const handleOk = () => {
    setisModalVisible(false)
  }
  const handleCancel = () => {
    setisModalVisible(false)
  }

  let getAllData = async () => {
    setLoadingAll(true)
    let { data } = await toursApi()
    setTours(data)

    let result = await categoriesApi()
    setCategories(result.data)
    setLoadingAll(false)
  }

  useEffect(() => {
    getAllData()
    getBlogs()
  }, [])

  const { Meta } = Card

  const contentStyle1 = {
    height: "440px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    margin: "auto",
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

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

  return (
    <>
      <Spin spinning={loadingAll} indicator={antIcon}>
        <div>
          <Navbar visible={setisModalVisible} />
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
                  Suffered alteration in some form, by injected humour or good
                  day randomised booth anim 8-bit hella wolf moon beard words.
                </p>
                <div className="grid">
                  <Row gutter={16}>
                    {categories.map((item) => (
                      <Col className="gutter-row" span={8} key={item.id}>
                        <Link to={`/category/${item.id}`}>
                          <div className="destinations_card">
                            <img
                              alt=""
                              width="100%"
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
                    {/* //TODO */}
                    {/* <Col offset={2} style={{ padding: "-50px" }}>
                    <div
                      style={{
                        // marginTop: "50px",
                        textAlign: "left",
                        width: "70%",
                        marginLeft: "25px",
                        // background: "red",
                        padding: "10px",
                        borderRadius: "10px",
                      }}
                    >
                      <h3>Filter Result</h3>
                      <Select
                        defaultValue="Country"
                        style={{ width: "100%", marginTop: "20px" }}
                        onChange={handleChange}
                      >
                        {categories.map((item) => (
                          <Option value={item.id}>{item.name}</Option>
                        ))}
                      </Select>

                      <Space
                        direction="horizontal"
                        style={{
                          // width: "100%",
                          marginTop: "20px",
                          marginBottom: "20px",
                        }}
                      >
                        <Text>Choose a date</Text>
                        <DatePicker onChange={onChange} />
                      </Space>
                      <Slider
                        range
                        marks={marks}
                        defaultValue={[20, 75]}
                        step="10"
                        onChange={changeSlider}
                      />
                      <Button
                        type="primary"
                        style={{
                          marginTop: "20px",
                          width: "100%",
                          marginBottom: "6%",
                        }}
                        onClick={() => console.log("sjsj")}
                      >
                        Confirm
                      </Button>
                    </div>
                  </Col> */}
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

          <div className="newsletter">
            <h2>Subscribe To Our Newsletter</h2>
            <div>
              {" "}
              <Input placeholder="Your mail" size="large" />
              <Button
                size="large"
                type="primary"
                style={{ marginLeft: "10px" }}
              >
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
                  <Col className="gutter-row" span={8} key={tour.id}>
                    <div style={style}>
                      {" "}
                      <Card
                        className="card_tour"
                        hoverable
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
              // style={{ marginLeft: "35%" }}
              autoplay
              dots={false}
              prevArrow={<ArrowLeftOutlined />}
              nextArrow={<ArrowRightOutlined />}
            >
              {data.map((blog) => (
                <div style={contentStyle1}>
                  <img
                    src="xauthor.webp"
                    style={{ margin: "10px auto" }}
                    alt=""
                  ></img>
                  <h1>{blog.title}</h1>
                  <p style={{ margin: "auto" }}>{blog.body}</p>
                </div>
              ))}
            </Carousel>
          </div>

          <AppFooter />
        </div>
      </Spin>
      <AppModal
        title="login"
        handleCancel={handleCancel}
        handleOk={handleOk}
        visible={isModalVisible}
      >
        {/* <Input
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
    <Button type="primary" onClick={loginFn} loading={loading}>
      Submit
    </Button> */}
        <p>hahaha</p>
        <p>hahaha</p>
        <p>hahaha</p>
        <p>hahaha</p>
      </AppModal>
    </>
  )
}
