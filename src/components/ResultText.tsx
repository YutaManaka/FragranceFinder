type ResultTextProps = {
  text: string,
  imgUrl: string,
  result: string,
  url: string
}
export const ResultText = ({text, imgUrl, result, url}: ResultTextProps): JSX.Element => {
  const resultTexts = (text: string): Array<string> => {
    return text.split('/')
  }
  return (
    <div className="mx-4">
      <div className="mb-4 text-left">
        {resultTexts(text)[0]}
      </div>
      <div className="mb-4 text-left">
        {resultTexts(text)[1]}
      </div>
      <div className="text-left">
        おすすめの香水はこちら↓
      </div>
      <a href={`https://yutaka-perfume.com/${url}`} target="_blank" rel="noopener noreferrer">
      <div className="flex mt-1 mx-4 border-2 border-blue-400 hover:bg-blue-200 transition-all">
        <span>
          <img
            src={imgUrl}
            className='m-2 w-20' />
        </span>
        <span className="mx-1 text-xs font-bold flex items-center">
          <div>
            {`${result}のおすすめ香水`}
          </div>
        </span>
      </div>
      </a>
    </div>
  )
}
