import React, { useEffect, useState } from "react"
import { Button, Row, Col, Rate, Layout, Spin } from "antd"
import { getSingleBlogApi } from "../Apis/blogApis"
import imgSrc from "../x3.webp"
import AppFooter from "./AppFooter"
import { Link } from "react-router-dom"
import Navbar from "./navbar2"
import imgSrc1 from "../banner.png.webp"

export default function SingleBlog(props) {
  const { Content } = Layout

  const [data, setdata] = useState([])
  const [loading, setloading] = useState(false)

  let getData = async () => {
    setloading(true)
    let { data } = await getSingleBlogApi(props.match.params.id)
    setdata(data)
    setloading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <Navbar />
      <div style={{ overflow: "hidden " }} className="container">
        <h1
          align="center"
          style={{ fontSize: "80px", color: "#ffffff" }}
          className="centered"
        >
          Blog
        </h1>
        <img src={imgSrc1} alt="" />
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
            <Row align="center" gutter={10}>
              {data.map((blog) => (
                <Col className="gutter-row" span={12} key={blog.id}>
                  <div align="center">
                    <img src={imgSrc} alt="" />

                    <div
                      style={{
                        fontWeight: "bold",
                        display: "flex",
                        justifyItems: "space-between",
                        alignItems: "center",
                      }}
                    >
                      {"        "}
                      {/* <div> Nourhan Magdy</div> */}
                      {/* <div style={style}>21 JUL</div> */}
                    </div>
                    <h1 style={{ marginTop: "10px" }}>{blog.title}</h1>
                    <p style={{ fontSize: "17px" }}>{blog.body}</p>
                    {/* <Button style={{ marginBottom: "30px" }}>Read More</Button> */}
                  </div>
                </Col>
              ))}
            </Row>
          </Content>
          <AppFooter />
        </>
      )}
      <AppFooter />
    </div>
  )
}
