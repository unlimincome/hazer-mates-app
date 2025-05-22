import { create } from 'zustand'

type Stats = {
  topUser: string
  totalOrders: number
  totalSum: number
}

type StatsState = {
  stats: Stats | null
  setStats: (s: Stats) => void
}

export const useStatsStore = create<StatsState>((set) => ({
  stats: null,
  setStats: (s) => set({ stats: s })
}))
