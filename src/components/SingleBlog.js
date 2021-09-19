import React, { useEffect, useState } from "react"
import { getSingleBlogApi } from "../Apis/blogApis"

export default function SingleBlog(props) {
  const [data, setdata] = useState([])

  let getData = async () => {
    let result = await getSingleBlogApi(props.match.params.id)
    console.log(result)
  }

  useEffect(() => {
    getData()
  }, [])

  return <div>single blog</div>
}
