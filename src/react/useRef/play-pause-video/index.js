import { useRef, useState } from 'react'

export default function UseRefVideoPlayer () {
  const [isPlaying, setIsPlaying] = useState(false)
  const ref = useRef(null)

  function handleClick () {
    const nextIsPlaying = !isPlaying
    setIsPlaying(nextIsPlaying)

    if (nextIsPlaying) {
      ref.current.play()
    } else {
      ref.current.pause()
    }
  }

  return (
    <>
      <button style={{ display: 'block' }} onClick={handleClick}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <video
        width="400"
        ref={ref}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        style={{ marginTop: 10 }}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  )
}
