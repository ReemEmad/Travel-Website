import React from "react"
import imgSrc from "../banner.png.webp"
import imgSrc1 from "../x3.webp"
import { Row, Col, Divider, Button } from "antd"
import { UserOutlined } from "@ant-design/icons"
export default function Blog() {
  const style = { background: "", paddingLeft: "280px", textAlign: "right" }
  const style1 = { background: "", padding: "8px 0", textAlign: "center" }
  return (
    <>
      <div style={{ overflow: "hidden " }}>
        <img src={imgSrc} />
      </div>
      <section style={{ width: "60% ", margin: "80px 20px 70px 200px" }}>
        <h1 align="left" style={{ fontSize: "30px" }}>
          Travelo Blog
        </h1>
        <Row align="middle" gutter={10}>
          <Col className="gutter-row" span={12}>
            <img src={imgSrc1} width="450px" />
            <div
              style={{
                fontWeight: "bold",
                display: "flex",
                justifyItems: "space-between",
                alignItems: "center",
              }}
            >
              <UserOutlined />
              {"        "}
              <div> Nourhan Magdy</div>
              <div style={style}>21 JUL</div>
            </div>
            <h1 style={{ textTransform: "uppercase", marginTop: "10px" }}>
              Best Africa Wildlife Safari Destinations
            </h1>
            <p style={{ fontSize: "17px" }}>
              While the beaches won’t necessarily be less crowded in warm, sunny
              weather, summer may be a lovely time of the year to experience the
              coast in Egypt.
            </p>
            <Button style={{ marginBottom: "30px" }}>Read More</Button>
          </Col>
          <Col className="gutter-row" span={12}>
            <img src={imgSrc1} width="450px" />
            <div
              style={{
                fontWeight: "bold",
                display: "flex",
                justifyItems: "space-between",
                alignItems: "center",
              }}
            >
              <UserOutlined />
              {"        "}
              <div> Nourhan Magdy</div>
              <div style={style}>21 JUL</div>
            </div>
            <h1 style={{ textTransform: "uppercase", marginTop: "10px" }}>
              10 Best Boutique Hotels in the World
            </h1>
            <p style={{ fontSize: "17px" }}>
              While the beaches won’t necessarily be less crowded in warm, sunny
              weather, summer may be a lovely time of the year to experience the
              coast in Egypt.
            </p>
            <Button style={{ marginBottom: "30px" }}>Read More</Button>
          </Col>
        </Row>

        <Row align="middle" gutter={16}>
          <Col className="gutter-row" span={12}>
            <img src={imgSrc1} width="450px" />
            <div
              style={{
                fontWeight: "bold",
                display: "flex",
                justifyItems: "space-between",
                alignItems: "center",
              }}
            >
              <UserOutlined />
              {"        "}
              <div> Nourhan Magdy</div>
              <div style={style}>21 JUL</div>
            </div>
            <h1 style={{ textTransform: "uppercase", marginTop: "10px" }}>
              Your ultimate guide in how to spend the perfect summer in
            </h1>
            <p style={{ fontSize: "17px" }}>
              While the beaches won’t necessarily be less crowded in warm, sunny
              weather, summer may be a lovely time of the year to experience the
              coast in Egypt.
            </p>
            <Button style={{ marginBottom: "30px" }}>Read More</Button>
          </Col>
          <Col className="gutter-row" span={12}>
            <img src={imgSrc1} width="450px" />
            <div
              style={{
                fontWeight: "bold",
                display: "flex",
                justifyItems: "space-between",
                alignItems: "center",
              }}
            >
              <UserOutlined />
              {"        "}
              <div> Nourhan Magdy</div>
              <div style={style}>21 JUL</div>
            </div>
            <h1 style={{ textTransform: "uppercase", marginTop: "10px" }}>
              7 Best Cities to Explore on Bike
            </h1>
            <p style={{ fontSize: "17px" }}>
              While the beaches won’t necessarily be less crowded in warm, sunny
              weather, summer may be a lovely time of the year to experience the
              coast in Egypt.
            </p>
            <Button style={{ marginBottom: "30px" }}>Read More</Button>
          </Col>
        </Row>
        <Row>
          <Col className="gutter-row" span={12}>
            <img src={imgSrc1} width="450px" />
            <div
              style={{
                fontWeight: "bold",
                display: "flex",
                justifyItems: "space-between",
                alignItems: "center",
              }}
            >
              <UserOutlined />
              {"        "}
              <div> Nourhan Magdy</div>
              <div style={style}>21 JUL</div>
            </div>
            <h1 style={{ textTransform: "uppercase", marginTop: "10px" }}>
              Top Middle East countries to visit in 2021
            </h1>
            <p style={{ fontSize: "17px" }}>
              While the beaches won’t necessarily be less crowded in warm, sunny
              weather, summer may be a lovely time of the year to experience the
              coast in Egypt.
            </p>
            <Button style={{ marginBottom: "30px" }}>Read More</Button>
          </Col>
          <Col className="gutter-row" span={12}>
            <img src={imgSrc1} width="450px" />
            <div
              style={{
                fontWeight: "bold",
                display: "flex",
                justifyItems: "space-between",
                alignItems: "center",
              }}
            >
              <UserOutlined />
              {"        "}
              <div> Nourhan Magdy</div>
              <div style={style}>21 JUL</div>
            </div>
            <h1 style={{ textTransform: "uppercase", marginTop: "10px" }}>
              7 Best Cheap Tropical Vacation Spots Around the World
            </h1>
            <p style={{ fontSize: "17px" }}>
              While the beaches won’t necessarily be less crowded in warm, sunny
              weather, summer may be a lovely time of the year to experience the
              coast in Egypt.
            </p>
            <Button align="right" style={{ marginBottom: "30px" }}>
              Read More
            </Button>
          </Col>
        </Row>
      </section>
    </>
  )
}
