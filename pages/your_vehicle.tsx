import {useEffect, useState} from "react";
import Head from 'next/head'

import styles from 'styles/Home.module.css'
import Loading from 'components/Loading'
import {axios} from "utils/axios";
import config from "config";
import Link from "next/link";
import getIdToken from "utils/get_id_token";

export default function YourVehicle() {
    const [queryData, setQueryData] = useState(null)
    const getData = async () => {
        const id_token = getIdToken();
        const data = await axios({url: `${config.urls.api}associateVehicle`, method: 'POST', body: {
                id_token
            }})
        // @ts-ignore
        setQueryData(data.data)
    }
    useEffect(() => {
        getData()
    }, [])

    return queryData ? <div>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
            <h2>We found your vehicle</h2>
            <h4>Brand: {queryData?.vehicle?.brand}</h4>
            <h4>Model: {queryData?.vehicle?.model}</h4>
            <h4>Year: {queryData?.vehicle?.year}</h4>
            <Link href={`/setup_charging_location_part_1`} passHref legacyBehavior><button>Setup Charging Location</button></Link>
        </main>
    </div> : <Loading />
}
