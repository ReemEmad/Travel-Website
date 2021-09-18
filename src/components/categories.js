import React, { useEffect, useState } from "react"
import { Card, Button, Row, Col, Rate, Carousel, Layout, Spin } from "antd"
import imgSrc1 from "../pexels-alesia-kozik-6016498.jpg"
import imgSrc2 from "../pexels-alesia-kozik-6016757.jpg"
import { categoriesApi } from "../Apis/homeApis"
import { getData, filterTour } from "../Apis/toursApis"
import Navbar from "./navbar2"
import imgSrc from "../banner.png.webp"
import { ClockCircleOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"

export default function Categories() {
  const { Header, Footer, Sider, Content } = Layout
  const [categories, setcategories] = useState([])
  const [toursHead, settoursHead] = useState("Tours")
  const [tours, setTours] = useState([])
  const [loading, setloading] = useState(false)

  let getTours = async () => {
    let { data } = await getData()
    setTours(data)
    setloading(false)
    console.log(data)
  }

  const contentStyle = {
    height: "700px",
    color: "#FF4A52",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  }

  let filterTourByCategory = async (categoryId) => {
    setloading(true)
    let data = new FormData()
    data.append("categoryId", categoryId)
    let result = await filterTour(data)
    console.log("filtered", result.data)
    setTours(result.data)
    setloading(false)
    // settoursHead(result.data.name)
  }

  let getCarouselData = async () => {
    setloading(true)
    let { data } = await categoriesApi()
    setcategories(data)
    setloading(false)
    console.log(data)
  }

  useEffect(() => {
    getTours()
    getCarouselData()
  }, [])

  const { Meta } = Card
  return (
    <>
      <Navbar />
      <div style={{ overflow: "hidden " }} className="container">
        <h1
          align="center"
          style={{ fontSize: "80px", color: "#ffffff" }}
          className="centered"
        >
          Categories
        </h1>
        <img src={imgSrc} alt="" />
      </div>

      {loading ? (
        <div
          style={{ marginLeft: "50%", marginTop: "5%", paddingBottom: "5%" }}
        >
          <Spin tip="loading" size="large" />
        </div>
      ) : (
        <>
          <div
            style={{
              width: "100%",
              textAlign: "center",
              margin: "0px",
              padding: "120px",
            }}
          >
            <Row
              align="middle"
              gutter={0}
              style={{ marginLeft: "80px", marginBottom: "20px" }}
            >
              {categories.map((item) => (
                <Col className="gutter-row" span={8} key={item.id}>
                  <Card
                    onClick={() => filterTourByCategory(item.id)}
                    hoverable
                    style={{ width: 340 }}
                    cover={
                      <img
                        // src={item.images[0].path.replace(
                        //   "127.0.0.1:8000",
                        //   "ec2-18-188-18-65.us-east-2.compute.amazonaws.com/TravelsAgency/public",
                        // )}
                        src={imgSrc1}
                        width="300px"
                        height="250px"
                        alt=""
                      />
                    }
                  >
                    <Meta title={item.name} description={item.description} />
                  </Card>
                </Col>
              ))}
            </Row>
          </div>

          <Content>
            <h1 style={{ fontFamily: "Helvetica" }} align="middle">
              {toursHead}
            </h1>
            <Row align="center" gutter={8} style={{ marginTop: "2%" }}>
              {tours.map((item) => (
                <Col
                  offset="1"
                  className="gutter-row"
                  span={8}
                  key={item.id}
                  style={{ marginBottom: "20px" }}
                >
                  <Link to={`/tour/${item.id}`}>
                    <img
                      src={imgSrc1}
                      // onClick={() => console.log("sss")}
                      // src={item.images[0].path.replace(
                      //   "127.0.0.1:8000",
                      //   "ec2-18-188-18-65.us-east-2.compute.amazonaws.com/TravelsAgency/public",
                      // )}
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
                  <span>{item.duration} days</span>
                </Col>
              ))}
            </Row>
          </Content>
        </>
      )}
    </>
  )
}
