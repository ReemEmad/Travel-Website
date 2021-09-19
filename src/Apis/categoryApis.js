import axios from "axios"
let url = "http://agile-garden-81549.herokuapp.com/api"

export let getSingleCategoryApi = (id) => {
  let result = axios.get(url + `/category/${id}`)
  return result
}
