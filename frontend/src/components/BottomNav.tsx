import { NavLink } from 'react-router-dom'
import { AiOutlineAppstore, AiOutlineBarChart, AiOutlineShoppingCart } from 'react-icons/ai'

const BottomNav = () => {
  return (
    <nav className="flex justify-around items-center h-14 border-t bg-white">
      <NavLink
        to="/warehouse"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center ${isActive ? 'text-primary' : 'text-gray-400'}`
        }
      >
        <AiOutlineAppstore size={24} />
        <span className="text-xs">Склад</span>
      </NavLink>

      <NavLink
        to="/orders"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center ${isActive ? 'text-primary' : 'text-gray-400'}`
        }
      >
        <AiOutlineShoppingCart size={24} />
        <span className="text-xs">Заказы</span>
      </NavLink>

      <NavLink
        to="/stats"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center ${isActive ? 'text-primary' : 'text-gray-400'}`
        }
      >
        <AiOutlineBarChart size={24} />
        <span className="text-xs">Статистика</span>
      </NavLink>
    </nav>
  )
}

export default BottomNav
