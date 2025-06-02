import axios from 'axios'

const API = 'https://axiona.pro/api/stats'

export const fetchStats = async () => {
  const res = await axios.get(API)
  return res.data
}
