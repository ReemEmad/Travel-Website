import axios from "axios"
let url = "http://agile-garden-81549.herokuapp.com/api"

export const login = (obj) => {
  let result = axios.post(url + "/login", obj, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })

  return result
}

export const register = (obj) => {
  let result = axios.post(url + "/register", obj, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })

  return result
}

export const logout = (token) => {
  let result = axios.post(url + "/logout", token, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return result
}

export const getReservedTours = (token) => {
  let result = axios.get(url + "/user/reserved-tours", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return result
}
