import { create } from 'zustand'

type Product = {
  id: number
  name: string
  quantity: number
  category: string
  note?: string
}

type ProductState = {
  products: Product[]
  setProducts: (list: Product[]) => void
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  setProducts: (list) => set({ products: list })
}))
