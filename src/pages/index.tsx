// External libraries
import Head from 'next/head'

// Components
import Body from '../components/pages/Home'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Emotion Next.js Template' />
      </Head>
      <Body />
    </>
  )
}

export default Home
