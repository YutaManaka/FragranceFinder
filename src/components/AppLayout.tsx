import { useState } from "react"
import { BlueButton } from "./BlueButton"

export const AppLayout = (): JSX.Element => {
  // 画像を切り替える
  const changeImagePath = (pageId: number): string => `./${pageId}.jpeg`
  // 青ボタンでpageIdを変更する
  const [pageId, setPageId] = useState(0)
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
            <div className='h-20'>

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
