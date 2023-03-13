import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Results from '@/components/Results'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>IMDb Clone</title>
        <meta name="description" content="IMDb clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navbar />
      <Results />
    </>
  )
}
