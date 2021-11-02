import React, { useEffect, useState } from "react"
import {
  Layout,
  Select,
  Slider,
  Button,
  Row,
  Col,
  Rate,
  Space,
  DatePicker,
  Typography,
  Spin,
  message,
} from "antd"
import imgSrc from "../banner.png.webp"
import imgSrc1 from "../pexels-alesia-kozik-6016498.jpg"
import imgSrc2 from "../pexels-alesia-kozik-6016757.jpg"
import { ClockCircleOutlined } from "@ant-design/icons"
import { getData, filterTour } from "../Apis/toursApis"
import { categoriesApi } from "../Apis/homeApis"
import Navbar from "./navbar2"
import { Link } from "react-router-dom"

export default function AllTours() {
  const { Text } = Typography
  const [tours, setTours] = useState([])
  const [loading, setloading] = useState(false)
  const [categories, setCategories] = useState([])
  const [categoryId, setcategoryId] = useState("")
  const [date, setDate] = useState("")
  const [startPrice, setstartPrice] = useState("")
  const [endPrice, setendPrice] = useState("")

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
    setloading(true)
    let { data } = await getData()
    setTours(data)
    setloading(false)
    console.log(data)
  }

  let getCarouselData = async () => {
    let { data } = await categoriesApi()
    setCategories(data)
  }

  function onChange(dateString) {
    setDate(dateString)
    console.log(dateString)
  }

  function changeSlider(val) {
    setstartPrice(val[0])
    setendPrice(val[1])
  }

  useEffect(() => {
    getTours()
    getCarouselData()
  }, [])

  function handleChange(value) {
    setcategoryId(value)
    console.log(`selected ${value}`)
  }

  let filterResult = async () => {
    if (categoryId === "" || date === "") {
      message.error("Please choose your filter data")
      return
    }
    setloading(true)
    let data = new FormData()
    data.append("categoryId", categoryId)
    data.append("date", date)
    data.append("startPrice", startPrice)
    data.append("endPrice", endPrice)
    let result = await filterTour(data)
    setloading(false)
    console.log(result)
    setTours(result.data)
  }

  return (
    <>
      <Navbar />
      {/* <div className="carousel">
        <Carousel autoplay>
      
          {categories.map((item) => (
            <div className="container">
              <p className="centered">{item.name}</p>

              <img
                src={item.images[0].path.replace(
                  "127.0.0.1:8000",
                  "ec2-18-188-18-65.us-east-2.compute.amazonaws.com/TravelsAgency/public",
                )}
                alt=""
              />
            </div>
          ))}
        </Carousel>
      </div> */}
      <div style={{ overflow: "hidden " }} className="container">
        <h1
          align="center"
          style={{ fontSize: "80px", color: "#ffffff" }}
          className="centered"
        >
          Tours
        </h1>
        <img src={imgSrc} alt="" />
      </div>

      <Layout>
        {/* <Header
          style={{
            background: "none",
            marginTop: "100px",
            marginBottom: "50px",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "37px" }}>Tours</h1>
        </Header> */}
        {loading ? (
          <div
            style={{ marginTop: "5%", marginLeft: "50%", paddingBottom: "5%" }}
          >
            <Spin tip="loading" size="large" />
          </div>
        ) : (
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
                width: "60%",
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
                {categories.map((item) => (
                  <Option value={item.id}>{item.name}</Option>
                ))}
              </Select>

              <Space
                direction="horizontal"
                style={{
                  // width: "100%",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                <Text>Choose a date</Text>
                <DatePicker onChange={onChange} />
              </Space>
              <Slider
                range
                marks={marks}
                defaultValue={[20, 75]}
                step="10"
                onChange={changeSlider}
              />
              <Button
                type="primary"
                style={{
                  marginTop: "20px",
                  width: "100%",
                  marginBottom: "6%",
                }}
                onClick={filterResult}
              >
                Confirm
              </Button>
            </div>
            <Content style={{ padding: "50px", margin: "0px 50px" }}>
              <Row align="middle" gutter={8}>
                {tours.map((item) => (
                  <Col
                    className="gutter-row"
                    span={11}
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
                    <h2
                      style={{ textTransform: "uppercase", marginTop: "10px" }}
                    >
                      {item.name}
                    </h2>
                    <p style={{ fontSize: "17px", width: "75%" }}>
                      Discover the delights of South America in Argentina,
                      Chile, and Bolivia on a tailor-made amazing tour. You will
                      experience touring Buenos Aires,
                    </p>
                    <Rate value={"4"} />
                    <ClockCircleOutlined />
                    <span> {"         " + item.duration} days</span>
                  </Col>
                ))}
              </Row>
            </Content>
          </div>
        )}
      </Layout>

      <div className="footer">
        <div>
          <img src="xfooter.webp" alt=""></img>
          <p>
            5th flora, 700/D kings road, green lane New York-1782 +10 367 826
            2567 contact@carpenter.com
          </p>
        </div>
        <div>
          <h2>Company</h2>
          <p>Pricing</p>
          <p>About</p>
          <p>Gallery</p>
          <p>Contact</p>
        </div>
        <p style={{ alignSelf: "start" }}>
          {" "}
          Copyright ©2021 All rights reserved
        </p>
      </div>
    </>
  )
}
