import { useEffect } from 'react'
import { useUserStore } from '../store/useUserStore'
import { initTelegram } from '../lib/telegram'

export const useTelegramAuth = () => {
  const setUser = useUserStore((s) => s.setUser)

  useEffect(() => {
    const tg = initTelegram()
    const user = tg?.initDataUnsafe?.user

    if (user?.id) {
      setUser(user.id, false) // админ статус можно обновить позже
    }
  }, [])
}
