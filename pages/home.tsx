import Head from 'next/head'
import {useEffect, useState} from "react";
import Image from 'next/image'

import { axios } from "utils/axios";
import EncodePopup from "components/EnodePopup";

import styles from 'styles/Home.module.css'
import config from "config";

export default function Home() {
    const [displayEnodeWindow, setDisplayEnodeWindow] = useState<boolean>(false)
    const getData = async () => {
        const data = await axios({url: `${config.urls.api}onboardingStatus`})
    }
    const enodeConnect = async () => {
        const data = await axios({url: `${config.urls.api}connect`})
    }
    useEffect(() => {
        getData()
    }, [])



    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <EncodePopup show={displayEnodeWindow} setShow={() => {
                    setDisplayEnodeWindow(false)
                }} />
                <h3>Hello Antonio</h3>
                <h2>2 steps to charge your EV</h2>
                <ul>
                    <li>
                        <h3>Sign-up</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
                    </li>
                    <li>
                        <h3>Connect your EV</h3>
                        <p>To connect to your EV we do use Enode, a telematics service that will allow us to know when your EV is charging at home.</p>
                    </li>
                    <li>
                        <h3>Identify home charge location</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
                    </li>
                </ul>
                <h3>Charge your EV</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquamLorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
                <button onClick={() => {
                    enodeConnect()
                    setDisplayEnodeWindow(true)
                }}>Get started at Enode</button>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
                </a>
            </footer>
        </div>
    )
}