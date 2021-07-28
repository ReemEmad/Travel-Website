import axios from "axios"
let url =
  "http://ec2-18-188-18-65.us-east-2.compute.amazonaws.com/TravelsAgency/public/api"

export let toursApi = () => {
  let result = axios.get(url + "/tours")
  return result
}

export let categoriesApi = () => {
  let result = axios.get(url + "/categories")
  return result
}

export let searchApi = (obj) => {
  let result = axios.post(url + "/search", obj, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
  return result
}
