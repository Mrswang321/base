import React from 'react'
import { observer } from 'mobx-react-lite'
import {
  observable,
  computed,
  action,
  makeAutoObservable,
  makeObservable
} from 'mobx'

class Todo {
  id = Math.random()
  title = ''
  finished = false

  constructor(title) {
    makeObservable(this, {
      title: observable,
      finished: observable,
      toggle: action
    })
    this.title = title
  }

  toggle() {
    this.finished = !this.finished
  }
}

class TodoList {
  todos = []

  get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length
  }

  constructor(todos) {
    makeObservable(this, {
      todos: observable,
      unfinishedTodoCount: computed
    })
    this.todos = todos
  }
}

const TodoListView = observer(
  ({todoList}) => {
    return (
      <div>
        <ul>
          {
            todoList.todos.map((todo) => {
              return (
                <TodoView key={todo.title} todo={todo}></TodoView>
              )
            })
          }
        </ul>
        剩余未完成任务数量：{todoList.unfinishedTodoCount}
      </div>
    )
  }
)

const TodoView = observer(
  ({todo}) => {
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.finished}
          onChange={() => todo.toggle()}
        />
        {todo.title}
      </li>
    )
  }
)

const store = new TodoList([
  new Todo('吃饭'),
  new Todo('睡觉')
])

export default function TodoListDemo() {
  return (
    <TodoListView todoList={store}></TodoListView>
  )
}
