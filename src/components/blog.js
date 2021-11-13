import React, { useEffect, useState } from "react"
import imgSrc from "../banner.png.webp"
import imgSrc1 from "../x3.webp"
import { Row, Col, Divider, Button } from "antd"
import { UserOutlined } from "@ant-design/icons"
import { getBlogsApi } from "../Apis/blogApis"
import { Link } from "react-router-dom"
import AppFooter from "./AppFooter"

export default function Blog() {
  const [data, setdata] = useState([])

  let getBlogs = async () => {
    let { data } = await getBlogsApi()
    console.log(data)
    setdata(data)
  }

  useEffect(() => {
    getBlogs()
  }, [])

  const style = { background: "", paddingLeft: "280px", textAlign: "right" }
  // const style1 = { background: "", padding: "8px 0", textAlign: "center" }

  return (
    <>
      <div className="container">
        <h1
          align="center"
          style={{ fontSize: "80px", color: "#ffffff" }}
          className="centered"
        >
          Travelo Blog
        </h1>
        <img src={imgSrc} alt="" />
      </div>
      <section className="content_blog">
        <Row align="middle" gutter={10}>
          {data.map((blog) => (
            <Col xs={24} className="gutter-row" span={12} key={blog.id}>
              <>
                <Link to={`/blog/${blog.id}`}>
                  <img src={imgSrc1} width="450px" alt="" />
                </Link>
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
                <h1 style={{ textTransform: "uppercase", marginTop: "10px" }}>
                  {blog.title}
                </h1>
                <p style={{ fontSize: "17px" }}>{blog.body}</p>
                {/* <Button style={{ marginBottom: "30px" }}>Read More</Button> */}
              </>
            </Col>
          ))}
        </Row>
      </section>
      <AppFooter />
    </>
  )
}
