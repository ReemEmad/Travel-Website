import React, { useEffect, useState, useCallback } from "react"
import {
  Divider,
  Layout,
  Tabs,
  Card,
  Button,
  Collapse,
  Rate,
  Form,
  Input,
  Checkbox,
  Radio,
  Select,
  InputNumber,
  message,
  DatePicker,
  Modal,
} from "antd"
import {
  ClockCircleOutlined,
  FlagOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
  CalendarOutlined,
  BankOutlined,
  DollarOutlined,
  CloseCircleTwoTone,
  CheckCircleTwoTone,
} from "@ant-design/icons"

import imgSrc from "../banner.png.webp"
import imgSrc1 from "../nile.jpg"
import { getSingleTour, reserveTour, getPayment } from "../Apis/toursApis"
import AppFooter from "./AppFooter"
import { set } from "mongoose"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"

export default function Tour(props) {
  const { RangePicker } = DatePicker
  const history = useHistory()
  const [loading, setloading] = useState(false)
  const [form] = Form.useForm()
  const [requiredMark, setRequiredMarkType] = useState("optional")
  const [paymentMethods, setpaymentMethods] = useState([])
  const [tourr, settour] = useState(undefined)
  const [tourDuration, settourDuration] = useState(0)
  const [arrdays, setarrdays] = useState([])
  const [numberOfAdults, setnumberOfAdults] = useState(1)
  const [numberOfSingle, setnumberOfSingle] = useState(1)
  const [numberOfDouble, setnumberOfDouble] = useState(1)
  const [numberOfTriple, setnumberOfTriple] = useState(1)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [invoiceId, setInvoiceId] = useState()
  const [invoiceURL, setInvoiceURL] = useState()
  // const [numberOfChildren, setnumberOfChildren] = useState(1)
  // const [startData, setstartDate] = useState()
  // const [endData, setendDate] = useState()

  const [shedule, setshedule] = useState(Date)
  const { Header, Sider, Content } = Layout
  const { TabPane } = Tabs
  const { Panel } = Collapse

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  }

  let getPaymentMethod = async () => {
    let { data } = await getPayment()
    console.log(data.paymentMethods)
    setpaymentMethods(data.paymentMethods)
  }

  const onFinish = async (values) => {
    console.log(values)
    let data = new FormData()
    let { name, age, email, nationality, mobile, note, payment_method_id } =
      values

    data.append("name", name)
    data.append("age", age)
    data.append("email", email)
    data.append("nationality", nationality)
    data.append("mobile", mobile)
    data.append("number_of_people", numberOfAdults)
    data.append("note", note)
    data.append("payment_method_id", payment_method_id)
    data.append("tour_id", props.match.params.id)
    data.append("number_of_single", numberOfSingle)
    data.append("number_of_double", numberOfDouble)
    data.append("number_of_triple", numberOfTriple)
    console.log(data)
    let authToken = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : null
    try {
      let result = await reserveTour(data, authToken)
      console.log(result)
      message.success("Your data was sent sucessfully", [2.5])
      form.resetFields()
      setIsModalVisible(true)
      setInvoiceId(result.data.InvoiceId)
      setInvoiceURL(result.data.InvoiceURL)
    } catch (error) {
      if (error.response.status === 401) {
        message.error("please register first")
        history.push("/register")
      }
    }
  }

  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue)
  }
  // const buttonItemLayout =
  //   formLayout === "horizontal"
  //     ? {
  //         wrapperCol: {
  //           span: 14,
  //           offset: 4,
  //         },
  //       }
  //     : null
  // function callback(key) {
  //   console.log(key)
  // }

  function callback2(key) {
    console.log(key)
  }
  var id = props.match.params.id

  const getData = useCallback(async () => {
    setloading(true)
    let { data } = await getSingleTour(id)
    settour(data.tour[0])
    settourDuration(data.tour[0].duration)
    setshedule(data.tour[0].schedule)
    setloading(false)
    // console.log(data.tour[0])
  }, [id])

  useEffect(() => {
    getData()
    getPaymentMethod()
  }, [getData])

  const getRun = useCallback(() => {
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ]

    var arr = []
    for (let i = 0; i < tourDuration; i++) {
      arr.push(days[new Date(shedule).getDay() + i])
    }
    setarrdays(arr)
  }, [tourDuration, shedule])

  useEffect(() => {
    if (shedule && tourDuration) getRun()
  }, [shedule, tourDuration, getRun])

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      <Modal
        title="Payment"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Invoice ID: {invoiceId}</p>

        <a target="_blank" href={invoiceURL} rel="noreferrer">
          <h3>Click through this link to proceed to payment</h3>
        </a>
      </Modal>
      <div style={{ width: "100%" }}>
        <Layout>
          <Header>
            <div>
              <img src={imgSrc} alt="" />
            </div>
          </Header>
          <Layout>
            {loading ? (
              <div>loading...</div>
            ) : (
              <Content>
                <div style={{ padding: "50px 3px 40px 100px" }}>
                  <h1
                    style={{
                      textAlign: "left",
                      fontStyle: "bold",
                      fontSize: "25px",
                    }}
                  >
                    {tourr?.name}
                  </h1>
                  <h2
                    style={{
                      fontSize: "30px",
                      paddingBottom: "30px",
                      color: "#1EC6B6",
                    }}
                  >
                    From LE{tourr?.price}
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      gap: 30,
                      alignItems: "start",
                      width: "500px",
                    }}
                  >
                    <div>
                      <ClockCircleOutlined
                        style={{ fontSize: "30px", paddingBottom: "10px" }}
                      />
                      <p style={{ fontSize: "17px", fontWeight: "bold" }}>
                        Duration
                      </p>
                      <p>{tourr?.duration} Days</p>
                    </div>
                    {/* <Divider type="vertical" orientation="right" /> */}
                    {/* <div>
                    <FlagOutlined
                      style={{ fontSize: "30px", paddingBottom: "10px" }}
                    />
                    <p style={{ fontSize: "17px", fontWeight: "bold" }}>Type</p>
                    <p>Private tour</p>
                  </div> */}
                    <Divider type="vertical" orientation="right" />
                    <div>
                      <CalendarOutlined
                        style={{ fontSize: "30px", paddingBottom: "10px" }}
                      />
                      <p style={{ fontSize: "17px", fontWeight: "bold" }}>
                        Run
                      </p>
                      {arrdays.map((item) => (
                        <span key={item}>{item}, </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Tabs
                  defaultActiveKey="1"
                  tabBarStyle={{ fontWeight: "bold" }}
                  size="large"
                >
                  <TabPane tab="Overview" key="1">
                    <p>{tourr?.overview.description}</p>
                    <div className="singletourCard">
                      <Card
                        extra={
                          <CheckCircleTwoTone
                            twoToneColor="#52c41a"
                            style={{ fontSize: "20px" }}
                          />
                        }
                        title={"Included"}
                        // title={<CheckCircleOutlined />}
                        hoverable
                        style={{ width: 300, marginRight: "20px" }}
                      >
                        {tourr?.overview.included.map((item) => (
                          <p>{item}</p>
                        ))}
                      </Card>
                      <Card
                        title="Excluded"
                        hoverable
                        style={{ width: 300 }}
                        extra={
                          <CloseCircleTwoTone
                            twoToneColor="red"
                            style={{ fontSize: "20px" }}
                          />
                        }
                      >
                        {tourr?.overview.excluded.map((item) => (
                          <p>{item}</p>
                        ))}
                      </Card>
                    </div>
                    <br></br>
                  </TabPane>
                  <TabPane tab="Itinerary" key="2">
                    {tourr?.itinerary.map((item) => (
                      <Collapse
                        defaultActiveKey={[item]}
                        onChange={callback2}
                        bordered={false}
                      >
                        <Panel header={item.name} key="1">
                          <p>{item.description}</p>
                        </Panel>
                      </Collapse>
                    ))}
                  </TabPane>
                  <TabPane tab="Prices" key="3">
                    <section className="pricesSection">
                      {tourr?.prices?.map((item) => (
                        <>
                          <div style={{ marginRight: "50px" }}>
                            <h3
                              style={{
                                marginBottom: "45px",
                              }}
                            >
                              {item?.accommodation[0].name}
                            </h3>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                // alignItems: "center",
                                paddingBottom: "20px",
                              }}
                            >
                              <BankOutlined
                                style={{
                                  fontSize: "30px",
                                  alignSelf: "center",
                                  marginRight: "20px",
                                }}
                              />

                              <div align="left">
                                <img src={imgSrc1} alt="" />
                                <p
                                  style={{
                                    fontSize: "16px",
                                    fontWeight: "600",
                                    marginBottom: "0px",
                                  }}
                                >
                                  {item?.accommodation[0].name}
                                </p>
                                <Rate value="4" />
                              </div>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "left",
                                alignItems: "center",
                                marginTop: "40px",
                              }}
                            >
                              <DollarOutlined
                                style={{
                                  fontSize: "30px",
                                  marginRight: "20px",
                                }}
                              />
                              <div>
                                <h3> {item?.hotelPrices.duration} days</h3>
                                <span style={{ color: "#FF4A52" }}>
                                  LE {item?.hotelPrices.triple}{" "}
                                </span>
                                <span>Per Person in Triple Room</span>
                                <br></br>
                                <span style={{ color: "#FF4A52" }}>
                                  LE {item?.hotelPrices.double}{" "}
                                </span>
                                <span> Per Person in Double Room</span>
                                <br></br>
                                <span style={{ color: "#FF4A52" }}>
                                  LE {item?.hotelPrices.single}{" "}
                                </span>
                                <span>One Person Traveling Alone</span>
                              </div>
                            </div>
                          </div>
                        </>
                      ))}
                    </section>
                  </TabPane>
                  {/* <TabPane tab="Client Reviews" key="4">
                  <div className="site-card-border-less-wrapper">
                    <Card
                      title="Cairo Tours & Packages"
                      bordered={true}
                      style={{ width: 400 }}
                    >
                      <Rate value="4" />
                      {"         "}
                      <span align="right">
                        {"             "}
                        9.245 reviews
                      </span>
                      <h2>Recent traveler reviews</h2>
                      <p>
                        “Our experience with Memphis Tours was amazing! We were
                        met by Mohamed F., a very organized...”
                      </p>
                      <p>
                        “I have engoyed with tourirst guide "shahinaz", she
                        makes see the beatuy of cairo and its...”
                      </p>
                      <p>
                        “It was so amazing to see their pyramids lifelong dream
                        our tour guides were definitely vocals...”
                      </p>
                      <Button align="right">Read more</Button>
                    </Card>
                  </div>
                </TabPane> */}
                </Tabs>
                <Button
                  style={{ margin: "20px 0 50px 95px" }}
                  type="primary"
                  shape="round"
                >
                  Enquire Now
                </Button>
              </Content>
            )}
            <Sider width="400">
              <section className="sider-tour">
                <h1
                  style={{
                    fontStyle: "bold",
                    fontSize: "25px",
                    // color: "#ff4a52",
                  }}
                >
                  Enquire Now
                </h1>
                <Form
                  // {...formItemLayout}
                  layout="vertical"
                  form={form}
                  onFinish={onFinish}
                  validateMessages={validateMessages}
                  initialValues={{
                    requiredMarkValue: requiredMark,
                  }}
                  onValuesChange={onRequiredTypeChange}
                  requiredMark={requiredMark}
                >
                  <Form.Item
                    label="Name"
                    name="name"
                    // required
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder="Name" />
                  </Form.Item>
                  <Form.Item label="E-mail" name="email" required>
                    <Input placeholder="E-mail" />
                  </Form.Item>
                  <Form.Item label="Nationality" name="nationality" required>
                    <Select>
                      <Select.Option value="Egyptian">Egyptian</Select.Option>
                      <Select.Option value="English">English</Select.Option>
                      <Select.Option value="Canadian">Canadian</Select.Option>
                      <Select.Option value="Albanian">Albanian</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Age" name="age" required>
                    <InputNumber min="16" max="80" />
                  </Form.Item>
                  <Form.Item label="Phone" name="mobile" required>
                    <Input minLength="11" />
                  </Form.Item>
                  <Form.Item
                    label="Number Of Adults"
                    name="number_of_people"
                    required
                  >
                    <div className="number-input">
                      <span>
                        {" "}
                        <MinusCircleOutlined
                          size="large"
                          style={{ fontSize: "20px" }}
                          onClick={() =>
                            setnumberOfAdults((prev) => {
                              if (prev === 0) {
                                return 0
                              } else {
                                return (prev -= 1)
                              }
                            })
                          }
                        />{" "}
                      </span>
                      <span>{numberOfAdults}</span>
                      <span>
                        {" "}
                        <PlusCircleOutlined
                          size="large"
                          style={{ fontSize: "20px" }}
                          onClick={() => setnumberOfAdults((prev) => prev + 1)}
                        />{" "}
                      </span>
                    </div>
                  </Form.Item>
                  <Form.Item
                    label="Number Of Single"
                    name="number_of_single"
                    required
                  >
                    <div className="number-input">
                      <span>
                        {" "}
                        <MinusCircleOutlined
                          size="large"
                          style={{ fontSize: "20px" }}
                          onClick={() =>
                            setnumberOfSingle((prev) => {
                              if (prev === 0) {
                                return 0
                              } else {
                                return (prev -= 1)
                              }
                            })
                          }
                        />{" "}
                      </span>
                      <span>{numberOfSingle}</span>
                      <span>
                        {" "}
                        <PlusCircleOutlined
                          size="large"
                          style={{ fontSize: "20px" }}
                          onClick={() => setnumberOfSingle((prev) => prev + 1)}
                        />{" "}
                      </span>
                    </div>
                  </Form.Item>
                  <Form.Item
                    label="Number Of Double"
                    name="number_of_double"
                    required
                  >
                    <div className="number-input">
                      <span>
                        {" "}
                        <MinusCircleOutlined
                          size="large"
                          style={{ fontSize: "20px" }}
                          onClick={() =>
                            setnumberOfDouble((prev) => {
                              if (prev === 0) {
                                return 0
                              } else {
                                return (prev -= 1)
                              }
                            })
                          }
                        />{" "}
                      </span>
                      <span>{numberOfDouble}</span>
                      <span>
                        {" "}
                        <PlusCircleOutlined
                          size="large"
                          style={{ fontSize: "20px" }}
                          onClick={() => setnumberOfDouble((prev) => prev + 1)}
                        />{" "}
                      </span>
                    </div>
                  </Form.Item>
                  <Form.Item
                    label="Number Of Triple"
                    name="number_of_triple"
                    required
                  >
                    <div className="number-input">
                      <span>
                        {" "}
                        <MinusCircleOutlined
                          size="large"
                          style={{ fontSize: "20px" }}
                          onClick={() =>
                            setnumberOfTriple((prev) => {
                              if (prev === 0) {
                                return 0
                              } else {
                                return (prev -= 1)
                              }
                            })
                          }
                        />{" "}
                      </span>
                      <span>{numberOfTriple}</span>
                      <span>
                        {" "}
                        <PlusCircleOutlined
                          size="large"
                          style={{ fontSize: "20px" }}
                          onClick={() => setnumberOfTriple((prev) => prev + 1)}
                        />{" "}
                      </span>
                    </div>
                  </Form.Item>

                  {/* <Form.Item
                  label="Start & End date"
                  name="start_end_date"
                  required
                >
                  <RangePicker
                    onChange={(date, dateString) => {
                      setstartDate(dateString[0])
                      setendDate(dateString[1])
                    }}
                  />
                </Form.Item> */}
                  <Form.Item
                    name="payment_method_id"
                    label="Payment Method"
                    required
                  >
                    <Radio.Group>
                      {paymentMethods.map((method) => (
                        <Radio value={method.id} key={method.id}>
                          {method.name}
                        </Radio>
                      ))}
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item label="Notes" name="text">
                    <Input.TextArea />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      className="btn-submit"
                      type="secondary"
                      htmlType="submit"
                      size="large"
                      align="center"
                    >
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </section>
            </Sider>
          </Layout>
          <AppFooter />
        </Layout>
      </div>
    </>
  )
}
