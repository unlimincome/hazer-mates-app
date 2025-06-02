import axios from 'axios'

const API = 'https://axiona.pro/api/users'

export const fetchUsers = async () => {
  const res = await axios.get(API)
  return res.data
}

export const grantAccess = async (telegramId: number) => {
  return axios.post(`${API}/grant-access`, { telegramId })
}

export const revokeAccess = async (telegramId: number) => {
  return axios.post(`${API}/revoke-access`, { telegramId })
}
