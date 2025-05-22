import { useEffect } from 'react'
import { useOrderStore } from '../store/useOrderStore'
import { fetchOrders } from '../api/orders'
import OrderRow from '../components/OrderRow'

const OrdersPage = () => {
  const { orders, setOrders } = useOrderStore()

  useEffect(() => {
    fetchOrders().then(setOrders)
  }, [])

  return (
    <div>
      <h1 className="text-xl font-bold mb-4 text-secondary">Заказы</h1>
      {orders.map((o) => (
        <OrderRow
          key={o.id}
          id={o.id}
          username={o.user.username}
          totalPrice={o.totalPrice}
          createdAt={o.createdAt}
        />
      ))}
    </div>
  )
}

export default OrdersPage
