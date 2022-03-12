import React, { createContext, useState } from "react"

export const GuestUserContext = createContext()

export const GuestUserProvider = (props) => {
  const [isDataFilled, setisDataFilled] = useState(false)
  const [numberOfAdultsContext, setnumberOfAdultsContext] = useState(0)
  const [numberOfChildrenContext, setnumberOfChildrenContext] = useState(0)
  const [numberOfInfantsContext, setnumberOfInfantsContext] = useState(0)
  const [numberOfSingleContext, setnumberOfSingleContext] = useState(0)
  const [numberOfDoubleContext, setnumberOfDoubleContext] = useState(0)
  const [numberOfTripleContext, setnumberOfTripleContext] = useState(0)
  const [nameContext, setnameContext] = useState("")
  const [ageContext, setageContext] = useState()
  const [emailContext, setemailContext] = useState()
  const [nationalityContext, setnationalityContext] = useState()
  const [mobileContext, setmobileContext] = useState()
  const [payment_method_idContext, setpayment_method_idContext] = useState()
  const [startDateContext, setstartDateContext] = useState()
  const [endDateContext, setendDateContext] = useState()

  return (
    <>
      <GuestUserContext.Provider
        value={{
          isDataFilled,
          setisDataFilled,
          numberOfAdultsContext,
          setnumberOfAdultsContext,
          numberOfChildrenContext,
          setnumberOfChildrenContext,
          numberOfInfantsContext,
          setnumberOfInfantsContext,
          numberOfSingleContext,
          setnumberOfSingleContext,
          numberOfDoubleContext,
          setnumberOfDoubleContext,
          numberOfTripleContext,
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
        }}
      >
        {props.children}
      </GuestUserContext.Provider>
    </>
  )
}
