type BlueButtonProps = {
  text: string
}
export const BlueButton = ({text}: BlueButtonProps): JSX.Element => {
  return (
    <div>
      <button className='bg-blue-400 border-2 border-solid rounded-full text-white font-semibold  px-10 py-4 hover:opacity-50 transition-all'>
        {text}
      </button>
    </div>
  )
}
