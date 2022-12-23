import AddTask from '../todolist-array/AddTask'
import TaskList from '../todolist-array/TaskList'
import { useImmerReducer } from 'use-immer'

function tasksReducer (tasks, action) {
  switch (action.type) {
    case 'added': {
      // return [
      //   ...tasks, {
      //     id: action.id,
      //     text: action.text,
      //     done: false,
      //   }]
      tasks.push({
        id: action.id,
        text: action.text,
        done: false,
      })
      break
    }
    case 'changed': {
      const index = tasks.findIndex(t => t.id === action.task.id)
      // return tasks.map(t => {
      //   if (t.id === action.task.id) {
      //     return action.task
      //   } else {
      //     return t
      //   }
      // })
      tasks[index] = action.task
      break
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id)
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}

let nextId = 3
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
]

export default function UseReducerTodolistLmmer () {
  const [tasks, dispatch] = useImmerReducer(tasksReducer, initialTasks)

  function handleAddTask (text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    })
  }

  function handleChangeTask (task) {
    dispatch({
      type: 'changed',
      task: task,
    })
  }

  function handleDeleteTask (taskId) {
    dispatch({
      type: 'deleted',
      id: taskId,
    })
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      {/* 传递函数 */}
      <AddTask onAddTask={handleAddTask}/>
      <TaskList tasks={tasks} onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}/>
    </>
  )
}
