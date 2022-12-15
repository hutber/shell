import Head from 'next/head'

import styles from 'styles/Home.module.css'
import config from "config";
import Link from "next/link";

export default function ChargingLocationMatching() {
    return <>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
            <h2>Please park your vehicle at your home charging location, please continue when ready</h2>
            <Link href={config.urls.chargingLocationMatching_2} passHref legacyBehavior><button>Ready</button></Link>
        </main>
    </>
}
