import Head from 'next/head'
import Link from 'next/link'

export default function Offline() {
  return (
  <>
    <Head>
      <title>next-pwa example</title>
    </Head>
    <h1>This is offline fallback page</h1>
    <h2>When offline, any page route will fallback to this page</h2>
    <Link href='/' passHref>
      <a >Back Home</a>
    </Link>
  </>
)}