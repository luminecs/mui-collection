import { useReducer } from 'react'

function reducer (state, action) {
  switch (action.type) {
    case 'incremented_age': {
      return {
        name: state.name,
        age: state.age + 1,
      }
    }
    case 'changed_name': {
      return {
        name: action.nextName,
        age: state.age,
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }

}

export default function UseReducerForm () {
  const [state, dispatch] = useReducer(reducer, { name: 'Taylor', age: 42 })

  function handleButtonClick () {
    dispatch({ type: 'incremented_age' })
  }

  function handleInputChange (e) {
    dispatch({
      type: 'changed_name',
      nextName: e.target.value,
    })
  }

  return (
    <>
      <input value={state.name} onChange={handleInputChange}/>
      <button onClick={handleButtonClick}>
        Increment age
      </button>
      <p>Hello, {state.name}. You are {state.age}.</p>
    </>
  )
}
