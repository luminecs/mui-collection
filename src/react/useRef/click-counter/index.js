import { useRef } from 'react'

export default function UseRefClickCounter() {
  let ref = useRef(0)
  function handleClick () {
    ref.current = ref.current + 1
    alert('You clicked ' + ref.current + ' times!')
  }

  return (
    <button onClick={handleClick}>
      Click me! {`${ref.current} times!`}
    </button>
  )
}
