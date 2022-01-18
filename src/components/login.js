import React, { useState, useEffect } from "react"
import { Button, Input, message } from "antd"
import { UserOutlined } from "@ant-design/icons"
import { login } from "../Apis/userApis"
import { Link } from "react-router-dom"
import { useHistory } from "react-router"

export default function Login() {
  const history = useHistory()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [loading, setLoading] = useState(false)

  const loginFn = async () => {
    if (email === "" || password === "") {
      message.error("please enter your email and password")
      return
    }

    try {
      setLoading(true)
      let Fdata = new FormData()
      Fdata.append("email", email)
      Fdata.append("password", password)
      let { data } = await login(Fdata)
      localStorage.setItem("token", data.token)
      console.log(data)
      localStorage.setItem("name", data.name)
      localStorage.setItem("email", data.email)
      setLoading(false)
      history.push("/")
      message.success("You've logged in successfully")
    } catch (eror) {
      setLoading(false)
      console.log({ eror })
      message.error("email or password is invalid")
    }
  }

  return (
    <section className="container-login">
      <div className="login-container">
        <div className="center-space">
          <h1>Login</h1>
          <Input
            placeholder="Email"
            prefix={<UserOutlined />}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />

          <Input.Password
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <br />
          <Button type="primary" onClick={loginFn} loading={loading}>
            Submit
          </Button>
          <br />
          <br />
          <p>
            Don't have an account?{" "}
            {
              <Link to="/register">
                <span className="link-register">Register here</span>
              </Link>
            }
          </p>
        </div>
      </div>
    </section>
  )
}
