import React from 'react'
import Link from 'next/link'

export default function News() {
  return (
    <div>
      <div>News</div>
      <Link href='/' passHref>
        <a >Back Home</a>
      </Link>
    </div>
  )
}
