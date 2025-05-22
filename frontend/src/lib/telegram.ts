export const initTelegram = () => {
  // @ts-ignore
  const tg = window.Telegram.WebApp
  tg.expand()
  tg.enableClosingConfirmation()
  return tg
}
