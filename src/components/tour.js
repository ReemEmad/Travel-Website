import React, { useEffect, useState, useCallback, useContext } from "react"
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
  message,
  DatePicker,
  Modal,
  Spin,
  Row,
  Col,
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
import { useHistory } from "react-router"
import { GuestUserContext } from "../Context/GuestUserContext"
import { number } from "prop-types"

export default function Tour(props) {
  const { RangePicker } = DatePicker
  const {
    setisDataFilled,
    setnumberOfAdultsContext,
    setnumberOfChildrenContext,
    setnumberOfInfantsContext,
    numberOfAdultsContext,
    numberOfChildrenContext,
    numberOfInfantsContext,
    numberOfSingleContext,
    numberOfDoubleContext,
    numberOfTripleContext,
    setnumberOfSingleContext,
    setnumberOfDoubleContext,
    setnumberOfTripleContext,
    nameContext,
    ageContext,
    emailContext,
    mobileContext,
    nationalityContext,
    payment_method_idContext,
    startDateContext,
    endDateContext,
    setnameContext,
    setageContext,
    setemailContext,
    setmobileContext,
    setnationalityContext,
    setpayment_method_idContext,
    setstartDateContext,
    setendDateContext,
  } = useContext(GuestUserContext)

  const history = useHistory()
  const [loading, setloading] = useState(false)
  const [form] = Form.useForm()
  const [requiredMark, setRequiredMarkType] = useState("optional")
  const [paymentMethods, setpaymentMethods] = useState([])
  const [tourr, settour] = useState(undefined)
  const [tourDuration, settourDuration] = useState(0)
  const [arrdays, setarrdays] = useState([])
  const [numberOfAdults, setnumberOfAdults] = useState(numberOfAdultsContext)
  const [numberOfChildren, setnumberOfChildren] = useState(
    numberOfChildrenContext,
  )
  const [numberOfInfants, setnumberOfInfants] = useState(numberOfInfantsContext)
  const [numberOfSingle, setnumberOfSingle] = useState(numberOfSingleContext)
  const [numberOfDouble, setnumberOfDouble] = useState(numberOfDoubleContext)
  const [numberOfTriple, setnumberOfTriple] = useState(numberOfTripleContext)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [invoiceId, setInvoiceId] = useState()
  const [invoiceURL, setInvoiceURL] = useState()
  const [startDate, setstartDate] = useState()
  const [endDate, setendDate] = useState()

  const [shedule, setshedule] = useState(Date)
  const { Header, Content } = Layout
  const { TabPane } = Tabs
  const { Panel } = Collapse

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "This field is required!",
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
    setpaymentMethods(data.paymentMethods)
  }

  const onFinish = async (values) => {
    console.log(validateMessages)
    let data = new FormData()
    let { name, age, email, nationality, mobile, note, payment_method_id } =
      values

    data.append("name", name)
    data.append("age", age)
    data.append("email", email)
    data.append("nationality", nationality)
    data.append("mobile", mobile)
    data.append("number_of_adults", numberOfAdults)
    data.append("number_of_children", numberOfChildren)
    data.append("number_of_infants", numberOfInfants)
    data.append("note", note)
    data.append("payment_method_id", payment_method_id)
    data.append("tour_id", props.match.params.id)
    data.append("number_of_single", numberOfSingle)
    data.append("number_of_double", numberOfDouble)
    data.append("number_of_triple", numberOfTriple)
    data.append("date_from", startDate)
    data.append("date_to", endDate)
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
      console.log(error.response.data.message)
      console.log(Array.isArray(error.response.data.message))

      if (Array.isArray(error.response.data.message)) {
        error.response.data.message.forEach((element) => {
          message.error({ content: element })
        })
      } else {
        if (error.response.status === 401) {
          message.error("please login first")
          setisDataFilled(true)
          setnumberOfAdultsContext(numberOfAdults)
          setnumberOfChildrenContext(numberOfChildren)
          setnumberOfInfantsContext(numberOfInfants)
          setnumberOfSingleContext(numberOfSingle)
          setnumberOfDoubleContext(numberOfDouble)
          setnumberOfTripleContext(numberOfTriple)

          history.push("/login")
        }
      }
    }
  }

  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue)
  }

  function callback2(key) {
    console.log(key)
  }
  var id = props.match.params.id

  const getData = useCallback(async () => {
    setloading(true)
    let { data } = await getSingleTour(id)
    settour(data.tour)
    settourDuration(data.tour.duration)
    setshedule(data.tour.schedule)
    setloading(false)
    console.log(data.tour)
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
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
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
          <Button type="primary">Pay Now</Button>
        </a>
      </Modal>

      <div style={{ width: "100%" }}>
        <Layout>
          <Header>
            <div className="tour_single_head">
              <img src={imgSrc} alt="" />
            </div>
          </Header>
          <Layout>
            <Row wrap={true} gutter={{ xs: 8, sm: 8, md: 16, lg: 16 }}>
              {loading ? (
                <div
                  style={{
                    marginLeft: "50%",
                    marginTop: "5%",
                    paddingBottom: "5%",
                  }}
                >
                  <Spin tip="loading" size="large" />
                </div>
              ) : (
                <Col
                  className="gutter-row"
                  // span={16}
                  xs={24}
                  sm={12}
                  md={15}
                  lg={16}
                  xl={16}
                  xxl={16}
                >
                  <Content className="content_tour">
                    <div>
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
                        From {tourr?.price}LE
                      </h2>
                      <div className="div_style">
                        <div>
                          <ClockCircleOutlined
                            style={{ fontSize: "30px", paddingBottom: "10px" }}
                          />
                          <p style={{ fontSize: "17px", fontWeight: "bold" }}>
                            Duration
                          </p>
                          <p>{tourr?.duration} Days</p>
                        </div>

                        <Divider type="vertical" orientation="right" />
                        <div>
                          <CalendarOutlined
                            style={{ fontSize: "30px", paddingBottom: "10px" }}
                          />
                          <p style={{ fontSize: "17px", fontWeight: "bold" }}>
                            Run
                          </p>
                          {arrdays.map((item) => (
                            <span key={item}>{item} </span>
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
                            hoverable
                            className="card_style"
                          >
                            {tourr?.overview.included.map((item) => (
                              <ul key={item.id}>
                                <li>{item}</li>
                              </ul>
                            ))}
                          </Card>
                          <br />
                          <Card
                            title="Excluded"
                            hoverable
                            className="card_style"
                            extra={
                              <CloseCircleTwoTone
                                twoToneColor="red"
                                style={{ fontSize: "20px" }}
                              />
                            }
                          >
                            {tourr?.overview.excluded.map((item) => (
                              <ul key={item.id}>
                                <li>{item}</li>
                              </ul>
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
                              <p>
                                <strong>Description:</strong>
                                {"   "} {item.description}
                              </p>
                              <p>
                                <strong>Meals:</strong>
                                {item.meals.map((meal) => (
                                  <ul key={meal.name}>
                                    <li>{meal.name}</li>
                                  </ul>
                                ))}
                              </p>
                              <p>
                                <strong>Places:</strong>
                                {"   "}{" "}
                                {item.places.map((place) => (
                                  <ul key={place.name}>
                                    <li>{place.name}</li>
                                  </ul>
                                ))}
                              </p>
                            </Panel>
                          </Collapse>
                        ))}
                      </TabPane>
                      <TabPane tab="Prices" key="3">
                        <section className="pricesSection">
                          {tourr?.prices?.map((item) => (
                            <>
                              <div className="price_card">
                                <div align="center">
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
                                {/* <h3
                                  style={{
                                    marginBottom: "45px",
                                  }}
                                >
                                  {item?.accommodation[0].name}
                                </h3> */}

                                <div className="accomodation">
                                  {item.accommodation.map((item) => (
                                    <>
                                      <BankOutlined
                                        style={{
                                          fontSize: "30px",
                                          alignSelf: "center",
                                          marginRight: "20px",
                                        }}
                                      />

                                      <div
                                        align="center"
                                        style={{
                                          marginRight: "20px",
                                        }}
                                      >
                                        <img src={imgSrc1} alt="" />
                                        <p
                                          style={{
                                            fontSize: "16px",
                                            fontWeight: "600",
                                            marginBottom: "0px",
                                          }}
                                        >
                                          {item?.name}
                                        </p>
                                        <Rate value="4" />
                                      </div>
                                    </>
                                  ))}
                                </div>
                              </div>
                              <Divider type="horizontal" />
                            </>
                          ))}
                        </section>
                      </TabPane>
                      {/* reviews */}
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
                  </Content>
                </Col>
              )}
              <Col
                className="gutter-row form_tour"
                // span={12}
                xs={21}
                sm={12}
                md={8}
                lg={8}
                xl={8}
                xxl={6}
              >
                {/* <Sider
              className="sider_width"
              breakpoint="770"
              collapsedWidth="200"
            > */}
                <section className="sider-tour">
                  <h1
                    style={{
                      fontStyle: "bold",
                      fontSize: "25px",
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
                      colon
                      label={<strong>Name</strong>}
                      name="name"
                      // required
                      required
                    >
                      <Input placeholder="Name" />
                    </Form.Item>
                    <Form.Item
                      label={<strong>Email</strong>}
                      name="email"
                      required
                    >
                      <Input placeholder="E-mail" />
                    </Form.Item>
                    <Form.Item
                      label={<strong>Nationality</strong>}
                      name="nationality"
                      required
                    >
                      <Select>
                        <Select.Option value="Egyptian">Egyptian</Select.Option>
                        <Select.Option value="English">English</Select.Option>
                        <Select.Option value="Canadian">Canadian</Select.Option>
                        <Select.Option value="Albanian">Albanian</Select.Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      label={<strong>Age Group</strong>}
                      name="age"
                      required
                    >
                      <Select>
                        <Select.Option value="18-24">18-24</Select.Option>
                        <Select.Option value="25-34">25-34</Select.Option>
                        <Select.Option value="35-44">35-44</Select.Option>
                        <Select.Option value="45-55">35-44</Select.Option>
                        <Select.Option value=">55">55 and up</Select.Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      label={<strong>Phone</strong>}
                      name="mobile"
                      required
                    >
                      <Input minLength="11" />
                    </Form.Item>
                    <Form.Item
                      label={<strong>Number Of Adults (+12 years)</strong>}
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
                            onClick={() =>
                              setnumberOfAdults((prev) => prev + 1)
                            }
                          />{" "}
                        </span>
                      </div>
                    </Form.Item>
                    <Form.Item
                      label={
                        <strong>Number Of Children (2 to 11 years)</strong>
                      }
                      name="number_of_children"
                      required
                    >
                      <div className="number-input">
                        <span>
                          {" "}
                          <MinusCircleOutlined
                            size="large"
                            style={{ fontSize: "20px" }}
                            onClick={() =>
                              setnumberOfChildren((prev) => {
                                if (prev === 0) {
                                  return 0
                                } else {
                                  return (prev -= 1)
                                }
                              })
                            }
                          />{" "}
                        </span>
                        <span>{numberOfChildren}</span>
                        <span>
                          {" "}
                          <PlusCircleOutlined
                            size="large"
                            style={{ fontSize: "20px" }}
                            onClick={() =>
                              setnumberOfChildren((prev) => prev + 1)
                            }
                          />{" "}
                        </span>
                      </div>
                    </Form.Item>
                    <Form.Item
                      label={<strong>Number Of Infants (0 to 2 years)</strong>}
                      name="number_of_infants"
                      required
                    >
                      <div className="number-input">
                        <span>
                          {" "}
                          <MinusCircleOutlined
                            size="large"
                            style={{ fontSize: "20px" }}
                            onClick={() =>
                              setnumberOfInfants((prev) => {
                                if (prev === 0) {
                                  return 0
                                } else {
                                  return (prev -= 1)
                                }
                              })
                            }
                          />{" "}
                        </span>
                        <span>{numberOfInfants}</span>
                        <span>
                          {" "}
                          <PlusCircleOutlined
                            size="large"
                            style={{ fontSize: "20px" }}
                            onClick={() =>
                              setnumberOfInfants((prev) => prev + 1)
                            }
                          />{" "}
                        </span>
                      </div>
                    </Form.Item>
                    <Form.Item
                      label={<strong>Number Of Single</strong>}
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
                            onClick={() =>
                              setnumberOfSingle((prev) => prev + 1)
                            }
                          />{" "}
                        </span>
                      </div>
                    </Form.Item>
                    <Form.Item
                      label={<strong>Number Of Double</strong>}
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
                            onClick={() =>
                              setnumberOfDouble((prev) => prev + 1)
                            }
                          />{" "}
                        </span>
                      </div>
                    </Form.Item>
                    <Form.Item
                      label={<strong>Number Of Triple</strong>}
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
                            onClick={() =>
                              setnumberOfTriple((prev) => prev + 1)
                            }
                          />{" "}
                        </span>
                      </div>
                    </Form.Item>

                    <Form.Item
                      label={<strong>Start & End date</strong>}
                      name="start_end_date"
                      required
                    >
                      <RangePicker
                        onChange={(date, dateString) => {
                          setstartDate(dateString[0])
                          setendDate(dateString[1])
                        }}
                      />
                    </Form.Item>
                    <Form.Item
                      name="payment_method_id"
                      label={<strong>Payment Method</strong>}
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
                    <Form.Item label={<strong>Notes</strong>} name="text">
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
                {/* </Sider> */}
              </Col>
            </Row>
          </Layout>
          <AppFooter />
        </Layout>
      </div>
    </>
  )
}
