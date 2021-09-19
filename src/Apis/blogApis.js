import axios from "axios"
let url = "http://agile-garden-81549.herokuapp.com/api"

export const getBlogsApi = async () => {
  let result = await axios.get(url + "/blog")
  return result
}

export const getSingleBlogApi = async (id) => {
  let result = await axios.get(url + `/blog/${id}`)
  return result
}
