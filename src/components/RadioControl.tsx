import React, { useState } from "react"
import { Answer } from "../constants"

type RadioProps = {
  answers: Answer[],
}

export const RadioControl = ({answers}: RadioProps) => {
    /** 選択中のラジオボタンvalue */
    const [selected, setSelected] = useState("")
    /** ラジオボタン切り替えイベント */
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => setSelected(event.target.value)

    return (
        <div className="container form-check">
            <div className="row">
            {answers.map(answer => {
                return (
                    <div
                      className="col-4"
                      key={answer.value}>
                        {/* checked属性に式を定義する */}
                        <input
                          id={answer.value}
                          type="radio"
                          className="hidden"
                          value={answer.value} checked={answer.value === selected} onChange={changeValue}/>
                        <label
                          htmlFor={answer.value}
                          className="flex flex-col w-full max-w-lg mx-auto text-center border-2 rounded-xl border-blue-400 p-2 my-4 hover:bg-blue-200 transition-all">
                            <span className="fs-6">{answer.label}</span>
                        </label>
                    </div>
                )
            })}
            </div>
        </div>
    )
}
