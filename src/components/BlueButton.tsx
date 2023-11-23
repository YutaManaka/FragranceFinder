import { ANSWERS } from "../constants"

type BlueButtonProps = {
  text: string,
  pageId: number,
  changePageId: (pageId: number) => void
}
export const BlueButton = ({text, pageId, changePageId}: BlueButtonProps): JSX.Element => {
  const ButtonClickAction = () => {
    if (pageId === 0) {
      // 初期画面の「診断を始める」ボタン
      changePageId(1)
    } else {
      // 結果画面の「最初から診断する」ボタン
      Object.keys(ANSWERS).forEach(key => delete ANSWERS[Number(key)]) // 結果リセット
      changePageId(0) // 初期画面に遷移
    }
  }
  return (
    <div>
      <button onClick={ButtonClickAction}
        className='bg-blue-400 border-2 border-solid rounded-full text-white font-semibold  px-10 py-4 hover:opacity-50 transition-all'>
        {text}
      </button>
    </div>
  )
}
