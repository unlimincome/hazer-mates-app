import { create } from 'zustand'

type UserState = {
  telegramId: number | null
  isAdmin: boolean
  setUser: (id: number, admin: boolean) => void
}

export const useUserStore = create<UserState>((set) => ({
  telegramId: null,
  isAdmin: false,
  setUser: (id, admin) => set({ telegramId: id, isAdmin: admin })
}))
