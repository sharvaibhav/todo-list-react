import React from 'react'
import {Item} from './index'
export function TodoList({
  items,
  itemCallback,
}: {
  items: Item[]
  itemCallback: Function
}) {
  const listItemClickHandler = (item: Item, e: React.MouseEvent) => {
    itemCallback(item, e)
  }
  return (
    <>
      <ul>
        {items.map((item: Item, index: number) => {
          return (
            <li
              key={index}
              onClick={(e) => {
                e.persist()
                if (!item.done) itemCallback(item, e)
                e.stopPropagation()
              }}
            >
              {item.text} -- {item.done.toString()}
            </li>
          )
        })}
      </ul>
    </>
  )
}
