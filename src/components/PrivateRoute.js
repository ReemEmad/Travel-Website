import React from "react"
import { Route, Redirect } from "react-router-dom"

const PrivateRoute = ({ component: Component, handleChildFunc, ...rest }) => {
  const user = localStorage.getItem("token")
  return (
    <Route
      {...rest}
      render={(props) =>
        user !== null ? (
          <Component {...props} user={user} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  )
}
export default PrivateRoute
