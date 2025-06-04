import { Routes, Route, Navigate } from 'react-router-dom'
import WarehousePage from './pages/WarehousePage'
import OrdersPage from './pages/OrdersPage'
import StatsPage from './pages/StatsPage'
import AccessPage from './pages/AccessPage'
import BottomNav from './components/BottomNav'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-black">
      <div className="flex-grow p-4 pb-16">
        <Routes>
          <Route path="/" element={<Navigate to="/warehouse" />} />
          <Route path="/warehouse" element={<WarehousePage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/access" element={<AccessPage />} />
        </Routes>
      </div>
      <BottomNav />
    </div>
  )
}

export default App
