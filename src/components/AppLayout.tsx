import { useState } from "react"
import { Choice, PAGES, ANSWERS } from "../constants"
import { BlueButton } from "./BlueButton"
import { RadioControl } from "./RadioControl"
import { ResultText } from "./ResultText"

export const AppLayout = (): JSX.Element => {
  const [pageId, setPageId] = useState(0)

  // 質問のページか判定する
  const isResult = (pageId: number) => {
    return String(pageId).startsWith('99')
  }
  function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  // 結果のタイトルを切り替える
  const changeResult = (pageId: number): string => {
    const key: keyof typeof PAGES = pageId
    return getProperty(PAGES, key).result
  }

  // 結果のurlを切り替える
  const changeUrl = (pageId: number): string => {
    const key: keyof typeof PAGES = pageId
    return getProperty(PAGES, key).url
  }

  // 質問文を切り替える
  const changeQuestionText = (pageId: number): string => {
    const key: keyof typeof PAGES = pageId
    return getProperty(PAGES, key).question
  }

  // 画像を切り替える
  const changeImagePath = (pageId: number): string => `./${pageId}.jpeg`

  // 結果の文章を切り替える
  const changeText = (pageId: number): string => {
    const key: keyof typeof PAGES = pageId
    return getProperty(PAGES, key).text
  }

  // radioの質問か判定する
  const isRadio = (pageId: number): boolean => {
    const radioIds = [1,2,3,4,51,52,61,62,7,8,91,92,93,94,10,111,112,113,114,115,116]
    return radioIds.includes(pageId)
  }

  // 解答欄を切り替える
  const getChoices = (pageId: number): Choice[] => {
    return getProperty(PAGES, pageId).choices
  }

  // 青ボタンでpageIdを変更する
  const changePageId = (newValue: number) => {
    setPageId(newValue);
  }

  // 選択肢を選んだ際に回答を保存する
  const saveAnswers = (pageId: number, answer: string) => {
    ANSWERS[pageId] = answer
  }

  // 最終回答を保存する
  const saveFinalAnswer = (answer: string) => {
    if (pageId === 52) {
      ANSWERS[999] = `${ANSWERS[51]}_${answer}_${ANSWERS[1]}`
    } else if (pageId === 62) {
      ANSWERS[999] = `${ANSWERS[61]}_${answer}_${ANSWERS[1]}`
    } else {
      ANSWERS[999] = `${answer}_${ANSWERS[1]}`
    }
  }
  return (
    <>
      <div className='h-screen w-full'>
        {/* ヘッダー */}
        <div className='w-full h-16 bg-white border-b-2 border-gray-300'>
          <header>
            <div className='flex justify-center items-center px-10'>
              <img src="./header-logo.png" />
            </div>
          </header>
        </div>
        {/* コンテンツ */}
        <div className='bg-gray-100 py-5 h-[calc(100%-112px)] min-h-max'>
          <div className='bg-white mx-10 h-max min-h-full'>
            {/* 質問文 */}
            {isResult(pageId)
              // 結果ページ
              ?<div className="flex justify-center items-center h-20">
                <div>
                  <div>あなたにぴったりの香水は</div>
                  <div>
                    <span className="font-bold">
                      {changeResult(pageId)}
                    </span>
                    <span>
                      です。
                    </span>
                  </div>
                </div>
              </div>
              // 質問ページ
              :<div className='text-2xl font-bold flex justify-center items-center h-20'>
                {changeQuestionText(pageId)}
              </div>
            }
            {/* 画像 */}
            <div className='flex justify-center px-4'>
              {/* <img src="./0.jpeg" /> */}
              <img src={changeImagePath(pageId)} />
            </div>
            {/* 解答欄 */}
            <div className='flex justify-center items-center h-2/3'>
              {isResult(pageId)
                // 結果ページ
                ?<ResultText
                  text={changeText(pageId)}
                  imgUrl={changeImagePath(pageId)}
                  result={changeResult(pageId)}
                  url={changeUrl(pageId)}
                  pageId={pageId}
                  changePageId={changePageId} />
                // 質問ページ
                :<div className="w-2/3">
                  {pageId === 0 &&
                  <div className="py-28">
                      <BlueButton
                        text={'診断を始める'}
                        pageId={pageId}
                        changePageId={changePageId} />
                      </div>
                  }
                  {isRadio(pageId) &&
                    <RadioControl
                      choices={getChoices(pageId)}
                      pageId={pageId}
                      changePageId={changePageId}
                      saveAnswers={saveAnswers}
                      saveFinalAnswer={saveFinalAnswer} />
                  }
                </div>
              }
            </div>
          </div>
        </div>
        {/* フッター */}
        <div className='bg-white flex justify-center h-12 items-center'>
          <div className='text-black text-xs'>
            © 2019-2024 調香師ユタカのおすすめ人気香水ナビ
          </div>
        </div>
      </div>
    </>
  )
}
