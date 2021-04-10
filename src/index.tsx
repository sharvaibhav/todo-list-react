import React from 'react'
import ReactDOM from 'react-dom'
import {TodoList} from './todo-list'
export interface Item {
  text: String
  done: Boolean
}

const data: Item[] = [
  {
    text: 'dummy1',
    done: false,
  },
  {
    text: 'dummy2',
    done: false,
  },
  {
    text: 'dummy3',
    done: false,
  },
  {
    text: 'dummy4',
    done: true,
  },
]

function App() {
  const listItemClicked = (item, e) => {
    console.log('elementClicked', item, e)
  }
  return <TodoList items={data} itemCallback={listItemClicked} />
}

ReactDOM.render(<App />, document.getElementById('root'))
