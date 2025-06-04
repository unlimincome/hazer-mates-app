import { useEffect, useState } from 'react'
import { fetchUsers, grantAccess, revokeAccess } from '../api/access'
import UserAccessRow from '../components/UserAccessRow'
import { useUserStore } from '../store/useUserStore'

interface User {
  telegramId: number
  username: string | null
}

const AccessPage = () => {
  const [users, setUsers] = useState<User[]>([])
  const { isAdmin } = useUserStore()

  useEffect(() => {
    fetchUsers().then(setUsers)
  }, [])

  const toggleAccess = async (telegramId: number, grant: boolean) => {
    if (grant) {
      await grantAccess(telegramId)
    } else {
      await revokeAccess(telegramId)
    }
    fetchUsers().then(setUsers)
  }

  if (!isAdmin) return <div className="text-center text-gray-500">Нет доступа</div>

  return (
    <div>
      <h1 className="text-xl font-bold mb-4 text-secondary">Управление доступом</h1>
      {users.map((user) => (
        <UserAccessRow
          key={user.telegramId}
          telegramId={user.telegramId}
          username={user.username}
          hasAccess={true}
          onToggle={toggleAccess}
        />
      ))}
    </div>
  )
}

export default AccessPage
