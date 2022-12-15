import { useEffect } from "react";
import Head from 'next/head'
import config from "config";

import styles from 'styles/Home.module.css'
import {axios} from "utils/axios";
import getIdToken from "utils/get_id_token";

export default function VehicleMatching() {
    const getData = async () => {
        const id_token = getIdToken();
        const data = await axios({url: `${config.urls.api}associateVehicle`, method: 'POST', body: {
                id_token
            }})
        // @ts-ignore
        if(data?.status === 200) {
            window.location.href=config.urls.chargingLocationMatching
        }
    }
    useEffect(() => {
        getData()
    }, [])

    return <div>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
            <h2>Fetching your vehicle...</h2>
        </main>
    </div>
}