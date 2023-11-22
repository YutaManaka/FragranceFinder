import React, { useState, useEffect } from "react"
import { ANSWERS, ANSWER_IDS, Choice } from "../constants"

type RadioProps = {
  choices: Choice[],
  pageId: number,
  changePageId: (pageId: number) => void,
  saveAnswers: (pageId: number, answer: string) => void
  saveFinalAnswer: (answer: string) => void
}

export const RadioControl = ({choices, pageId, changePageId, saveAnswers, saveFinalAnswer}: RadioProps) => {
    // 選択中のラジオボタンvalue
    const [selected, setSelected] = useState("")

    // ラジオボタン切り替えイベント
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelected(event.target.value)
      saveAnswers(pageId, event.target.value)
      const finalPageIds = [91,92,93,94,11]
      if (finalPageIds.includes(pageId)) {
        saveFinalAnswer(event.target.value)
      }
      console.log(ANSWERS)
      RadioChangeAction(event.target.value)
    }

    // 表示後、時間差でボタン押せるようにする
    const [enabled, setEnabled] = useState(false)
    useEffect(() => {setTimeout(() => {setEnabled(true)}, 1000)})

    // 選択後にpageIdを変更
    const RadioChangeAction = (value?: string) => {
      let nextId = 0
      if (value === 'like') {
        nextId = 91
      } else {
        switch (ANSWERS[1]) {
          case'both' :
            nextId = 92
            break
          case'male' :
            nextId = 93
            break
          case'female' :
          nextId = 94
          break
        }
      }
      switch (pageId) {
        case 1:
        case 7:
          changePageId(pageId + 1)
          break
        case 2:
          changePageId(value === 'match' ? 3 : 7)
          break
        case 8:
          changePageId(nextId)
          break
        case 91:
        case 92:
        case 93:
        case 94:
          changePageId(ANSWER_IDS[ANSWERS[999]])
          break
        default:
          break
      }

    }
    return (
        <div className={'container form-check ' + (enabled ? '' : 'pointer-events-none')}>
            <div className="row">
            {choices.map(choice => {
                return (
                    <div
                      className="col-4"
                      key={choice.value}>
                        {/* checked属性に式を定義する */}
                        <input
                          id={choice.value}
                          type="radio"
                          className="hidden"
                          value={choice.value} checked={choice.value === selected}
                          onChange={changeValue}/>
                        <label
                          htmlFor={choice.value}
                          className="flex flex-col min-w-0 w-full max-w-lg mx-auto text-center border-2 rounded-xl border-blue-400 p-2 my-4 hover:bg-blue-200 transition-all">
                            <span className="fs-6">{choice.label}</span>
                        </label>
                    </div>
                )
            })}
            </div>
        </div>
    )
}
