import axios from 'axios'

const API = 'https://axiona.pro/api/orders'

export const fetchOrders = async () => {
  const res = await axios.get(API)
  return res.data
}
