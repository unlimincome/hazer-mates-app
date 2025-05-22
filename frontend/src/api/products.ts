import axios from 'axios'

const API = 'https://your-backend-url.onrender.com/api/products'

export const fetchProducts = async () => {
  const res = await axios.get(API)
  return res.data
}
