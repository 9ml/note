import React from "react"

import { useArray } from "utils"

export const TsReactTest = () => {
  const persons = [
    {
      name: 'Tom',
      age: 18
    },
    {
      name: 'Jack',
      age: 20
    }
  ]

  const { value, add, clear, removeIndex } = useArray(persons)

  return (
    <div>
      <button onClick={() => add({name: 'John', age: 18})}>Add John</button>
      <button onClick={() => removeIndex(0)}>Remove 0</button>
      <button onClick={() => clear()}>Clear</button>
      {
        value.map((item, index) => (
          <div>
            <span>{ index }</span>
            <span>{ item.name }</span>
            <span>{ item.age }</span>
          </div>
        ))
      }
    </div>
  )
}
