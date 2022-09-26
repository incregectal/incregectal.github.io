import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

import Generators from '../components/generators'

export default function Home() {

  const [gecs, setGecs] = useState(0)

  // const modifiers
  const data = {
    gps: 0
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>incregectal</title>
        <meta name="description" content="gec clicker game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <div className={styles.displaybar}>
          <p className={styles.display}>
            {gecs} gecs
          </p>
          <Generators total={gecs} update={setGecs}/>
        </div>
        {/* <div>
          <p className={styles.card}>
            test
          </p>
        </div> */}
      </main>

      <footer className={styles.footer}>
        <p>
          <a
            href="https://github.com/aw1ld3v13"
            target="_blank"
            rel="noopener noreferrer"
          >created by evie</a>
        </p>
        <p>
          <a
            href="https://github.com/incregectal/incregectal"
            target="_blank"
            rel="noopener noreferrer"
          >hosted by github</a>
        </p>
        <p>
          <a
            href="https://orteil.dashnet.org/cookieclicker/"
            target="_blank"
            rel="noopener noreferrer"
          >inspired by cookie clicker</a>
        </p>
      </footer>
    </div>
  )
}
