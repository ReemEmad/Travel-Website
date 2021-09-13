import axios from "axios"
let url = "http://agile-garden-81549.herokuapp.com/api"

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
