import { useState } from "react"
import { Answer, PAGES } from "../constants"
import { BlueButton } from "./BlueButton"
import { RadioControl } from "./RadioControl"

export const AppLayout = (): JSX.Element => {
  const [pageId, setPageId] = useState(0)

  // 質問文を切り替える
  function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
  const changeQuestionText = (pageId: number): string => {
    const key: keyof typeof PAGES = pageId
    return getProperty(PAGES, key).question
  }

  // 画像を切り替える
  const changeImagePath = (pageId: number): string => `./${pageId}.jpeg`

  // 解答欄を切り替える
  const getAnswers = (pageId: number): Answer[] => {
    return getProperty(PAGES, pageId).answers
  }

  // 青ボタンでpageIdを変更する
  const changePageId = (newValue: number) => {
    setPageId(newValue);
  }
  return (
    <>
      <div className='h-screen'>
        {/* ヘッダー */}
        <div className='w-full bg-white border-b-2 border-gray-300'>
          <header>
            <div className='flex justify-center items-center h-16 px-10'>
              <img src="./header-logo.png" />
            </div>
          </header>
        </div>
        {/* コンテンツ */}
        <div className='bg-gray-100 py-5 h-5/6'>
          <div className='bg-white mx-10 h-full'>
            {/* 質問文 */}
            <div className='text-2xl font-bold flex justify-center items-center h-20'>
              {changeQuestionText(pageId)}
            </div>
            {/* 画像 */}
            <div className='flex justify-center px-4'>
              {/* <img src="./0.jpeg" /> */}
              <img src={changeImagePath(pageId)} />
            </div>
            {/* 解答欄 */}
            <div className='flex justify-center items-center h-1/2'>
              <div>
                
                {pageId === 0 &&
                  <BlueButton
                    text={'診断を始める'}
                    pageId={pageId}
                    changePageId={changePageId} />
                }
                {pageId === 1 &&
                  <RadioControl
                    answers={getAnswers(pageId)}/>
                }
              </div>
            </div>
            {/* 進捗表示 */}
            <div>0/0</div>
          </div>
        </div>
        {/* フッター */}
        <div className='bg-white flex justify-center items-center h-12'>
          <div className='text-black text-xs'>
            © 2019-2023 調香師ユタカのおすすめ人気香水ナビ
          </div>
        </div>
      </div>
    </>
  )
}
