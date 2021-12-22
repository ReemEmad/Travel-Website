import React, { createContext, useState } from "react"

export const GuestUserContext = createContext()

export const GuestUserProvider = (props) => {
  const [isLoggedIn, setisLoggedIn] = useState(false)
  const [isDataFilled, setisDataFilled] = useState(false)

  return (
    <>
      <GuestUserContext.Provider value={{ isDataFilled, setisDataFilled }}>
        {props.children}
      </GuestUserContext.Provider>
    </>
  )
}