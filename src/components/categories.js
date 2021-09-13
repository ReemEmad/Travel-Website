import React, { useEffect, useState } from "react"
import { Card, Button, Row, Col, Rate, Carousel } from "antd"
import imgSrc1 from "../pexels-alesia-kozik-6016498.jpg"
import imgSrc2 from "../pexels-alesia-kozik-6016757.jpg"
import { categoriesApi } from "../Apis/homeApis"
import Navbar from "./navbar2"

export default function Categories() {
  const [categories, setcategories] = useState([])

  const contentStyle = {
    height: "700px",
    color: "#FF4A52",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  }

  let getCarouselData = async () => {
    let { data } = await categoriesApi()
    setcategories(data)
    console.log(data)
  }

  useEffect(() => {
    getCarouselData()
  }, [])

  const { Meta } = Card
  return (
    <>
      <Navbar />
      <Carousel autoplay>
        {/* {//categories} */}
        {categories.map((item) => (
          <div className="container">
            <p className="centered">{item.name}</p>
            {/* <Button size="large" className="centeredBtn" type="primary">
              Explore Now
            </Button> */}
            <img
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
      <div
        style={{
          width: "100%",
          textAlign: "center",
          margin: "0px",
          padding: "120px",
        }}
      >
        <h1>Categories</h1>
        <Row
          align="middle"
          gutter={0}
          style={{ marginLeft: "80px", marginBottom: "50px" }}
        >
          {categories.map((item) => (
            <Col className="gutter-row" span={8} key={item.id}>
              <Card
                hoverable
                style={{ width: 340 }}
                cover={
                  <img
                    src={item.images[0].path.replace(
                      "127.0.0.1:8000",
                      "ec2-18-188-18-65.us-east-2.compute.amazonaws.com/TravelsAgency/public",
                    )}
                    width="300px"
                    height="250px"
                    alt=""
                  />
                }
              >
                <Meta
                  title={item.name}
                  description="With Egypt tour packages, have the chance to experience Egypt's history and its attractions. Egypt may be most famous for Pyramids, but there are more to see. Book a tour and explore ancient Egyptian civilizations."
                />
              </Card>
            </Col>
          ))}
          {/* <Col className="gutter-row" span={8}>
            <Card
              hoverable
              style={{ width: 340 }}
              cover={<img src={imgSrc2} width="300px" height="250px" />}
            >
              <Meta
                title="Small Group Tours"
                description="Travel in small group and let our travel experts give you the best memorable Egyptian experience with a range of trips and Nile River cruises. Check out our Egypt small group tours and experience the best of Egypt."
              />{" "}
            </Card>
          </Col>
          <Col className="gutter-row" span={8}>
            <Card
              hoverable
              style={{ width: 340 }}
              cover={<img src={imgSrc2} width="300px" height="250px" />}
            >
              <Meta
                title="Small Group Tours"
                description="Travel in small group and let our travel experts give you the best memorable Egyptian experience with a range of trips and Nile River cruises. Check out our Egypt small group tours and experience the best of Egypt."
              />{" "}
            </Card>
          </Col> */}
        </Row>
        {/* <Row align="middle" gutter={0} style={{ marginLeft: "80px" }}>
          <Col className="gutter-row" span={8}>
            <Card
              hoverable
              style={{ width: 340 }}
              cover={<img src={imgSrc1} width="300px" height="250px" />}
            >
              <Meta
                title="Classic Egypt Tours"
                description="With Egypt tour packages, have the chance to experience Egypt's history and its attractions. Egypt may be most famous for Pyramids, but there are more to see. Book a tour and explore ancient Egyptian civilizations."
              />
            </Card>
          </Col>
          <Col className="gutter-row" span={8}>
            <Card
              hoverable
              style={{ width: 340 }}
              cover={<img src={imgSrc2} width="300px" height="250px" />}
            >
              <Meta
                title="Small Group Tours"
                description="Travel in small group and let our travel experts give you the best memorable Egyptian experience with a range of trips and Nile River cruises. Check out our Egypt small group tours and experience the best of Egypt."
              />{" "}
            </Card>
          </Col>
          <Col className="gutter-row" span={8}>
            <Card
              hoverable
              style={{ width: 340 }}
              cover={<img src={imgSrc2} width="300px" height="250px" />}
            >
              <Meta
                title="Small Group Tours"
                description="Travel in small group and let our travel experts give you the best memorable Egyptian experience with a range of trips and Nile River cruises. Check out our Egypt small group tours and experience the best of Egypt."
              />{" "}
            </Card>
          </Col>
        </Row> */}
      </div>
    </>
  )
}
