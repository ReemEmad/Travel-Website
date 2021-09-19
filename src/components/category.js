import React, { useEffect, useState } from "react"
import { Card, Button, Row, Col, Rate, Carousel, Layout, Spin } from "antd"
import imgSrc1 from "../pexels-alesia-kozik-6016498.jpg"
import Navbar from "./navbar2"
import imgSrc from "../banner.png.webp"
import { ClockCircleOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
import { getSingleCategoryApi } from "../Apis/categoryApis"

export default function Category(props) {
  const { Header, Footer, Sider, Content } = Layout
  const [loading, setloading] = useState(false)
  const [toursHead, settoursHead] = useState("")
  const [data, setdata] = useState([])

  let getData = async () => {
    setloading(true)
    let { data } = await getSingleCategoryApi(props.match.params.id)
    setdata(data.tours)
    settoursHead(data.category)
    setloading(false)
    console.log(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Navbar />
      <div style={{ overflow: "hidden " }} className="container">
        <h1
          align="center"
          style={{ fontSize: "80px", color: "#ffffff" }}
          className="centered"
        >
          {toursHead} Tours
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
          <Content>
            {/* <h1 style={{ fontFamily: "Helvetica" }} align="middle">
              {toursHead} Tours
            </h1> */}
            <Row align="center" gutter={8} style={{ marginTop: "2%" }}>
              {data.map((item) => (
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
