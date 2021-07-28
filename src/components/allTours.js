import React, { useEffect, useState } from "react"
import { Layout, Select, Slider, Button, Row, Col, Rate, Carousel } from "antd"
import imgSrc1 from "../pexels-alesia-kozik-6016498.jpg"
import imgSrc2 from "../pexels-alesia-kozik-6016757.jpg"
import { ClockCircleOutlined } from "@ant-design/icons"
import { getData } from "../Apis/toursApis"
import { categoriesApi } from "../Apis/homeApis"
import Navbar from "./navbar"
import { Link } from "react-router-dom"

export default function AllTours() {
  const [tours, setTours] = useState([])
  const [categories, setCategories] = useState([])
  const style = { background: "", paddingLeft: "280px", textAlign: "right" }
  const { Header, Footer, Sider, Content } = Layout

  const { Option } = Select

  const contentStyle = {
    height: "700px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  }

  const marks = {
    0: "0$",
    20: "20$",
    50: "50$",
    75: "75$",
    100: "100$",
  }

  let getTours = async () => {
    let { data } = await getData()
    setTours(data)
    console.log(data)
  }

  let getCarouselData = async () => {
    let { data } = await categoriesApi()
    setCategories(data)
  }

  useEffect(() => {
    getTours()
    getCarouselData()
  }, [])

  function handleChange(value) {
    console.log(`selected ${value}`)
  }

  function handleChange1(value) {
    console.log(`selected ${value}`)
  }

  return (
    <>
      <Navbar />
      <div className="carousel">
        <Carousel autoplay>
          {/* {//categories} */}
          {categories.map((item) => (
            <div className="container">
              <p className="centered">{item.name}</p>
              {/* <p className="centered">north coast</p> */}
              {/* <Button size="large" className="centeredBtn" type="primary">
                Explore Now
              </Button> */}
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
      <Layout>
        <Header
          style={{
            background: "none",
            marginTop: "100px",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "37px" }}>Tours</h1>
        </Header>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              marginTop: "50px",
              width: "600px",
              height: "300px",
              padding: "25px",
              background: "white",
              marginLeft: "200px",
              borderRadius: "10px",
            }}
          >
            <h3>Filter Result</h3>
            <Select
              defaultValue="Country"
              style={{ width: "100%", marginTop: "20px" }}
              onChange={handleChange}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">Yiminghe</Option>
            </Select>

            <Select
              defaultValue="Travel Type"
              style={{ width: "100%", marginTop: "20px", marginBottom: "20px" }}
              onChange={handleChange1}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
            <Slider range marks={marks} defaultValue={[50, 100]} />
            <Button
              type="primary"
              style={{
                marginTop: "20px",
                width: "100%",
              }}
            >
              Reset
            </Button>
          </div>
          <Content style={{ padding: "50px", margin: "0px 50px" }}>
            <Row align="middle" gutter={8}>
              {tours.map((item) => (
                <Col className="gutter-row" span={11}>
                  <Link to={`/tour/${item.id}`}>
                    <img
                      src={item.images[0].path.replace(
                        "127.0.0.1:8000",
                        "ec2-18-188-18-65.us-east-2.compute.amazonaws.com/TravelsAgency/public",
                      )}
                      width="380px"
                      height="250px"
                      alt=""
                    />
                  </Link>

                  <div
                    style={{
                      fontWeight: "bold",
                      position: "absolute",
                      top: "25px",
                      left: "25px",
                      background: "#f7f8f8f8",
                    }}
                  >
                    <Button
                      style={{
                        background: "#FF4A52",
                        border: "none",
                        color: "white",
                      }}
                    >
                      {item.price}LE
                    </Button>
                    {"        "}
                  </div>
                  <h2 style={{ textTransform: "uppercase", marginTop: "10px" }}>
                    {item.name}
                  </h2>
                  <p style={{ fontSize: "17px", width: "75%" }}>
                    Discover the delights of South America in Argentina, Chile,
                    and Bolivia on a tailor-made amazing tour. You will
                    experience touring Buenos Aires,
                  </p>
                  <Rate value={"4"} />
                  <ClockCircleOutlined />
                  <span> {"         " + item.duration} days</span>
                </Col>
              ))}
              {/* <Col className="gutter-row" span={11}>
                <img src={imgSrc2} width="380px" height="250px" />
                <div
                  style={{
                    fontWeight: "bold",
                    position: "absolute",
                    top: "25px",
                    left: "25px",
                    background: "#f7f8f8f8",
                  }}
                >
                  <Button
                    style={{
                      background: "#FF4A52",
                      border: "none",
                      color: "white",
                    }}
                  >
                    1500$
                  </Button>
                  {"        "}
                </div>
                <h2 style={{ textTransform: "uppercase", marginTop: "10px" }}>
                  Argentina-Chile with final destination Santiago de Chile
                </h2>
                <p style={{ fontSize: "17px" }}>
                  Planning for a unique Latin America tour? Now, you will travel
                  the world in just 16 days, exploring all the attractions of
                  Argentina, Chile.
                </p>
                <Rate value={"4"} />
                <ClockCircleOutlined />
                <span> 15 days</span>
              </Col>
            </Row>
            <Row align="middle" gutter={8} style={{ marginTop: "20px" }}>
              <Col className="gutter-row" span={11}>
                <img src={imgSrc1} width="380px" height="250px" />
                <div
                  style={{
                    fontWeight: "bold",
                    position: "absolute",
                    top: "25px",
                    left: "25px",
                    background: "#f7f8f8f8",
                  }}
                >
                  <Button
                    style={{
                      background: "#FF4A52",
                      border: "none",
                      color: "white",
                    }}
                  >
                    500$
                  </Button>
                  {"        "}
                </div>
                <h2 style={{ textTransform: "uppercase", marginTop: "10px" }}>
                  Argentina, Chile and Bolivia Tour
                </h2>
                <p style={{ fontSize: "17px", width: "75%" }}>
                  Discover the delights of South America in Argentina, Chile,
                  and Bolivia on a tailor-made amazing tour. You will experience
                  touring Buenos Aires,
                </p>
                <Rate value={"4"} />
                <ClockCircleOutlined />
                <span> 5 days</span>
              </Col>
              <Col className="gutter-row" span={11}>
                <img src={imgSrc2} width="380px" height="250px" />
                <div
                  style={{
                    fontWeight: "bold",
                    position: "absolute",
                    top: "25px",
                    left: "25px",
                    background: "#f7f8f8f8",
                  }}
                >
                  <Button
                    style={{
                      background: "#FF4A52",
                      border: "none",
                      color: "white",
                    }}
                  >
                    1500$
                  </Button>
                  {"        "}
                </div>
                <h2 style={{ marginTop: "10px" }}>
                  Summer in the south America
                </h2>
                <p style={{ fontSize: "17px" }}>
                  Planning for a unique Latin America tour? Now, you will travel
                  the world in just 16 days, exploring all the attractions of
                  Argentina, Chile.
                </p>
                <Rate value={"4"} />
                <ClockCircleOutlined />
                <span> 15 days</span>
              </Col> */}
            </Row>
          </Content>
        </div>
        <Footer></Footer>
      </Layout>
    </>
  )
}
