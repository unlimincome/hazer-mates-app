type Props = {
  name: string
  category: string
  quantity: number
}

const ProductRow = ({ name, category, quantity }: Props) => {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <div className="flex flex-col">
        <span className="font-medium">{name}</span>
        <span className="text-xs text-gray-500">{category}</span>
      </div>
      <div className="text-sm font-bold">{quantity}</div>
    </div>
  )
}

export default ProductRow
