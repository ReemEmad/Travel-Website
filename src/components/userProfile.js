import React, { useState, useEffect } from "react"
import { Tabs,Layout,Rate,Button,Row,Col } from "antd"
import Navbar from "./navbar2"
import { getReservedTours } from "../Apis/userApis"

import imgSrc1 from "../pexels-alesia-kozik-6016498.jpg"

import { Modal} from 'antd';

const { TabPane } = Tabs
const { Header, Footer, Sider, Content } = Layout
function UserProfile() {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [reserved, setreserved] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setmodalData] = useState({})

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setmodalData({})
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setmodalData({})
  };

  const handleGetModalData = (item) => {
      const found = reserved.find(i=>i.tour.id===item.tour.id)
      setmodalData(found)    
  }

  useEffect(() => {
    if(Object.keys(modalData).length!==0)setIsModalVisible(true)
  }, [modalData])

  const getReserved = async () => {
    let {data} = await getReservedTours(localStorage.getItem("token"))
    console.log(data)
    console.log(data.[`reserved tours`])
    setreserved(data.[`reserved tours`])
  }

  
  useEffect(() => {
    setname(localStorage.getItem("name"))
    setemail(localStorage.getItem("email"))
    getReserved()
  
  }, [])

  return (
    <>
      <Navbar />
      <div className="userprofilecontainer">
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
              <Row align="middle" gutter={8}>
                {reserved.length > 0 ? reserved?.map((item) => (
                  <Col
                    className="gutter-row"
                    xs={24}
                    sm={24}
                    md={15}
                    lg={15}
                    xl={15}
                    xxl={16}
                    span={12}
                    // width={90}
                    key={item.tour.id}
                    style={{marginLeft:"30px"}}
                  >
                    <div>
                      <img
                        src={imgSrc1}
                       className="img_card"
                        alt=""
                      />
                    <h2
                      style={{ textTransform: "uppercase", marginTop: "10px" }}
                    >
                      {item.tour.name}
                    </h2>
                    <p style={{ fontSize: "16px" }} className="p_user">
                      Discover the delights of South America in Argentina,
                      Chile, and Bolivia on a tailor-made amazing tour. You will
                      experience touring Buenos Aires,
                    </p>
                    </div>
                    <Button  onClick={()=>handleGetModalData(item)}>Show Details</Button>
                    <br></br>
                    <br></br>
                  </Col>
                )):<p className="user_trips">No reserved trips yet.</p>}
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
      <Modal title="Tour Details" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p><strong>Name:</strong>  {modalData.name}</p>
        <p><strong>Email:</strong> {modalData.email}</p>
        <p><strong>Phone Number:</strong> {modalData.mobile}</p>
        <p><strong>Age: </strong>{modalData.age}</p>
        <p><strong>Nationality:</strong> {modalData.nationality}</p>
        <p><strong>Number of people:</strong> {modalData.number_of_adults}</p>
        <p><strong>Number of single rooms:</strong> {modalData.number_of_single}</p>
        <p><strong>Number of single double rooms:</strong> {modalData.number_of_double}</p>
        <p><strong>Number of single triple rooms:</strong> {modalData.number_of_triple}</p>
        <p><strong>Payment method:</strong> {modalData.payment_method}</p>
        <p><strong>Total cost:</strong> {modalData.total}</p>
        <p><strong>Aditional notes:</strong> {modalData.note==="undefined"? "No notes" : modalData.note}</p>
      </Modal>
    </>
  )
}

export default UserProfile
