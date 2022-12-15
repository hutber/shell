import styles from 'styles/EncodePopup.module.css'
import { useRouter } from "next/router";

export default function IFrameCompleted() {
    const router = useRouter()
    if (typeof window !== typeof undefined) {
        console.info('hutber', {router, query: router.query})
        // @ts-ignore
        localStorage.setItem('auth', JSON.stringify(router?.query))
        setTimeout(() => {
            window.parent.postMessage(true,"*");
        }, 250)
    }

    return (
        <div className={styles.encodePopup}>
            <span>Processing please wait...</span>
        </div>
    )
}
