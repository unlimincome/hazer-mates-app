import axios from 'axios'

const API = 'https://your-backend-url.onrender.com/api/orders'

export const fetchOrders = async () => {
  const res = await axios.get(API)
  return res.data
}
