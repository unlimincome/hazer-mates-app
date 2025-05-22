import { useEffect } from 'react'
import { useProductStore } from '../store/useProductStore'
import { fetchProducts } from '../api/products'
import ProductRow from '../components/ProductRow'

const WarehousePage = () => {
  const { products, setProducts } = useProductStore()

  useEffect(() => {
    fetchProducts().then(setProducts)
  }, [])

  return (
    <div>
      <h1 className="text-xl font-bold mb-4 text-primary">Склад</h1>
      {products.map((p) => (
        <ProductRow key={p.id} name={p.name} quantity={p.quantity} category={p.category} />
      ))}
    </div>
  )
}

export default WarehousePage
