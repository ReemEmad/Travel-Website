import axios from "axios"
let url =
  "http://ec2-18-188-18-65.us-east-2.compute.amazonaws.com/TravelsAgency/public/api"

export let getData = () => {
  let result = axios.get(url + "/tour")
  return result
}

export let getSingleTour = (id) => {
  let result = axios.get(url + `/tour/${id}`)
  return result
}

export let filterTour = () => {
  let result = axios.post(url + "/tour/filter")
  return result
}
