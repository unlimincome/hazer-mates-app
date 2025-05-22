import { create } from 'zustand'

type OrderItem = {
  product: { name: string }
  quantity: number
}

type Order = {
  id: number
  user: { username: string | null }
  totalPrice: number
  createdAt: string
  items: OrderItem[]
}

type OrderState = {
  orders: Order[]
  setOrders: (list: Order[]) => void
}

export const useOrderStore = create<OrderState>((set) => ({
  orders: [],
  setOrders: (list) => set({ orders: list })
}))
