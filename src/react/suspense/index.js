import { useState } from 'react'
import ArtistPage from './ArtistPage'

export default function SuspenseTest () {
  let [show, setShow] = useState(false)
  if (show) {
    return (
      <ArtistPage
        artist={{
          id: 'the-beatles',
          name: 'The Beatles',
        }}
      />
    )
  } else {
    return (
      <button onClick={() => setShow(true)}>
        Open The Beatles artist page
      </button>
    )
  }
}
