import { useRef } from 'react'

const ul = {
  listStyle: 'none',
  whiteSpace: 'nowrap',
}
const li = {
  listStyle: 'none',
  whiteSpace: 'nowrap',
  display: 'inline',
  padding: '0.5rem',
}

export default function UseRefScrollImageIntoView () {
  const listRef = useRef(null)

  function scrollToIndex (index) {
    const listNode = listRef.current
    // This line assumes a particular DOM structure.
    let imgNode = listNode.querySelectorAll('li > img')[index]
    imgNode.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    })
  }

  return (
    <>
      <nav style={{ textAlign: 'center' }}>
        <button onClick={() => scrollToIndex(0)}>Tom</button>
        <button onClick={() => scrollToIndex(1)}>Maru</button>
        <button onClick={() => scrollToIndex(2)}>Jellylorum</button>
      </nav>
      {/* 宽度100% 使该元素与 nav 解耦 */}
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <ul ref={listRef} style={ul}>
          <li style={li}>
            <img src="https://placekitten.com/g/200/200" alt="Tom"/>
          </li>
          <li style={li}>
            <img src="https://placekitten.com/g/300/200" alt="Maru"/>
          </li>
          <li style={li}>
            <img src="https://placekitten.com/g/250/200" alt="Jellylorum"/>
          </li>
        </ul>
      </div>
    </>
  )
}
