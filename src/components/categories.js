import React from "react"
import { Card, Button, Row, Col, Rate } from "antd"
import imgSrc1 from "../pexels-alesia-kozik-6016498.jpg"
import imgSrc2 from "../pexels-alesia-kozik-6016757.jpg"

export default function Categories() {
  const { Meta } = Card
  return (
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
      </Row>
      <Row align="middle" gutter={0} style={{ marginLeft: "80px" }}>
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
      </Row>
    </div>
  )
}
