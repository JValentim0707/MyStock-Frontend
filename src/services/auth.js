import request from "./config"

const loginUser = async (loginData) => {
  const res = await request.post('/auth/login',loginData)
  return res.data
}

export {
  loginUser
}