import styles from 'styles/EncodePopup.module.css'

export default function Home() {
    if (typeof window !== typeof undefined) {
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
