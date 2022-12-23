import { useEffect, useState } from 'react'

export default function UseEffectListenGlobalEvent () {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    function handleMove (e) {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('pointermove', handleMove)
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [])

  return (
    <div style={{
      backgroundColor: 'pink',
      left: -20,
      top: -20,
      width: 40,
      height: 40,
      position: 'absolute',
      borderRadius: '50%',
      transform: `translate(${position.x}px, ${position.y}px)`,
      pointerEvents: 'none',
      opacity: 0.6
    }}>
    </div>
  )
}
