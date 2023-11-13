type BlueButtonProps = {
  text: string,
  pageId: number,
  changePageId: (pageId: number) => void
}
export const BlueButton = ({text, pageId, changePageId}: BlueButtonProps): JSX.Element => {
  const ButtonClickAction = () => {
    if (pageId === 0) {
      changePageId(1)
    } else {
      console.log('0じゃないよ')
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
