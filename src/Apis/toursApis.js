import axios from "axios"
let url = "http://agile-garden-81549.herokuapp.com/api"

export let getData = () => {
  let result = axios.get(url + "/tour")
  return result
}

export let getSingleTour = (id) => {
  let result = axios.get(url + `/tour/${id}`)
  return result
}

export let filterTour = (obj) => {
  let result = axios.post(url + "/tour/filter", obj)
  return result
}

//reservation

export let getPayment = () => {
  let result = axios.get(url + "/setting/payment")
  return result
}

export let reserveTour = (obj) => {
  let result = axios.post(url + "/reservation", obj, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
  return result
}
