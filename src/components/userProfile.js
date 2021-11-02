import React, { useState, useEffect } from "react"
import { Tabs,Layout,Rate,Button,Row,Col } from "antd"
import Navbar from "./navbar2"
import { getReservedTours } from "../Apis/userApis"
import Item from "antd/lib/list/Item"
import imgSrc1 from "../pexels-alesia-kozik-6016498.jpg"
import { Link } from "react-router-dom"
import { ClockCircleOutlined } from "@ant-design/icons"

const { TabPane } = Tabs
const { Header, Footer, Sider, Content } = Layout
function UserProfile() {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [reserved, setreserved] = useState([])

  const getReserved = async () => {
    let {data} = await getReservedTours(localStorage.getItem("token"))
    console.log(data.[`reserved tours`])
    setreserved(data.[`reserved tours`])
  }

  
  useEffect(() => {

    setname(localStorage.getItem("name"))
    setemail(localStorage.getItem("email"))
    getReserved()
  }, [name,email])

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "140px" }}>
        <Tabs defaultActiveKey="1" tabPosition="left"  height="800">
          <TabPane tab={"User Information"} key={1} className="tab-style">
            <h3>Name: </h3>
            <span>{name}</span>
            <br />
            <br />
            <h3>Email: </h3>
            <span>{email}</span>
          </TabPane>
          <TabPane tab={"Reserved Trips"} key={2} className="tab-style">
          {/* <Content> */}
              <Row align="middle" gutter={8} style={{width:"200%"}}>
                {reserved?.map((item) => (
                  <Col
                    className="gutter-row"
                    span={10}
                    // width={90}
                    key={item.tour.id}
                    style={{marginLeft:"30px"}}
                  >
                    <div >
                    <Link to={`/tour/${item.tour.id}`}>
                      <img
                        src={imgSrc1}
                        width="300px"
                        height="200px"
                        alt=""
                      />
                    </Link>

                    <h2
                      style={{ textTransform: "uppercase", marginTop: "10px" }}
                    >
                      {item.tour.name}
                    </h2>
                    <p style={{ fontSize: "17px", width: "75%" }}>
                      Discover the delights of South America in Argentina,
                      Chile, and Bolivia on a tailor-made amazing tour. You will
                      experience touring Buenos Aires,
                    </p>
                    {/* <ClockCircleOutlined />
                    <span> {"         " + item.tour.duration} days</span> */}
                    </div>
                  </Col>
                ))}
              </Row>
            {/* </Content> */}
          </TabPane>
        </Tabs>
      </div>
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

export default UserProfile
