import React from "react"
import { Divider, Layout, Tabs, Card, Button, Collapse } from "antd"
import {
  ClockCircleOutlined,
  FlagOutlined,
  CalendarOutlined,
  BankOutlined,
  DollarOutlined,
} from "@ant-design/icons"
import imgSrc from "../banner.png.webp"
import imgSrc1 from "../nile.jpg"

export default function Tour() {
  const { Header, Footer, Sider, Content } = Layout
  const { TabPane } = Tabs
  const { Panel } = Collapse

  function callback(key) {
    console.log(key)
  }
  function callback2(key) {
    console.log(key)
  }
  const Demo = () => (
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Overview" key="1">
        <p>
          Overview Itinerary Prices Client Reviews Overview Visit the land of
          the Pharaoh through this private luxury Egypt and the Nile tour. This
          luxury Cairo and Nile cruise tour will take you down the entire length
          of Egypt in only 8 days. In Cairo, you will get to see the Pyramids of
          Giza, Old Cairo and Saladin’s Citadel and then you will travel south
          through the Nile river in a Nile cruise from Luxor to Aswan where you
          will spent 4 nights on the cruise enjoying the ancient sights along
          the way, such as Karnak Temple, Valley of Kings, Temple of Queen
          Hatshepsut, and Temple of Philae.
        </p>
        <Card title="Included" hoverable style={{ width: 300 }}>
          <p>Meet and greet service by our representatives at airports </p>
          <p>Assistance of our guest relations during your stay</p>
          <p>Entry Visa for Egypt provide upon arrival at Cairo Airport</p>
        </Card>
        <Card title="Excluded" hoverable style={{ width: 300 }}>
          <p>International Airfare </p>
          <p>Personal spending </p>
          <p>Any optional tours</p>
        </Card>
        <br></br>
      </TabPane>
      <TabPane tab="Itinerary" key="2">
        <Collapse defaultActiveKey={["1"]} onChange={callback2}>
          <Panel
            header="Day 1: Arrival Cairo - Welcome to land of the Pharaoh’s"
            key="1"
          >
            <p>
              Welcome to Cairo, Egypt (Around The Clock). Your tour manager will
              meet assist you at Cairo International Airport and provide entry
              visa for Egypt and then he will escort you to your hotel by
              exclusive air-conditioned deluxe vehicle. At hotel, the tour
              manager will assist with a smooth check-in and review your holiday
              itinerary with you to establish and confirm pick-up times for each
              tour. Overnight in Cairo.
            </p>
          </Panel>
          <Panel header="Day 2: Pyramids and Cairo Sightseeing" key="2">
            <p>
              Breakfast at your hotel at Cairo at First Residence and then met
              by your personal guide who will accompany you to Giza Plateau to
              visit one of the seven wonders of the ancient world, the Great
              Pyramids of Cheops, Chefren and Mykerinus, famous Sphinx and
              Valley temple facing the great statue. Lunch will be served at a
              good quality local restaurant. Then transfer to enjoy the Egyptian
              Museum. Continue driving to Islamic Cairo, where you will be able
              to explore Khan El Khalili, Cairo’s old bazaar. Back to your
              hotel. Meals: Breakfast, Lunch
            </p>
          </Panel>
          <Panel header="Day 3: Fly Cairo to Luxor - Nile Cruise Tour" key="3">
            <p>
              Check out from your hotel in Cairo at in the morning then transfer
              to Cairo Airport for a flight to Luxor where you will be met and
              assisted, then taken by an air-conditioned vehicle to board your
              5-star luxury Nile cruise for check-in. After lunch on board, you
              will enjoy a visit to the impressive Karnak Temple and Luxor
              Temple. Dinner and overnight on board the Nile Cruise. Meals:
              Breakfast, Lunch, Dinner
            </p>
          </Panel>
        </Collapse>
      </TabPane>
      <TabPane tab="Prices" key="3">
        <h3>Prices</h3>
        <h3
          style={{
            marginBottom: "45px",
          }}
        >
          Diamond Accommodation:
        </h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            // alignItems: "center",
            paddingBottom: "30px",
          }}
        >
          <BankOutlined style={{ fontSize: "30px" }} />
          <Divider type="vertical" orientation="right" />
          <div>
            <img src={imgSrc1} />
            <p>Le Riad Hotel de Cairo</p>
          </div>
          <div>
            <img src={imgSrc1} />
            <p>Mayfair Nile Cruise</p>
          </div>
          <div>
            <img src={imgSrc1} />
            <p>Sonesta St George Nile Cruise</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <DollarOutlined style={{ fontSize: "30px" }} />
          <Divider type="vertical" orientation="right" />
          <div>
            <h3>MAY-SEPT</h3>
            <p>US$ 1955 Per Person in Triple Room</p>
            <p>US$ 2015 Per Person in Double Room</p>
            <p>US$ 3045 One Person Traveling Alone</p>
          </div>
          <div>
            <h3>OCT-APRIL</h3>
            <p>US$ 2275 Per Person in Triple Room</p>
            <p>US$ 2335 Per Person in Double Room</p>
            <p>US$ 3485 One Person Traveling Alone</p>
          </div>
        </div>
      </TabPane>
      <TabPane tab="Client Reviews" key="4">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  )
  return (
    <>
      {/* <Layout>
        <Header> */}
      <div style={{ overflow: "hidden " }}>
        <img src={imgSrc} />
      </div>
      {/* </Header>
        <Content> */}
      <div style={{ padding: "70px 70px 40px 100px" }}>
        <h1>Cairo and Nile Adventure</h1>
        <h3>from US$3299</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "500px",
          }}
        >
          <div>
            <ClockCircleOutlined style={{ fontSize: "30px" }} />
            <p>Duration</p>
            <p>11 Days</p>
          </div>
          <Divider type="vertical" orientation="right" />
          <div>
            <FlagOutlined style={{ fontSize: "30px" }} />
            <p>Type</p>
            <p>Private tour</p>
          </div>
          <Divider type="vertical" orientation="right" />
          <div>
            <CalendarOutlined style={{ fontSize: "30px" }} />
            <p>Run</p>
            <p>Friday, Saturday, Sunday</p>
          </div>
        </div>
      </div>
      <Demo />
      <Button
        style={{ margin: "20px 0 50px 95px" }}
        type="primary"
        shape="round"
      >
        Enquire Now
      </Button>
      {/* </Content>
      </Layout> */}
    </>
  )
}
