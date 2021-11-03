import React, { useState, useEffect } from "react"
import { Button, Input, message } from "antd"
import { UserOutlined, MailOutlined, NumberOutlined } from "@ant-design/icons"
import { register } from "../Apis/userApis"
import { Link } from "react-router-dom"
import { useHistory } from "react-router"

export default function Register() {
  const history = useHistory()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [password, setPassword] = useState()
  const [passwordConfirm, setPasswordConfirm] = useState()
  const [loading, setLoading] = useState(false)

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
      //   localStorage.setItem("token", data.token)
      setLoading(false)
      console.log(data)
      message.success("You've been registereed successfully")
      history.push("/")
    } catch (eror) {
      setLoading(false)
      message.error("Please review your data")
    }
  }

  return (
    <div className="register-container">
      <div className="center-space">
        <h1>Register</h1>
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
        <p>
          Already registered?{" "}
          <Link to="/login">
            <span>login</span>
          </Link>
          <p />
        </p>
      </div>
    </div>
  )
}