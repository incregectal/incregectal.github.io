import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

import Gec from '../components/gec'
import Generators from '../components/generators'
import Upgrades from '../components/upgrades'

export default function Home() {
  // all of these state values are declared here to simplify the click/upgrade/generation math & update process
  // total gecs
  const [gecs, setGecs] = useState(0);
  // gecs per sec
  const [gps, setGps] = useState(0);
  // gecs per click
  const [gpc, setGpc] = useState(1);

  return (
    <div className={styles.container}>
      <Head>
        <title>incregectal</title>
        <meta name="description" content="a gec clicker game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>

        <div className={styles.displaybar}>
          <p className={styles.display}>
            {gecs} gecs
          </p>
          <Gec total={gecs} update={setGecs} gpc={gpc}/>
        </div>
        
        <div className={styles.generators}>
          <Generators />
        </div>

        <div className={styles.upgrades}>
          <Upgrades />
        </div>

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
            href="https://github.com/incregectal/incregectal.github.io"
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
