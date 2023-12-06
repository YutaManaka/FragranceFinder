import React, { useState, useEffect } from "react"
import { ANSWERS, ANSWER_IDS, Choice } from "../constants"

type RadioProps = {
  choices: Choice[],
  pageId: number,
  changePageId: (pageId: number) => void,
  saveAnswers: (pageId: number, answer: string) => void
  saveFinalAnswer: (answer: string) => void
}

export const RadioControl = ({
  choices,
  pageId,
  changePageId,
  saveAnswers,
  saveFinalAnswer}: RadioProps) => {
    // 選択中のラジオボタンvalue
    const [selected, setSelected] = useState("")

    // ラジオボタン切り替えイベント
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelected(event.target.value)
      saveAnswers(pageId, event.target.value)
      const finalPageIds = [52,62,91,92,93,94,111,112,113,114,115,116]
      if (finalPageIds.includes(pageId)) {
        saveFinalAnswer(event.target.value)
      }
      RadioChangeAction(event.target.value)
    }

    // 表示後、時間差でボタン押せるようにする
    const [enabled, setEnabled] = useState(false)
    useEffect(() => {setTimeout(() => {setEnabled(true)}, 1000)})

    // question8の次のID判定
    const getNextIdForBeginner = (value: string): number => {
      let nextId = 0
      if (value === 'like') {
        nextId = 91
      } else {
        switch (ANSWERS[1]) {
          case 'both' :
            nextId = 92
            break
          case 'male' :
            nextId = 93
            break
          case 'female' :
          nextId = 94
          break
        }
      }
      return nextId
    }
    // question10の次のID判定
    const getNextIdForProfessional = (value: string): number => {
      let nextId = 0
      switch (value) {
        case 'fresh':
          switch (ANSWERS[1]) {
            case 'male':
              nextId = 111
              break
            case 'female':
              nextId = 112
              break
            case 'both':
              nextId = 111
              break
          }
          break
        case 'rich':
          nextId = 116
          break
        case 'middle':
          switch (ANSWERS[1]) {
            case 'male':
              nextId = 113
              break
            case 'female':
              nextId = 114
              break
            case 'both':
              nextId = 115
              break
          }
          break
        default:
          break
      }
      return nextId
    }

    // 選択後にpageIdを変更
    const RadioChangeAction = (value: string = '') => {
      switch (pageId) {
        case 1:
        case 3:
        case 51:
        case 61:
          changePageId(pageId + 1)
          break
        case 2:
          changePageId(value === 'match' ? 3 : 7)
          break
        case 4:
          changePageId(value === 'fashion' ? 51 : 61)
          break
        case 7:
          changePageId(value === 'beginner' ? 8 : 10)
          break
        case 8:
          changePageId(getNextIdForBeginner(value))
          break
        case 52:
        case 62:
        case 91:
        case 92:
        case 93:
        case 94:
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
        case 116:
          changePageId(ANSWER_IDS[ANSWERS[999]])
          break
        case 10:
          changePageId(getNextIdForProfessional(value))
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
