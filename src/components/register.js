import React, { useState, useEffect, useContext } from "react"
import { Button, Input, message } from "antd"
import { UserOutlined, MailOutlined, NumberOutlined } from "@ant-design/icons"
import { register } from "../Apis/userApis"
import { Link } from "react-router-dom"
import { useHistory } from "react-router"
import { GuestUserContext } from "../Context/GuestUserContext"

export default function Register() {
  const history = useHistory()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [password, setPassword] = useState()
  const [passwordConfirm, setPasswordConfirm] = useState()
  const [loading, setLoading] = useState(false)

  const { isDataFilled } = useContext(GuestUserContext)

  const submitFn = async () => {
    if (
      email === "" ||
      password === "" ||
      phone === "" ||
      passwordConfirm === "" ||
      name === ""
    ) {
      message.error("please fill the form")
      return
    }
    try {
      setLoading(true)
      let Fdata = new FormData()
      Fdata.append("email", email)
      Fdata.append("password", password)
      Fdata.append("name", name)
      Fdata.append("phone", phone)
      Fdata.append("password_confirmation", passwordConfirm)
      let { data } = await register(Fdata)
      setLoading(false)
      console.log(data)
      message.success("You've been registereed successfully")
      localStorage.setItem("token", data.token)
      localStorage.setItem("name", data.name)
      localStorage.setItem("email", data.email)
      if (isDataFilled) {
        history.goBack()
      } else {
        history.push("/")
      }
    } catch (e) {
      setLoading(false)
      message.error(e.response.data.errors[0])
    }
  }

  return (
    <section className="resgiter">
      <div className="register-container">
        <h1>Register Now</h1>
        <Input
          placeholder="Name"
          prefix={<UserOutlined />}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <Input
          placeholder="Email"
          prefix={<MailOutlined />}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <Input
          placeholder="Phone"
          prefix={<NumberOutlined />}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <br />

        <Input.Password
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />

        <Input.Password
          placeholder="Password Confirmation"
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <br />
        <br />
        <br />

        <Button type="primary" onClick={submitFn} loading={loading}>
          Submit
        </Button>
        <br />
        <br />
      </div>
    </section>
  )
}
