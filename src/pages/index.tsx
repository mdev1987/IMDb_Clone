import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Results from '@/components/Results'
import requests from '@/utils/requests'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

type propsType = {
  results?: any;
  error?: string
}

export default function Home(props: propsType) {
  return (
    <div className='flex flex-col h-screen'>
      <Head>
        <title>IMDb Clone</title>
        <meta name="description" content="IMDb clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navbar />
      <Results {...props} />
    </div>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const genre = ctx.query?.genre || 'fetchTrending';
  const genreUrl = genre === 'fetchTopRated' ? 'fetchTopRated' : 'fetchTrending'
  const response = await fetch(requests[genreUrl].url, {
    method: 'GET'
  })

  if (response.ok) {
    return {
      props: {
        results: (await response.json()).results,
        error: null
      }
    }
  }
  return {
    props: {
      results: null,
      error: `Error ${response.status}: ${response.statusText}`
    }
  }
}