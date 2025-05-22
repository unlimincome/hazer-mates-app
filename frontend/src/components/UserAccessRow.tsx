type Props = {
  id?: number
  telegramId: number
  username?: string
  hasAccess: boolean
  onToggle: (telegramId: number, newState: boolean) => void
}

const UserAccessRow = ({ telegramId, username, hasAccess, onToggle }: Props) => {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <div className="flex flex-col">
        <span className="font-medium">{username || 'Без имени'}</span>
        <span className="text-xs text-gray-500">ID: {telegramId}</span>
      </div>
      <input
        type="checkbox"
        checked={hasAccess}
        onChange={() => onToggle(telegramId, !hasAccess)}
        className="w-5 h-5 accent-primary"
      />
    </div>
  )
}

export default UserAccessRow
