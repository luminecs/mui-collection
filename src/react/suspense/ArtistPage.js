import { Suspense } from 'react'
import Albums from './Albums'

function Loading () {
  return <h2>🌀 Loading...</h2>
}

export default function ArtistPage ({ artist }) {
  return (
    <>
      <h1>{artist.name}</h1>
      <Suspense fallback={<Loading/>}>
        <Albums artistId={artist.id}/>
      </Suspense>
    </>
  )
}
