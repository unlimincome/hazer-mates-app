import axios from 'axios'

const API = `${import.meta.env.VITE_API_BASE_URL}/api/orders`

export const fetchOrders = async () => {
  const res = await axios.get(API)
  return res.data
}
