import axios from 'axios'

const API = 'https://axiona.pro/api/products'

export const fetchProducts = async () => {
  const res = await axios.get(API)
  return res.data
}
