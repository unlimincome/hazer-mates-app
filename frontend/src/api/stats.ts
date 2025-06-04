import axios from 'axios'

const API = `${import.meta.env.VITE_API_BASE_URL}/api/stats`

export const fetchStats = async () => {
  const res = await axios.get(API)
  return res.data
}
