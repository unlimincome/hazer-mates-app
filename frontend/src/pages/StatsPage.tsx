import { useEffect } from 'react'
import { fetchStats } from '../api/stats'
import { useStatsStore } from '../store/useStatsStore'

const StatsPage = () => {
  const { stats, setStats } = useStatsStore()

  useEffect(() => {
    fetchStats().then(setStats)
  }, [])

  if (!stats) return <div>Загрузка...</div>

  return (
    <div>
      <h1 className="text-xl font-bold mb-4 text-primary">Статистика</h1>
      <div className="space-y-4">
        <div className="bg-white rounded-xl p-4 shadow">
          <p className="text-sm text-gray-500">Всего заказов</p>
          <p className="text-lg font-bold">{stats.totalOrders}</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow">
          <p className="text-sm text-gray-500">Сумма</p>
          <p className="text-lg font-bold">{stats.totalSum} ₽</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow">
          <p className="text-sm text-gray-500">Топ продавец</p>
          <p className="text-lg font-bold">{stats.topUser}</p>
        </div>
      </div>
    </div>
  )
}

export default StatsPage
