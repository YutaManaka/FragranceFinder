import React, { useState, useEffect } from "react"
import { Choice } from "../constants"

type RadioProps = {
  choices: Choice[],
  pageId: number,
  changePageId: (pageId: number) => void
}

export const RadioControl = ({choices, pageId, changePageId}: RadioProps) => {
    // 選択中のラジオボタンvalue
    const [selected, setSelected] = useState("")

    // ラジオボタン切り替えイベント
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelected(event.target.value)
      RadioChangeAction()
    }

    // 表示後、時間差でボタン押せるようにする
    const [enabled, setEnabled] = useState(false)
    useEffect(() => {setTimeout(() => {setEnabled(true)}, 1000)})

    // 選択後にpageIdを変更
    const RadioChangeAction = () => {
      if (pageId === 1) {
        changePageId(2)
      } else {
        console.log('1じゃないよ')
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
                          value={choice.value} checked={choice.value === selected} onChange={changeValue}/>
                        <label
                          htmlFor={choice.value}
                          className="flex flex-col w-full max-w-lg mx-auto text-center border-2 rounded-xl border-blue-400 p-2 my-4 hover:bg-blue-200 transition-all">
                            <span className="fs-6">{choice.label}</span>
                        </label>
                    </div>
                )
            })}
            </div>
        </div>
    )
}
