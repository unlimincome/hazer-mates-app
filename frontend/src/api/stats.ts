import axios from 'axios'

const API = 'https://your-backend-url.onrender.com/api/stats'

export const fetchStats = async () => {
  const res = await axios.get(API)
  return res.data
}
