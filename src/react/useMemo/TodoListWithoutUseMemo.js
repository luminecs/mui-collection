import { filterTodos } from './utils'

export default function TodoListWithoutUseMemo ({ todos, tab, theme }) {
  const visibleTodos = filterTodos(todos, tab)
  return (
    <div className={theme}>
      <p>
        <b>
          Note: <code>filterTodos</code> is
          artificially slowed down!
        </b>
      </p>
      <ul>
        {visibleTodos.map(todo => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
    </div>
  )
}
