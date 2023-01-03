import { useEffect, useRef, useState } from 'react'

export default function UseEffectDeadLoop () {

  return (
    <>
      <CountInputChangesDeadLoop1/>
      <CountInputChanges/>
      <CountSecrets/>
    </>
  )
}

function CountInputChangesDeadLoop1 () {
  const [value, setValue] = useState('')
  const [count, setCount] = useState(-1)

  // 在初始渲染之后，useEffect()执行更新状态的副作用回调函数。状态更新触发重新渲染。
  // useEffect(() => setCount(count + 1))
  useEffect(() => setCount(count + 1), [value])
  const onChange = ({ target }) => setValue(target.value)

  return (
    <div>
      <input type="text" value={value} onChange={onChange}/>
      <div>Number of changes: {count}</div>
    </div>
  )
}

function CountInputChanges () {
  const [value, setValue] = useState('')
  // 更新 Ref 不会触发组件的重新渲染
  const countRef = useRef(0)

  useEffect(() => {
    countRef.current++
  })
  const onChange = ({ target }) => setValue(target.value)

  return (
    <div>
      <input type="text" value={value} onChange={onChange}/>
      <div>Number of changes: {countRef.current}</div>
    </div>
  )
}

function CountSecrets () {
  const [secret, setSecret] = useState({ value: '', countSecrets: 0 })

  // 在副作用回调函数中，只要输入值等于secret，就会调用更新函数
  // setSecret, 这会增加countSecrets的值，但也会创建一个新对象。
  // 避免将对象作为依赖项
  useEffect(() => {
    if (secret.value === 'secret') {
      setSecret(s => ({ ...s, countSecrets: s.countSecrets + 1 }))
    }
    // 依赖 secret.value，而不是整个 secret 对象
  }, [secret.value])
  const onChange = ({ target }) => {
    setSecret(s => ({ ...s, value: target.value }))
  }

  return (
    <div>
      <input type="text" value={secret.value} onChange={onChange}/>
      <div>Number of secrets: {secret.countSecrets}</div>
    </div>
  )
}
