import Head from 'next/head'
import styles from '../styles/Home.module.css'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Quiz web aplication" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to Quiz Rat</h1>
    </div>
  )
}
