type Props = {
  id: number
  username: string | null
  totalPrice: number
  createdAt: string
}

const OrderRow = ({ id, username, totalPrice, createdAt }: Props) => {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <div className="flex flex-col">
        <span className="font-medium">Заказ #{id}</span>
        <span className="text-xs text-gray-500">
          {username || 'Без имени'} • {new Date(createdAt).toLocaleDateString()}
        </span>
      </div>
      <div className="text-sm font-bold text-secondary">{totalPrice} ₽</div>
    </div>
  )
}

export default OrderRow
