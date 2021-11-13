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
import AppFooter from "./AppFooter"

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

      <div className="container">
        <h1 align="center" className="centered">
          Categories
        </h1>
        <img src={imgSrc} alt="" />
      </div>

      {loading ? (
        <div className="category_grid">
          <Spin tip="loading" size="large" />
        </div>
      ) : (
        <>
          <div className="card_container">
            <Row
              align="middle"
              gutter={0}
              style={{ marginLeft: "80px", marginBottom: "20px" }}
            >
              {categories.map((item) => (
                <>
                  <Col className="gutter-row" span={6} key={item.id}>
                    <Link to={`/category/${item.id}`}>
                      <Card
                        // onClick={() => window.(`/category/${item.id}`)}
                        // onClick={() => filterTourByCategory(item.id)}
                        className="card_cat"
                        hoverable
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
                        <Meta
                          title={item.name}
                          description={item.description}
                        />
                      </Card>
                    </Link>
                  </Col>
                </>
              ))}
            </Row>
          </div>
        </>
      )}

      <AppFooter />
    </>
  )
}
