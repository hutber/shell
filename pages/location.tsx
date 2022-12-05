import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1>Where at home do you charge your EV?</h1>
                <p>In order to monitor your consumption we need to understand where exactly do you charge at home. </p>
                <p>The blue dot on the map is your current EV location.</p>
                <h6>Click/tap on the map to define your home charging point location.</h6>
                <img src="  https://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672&format=gif&zoom=14&size=400x400&key=YOUR_API_KEY&signature=YOUR_SIGNATURE" />
                <button>Confirm location</button>
                <h6>Can't point your charging point on the map?</h6>
                <p>If you having an issues in pointing your charging point on the map please call one of our support agent to help.</p>
                <p>Support number 0330 094 5800</p>
                <p>Lines are open from 8am to 6.30pm Monday to Friday, and 9am to 4pm on Saturday.</p>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
                </a>
            </footer>
        </div>
    )
}
