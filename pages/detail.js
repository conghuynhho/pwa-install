import React from 'react'
import {useRouter} from 'next/router'

function Detail() {
  const router = useRouter()
  return (
    <div>
      <h2>DETAIL</h2>
      <button onClick={() => router.back()}>back</button>
    </div>
  )
}
export default Detail