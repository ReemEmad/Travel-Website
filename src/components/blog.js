import React from "react"
import imgSrc from "../banner.png.webp"
import imgSrc1 from "../x3.webp"
import { Row, Col, Divider } from "antd"
export default function Blog() {
  const style = { background: "", padding: "8px 0", textAlign: "left" }
  const style1 = { background: "", padding: "8px 0", textAlign: "center" }
  return (
    <>
      <div style={{ overflow: "hidden " }}>
        <img src={imgSrc} />
      </div>
      <section style={{ width: "80% ", margin: "80px 20px 70px 150px" }}>
        <h1 align="middle">Blog</h1>
        <Row align="middle" gutter={16}>
          <Col className="gutter-row" span={6}>
            <img src={imgSrc1} width="300px" />
            <div style={style}>2021-2-21</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <img src={imgSrc1} width="300px" />
            <div style={style}>2021-2-21</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <img src={imgSrc1} width="300px" />
            <div style={style}>2021-2-21</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <img src={imgSrc1} width="300px" />
            <div style={style}>2021-2-21</div>
            {/* <div style={style}>col-6</div> */}
          </Col>
        </Row>
        <Row align="middle" gutter={16}>
          <Col className="gutter-row" span={6}>
            <img src={imgSrc1} width="300px" />
            <div style={style}>2021-2-21</div>
            {/* <div style={style}>col-6</div> */}
          </Col>
          <Col className="gutter-row" span={6}>
            <img src={imgSrc1} width="300px" />
            <div style={style}>2021-2-21</div>
            {/* <div style={style}>col-6</div> */}
          </Col>
          <Col className="gutter-row" span={6}>
            <img src={imgSrc1} width="300px" />
            <div style={style}>2021-2-21</div>
            {/* <div style={style}>col-6</div> */}
          </Col>
          <Col className="gutter-row" span={6}>
            <img src={imgSrc1} width="300px" />
            <div style={style}>2021-2-21</div>
            {/* <div style={style}>col-6</div> */}
          </Col>
        </Row>
      </section>
    </>
  )
}
