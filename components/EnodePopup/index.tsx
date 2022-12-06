import config from "config";

import styles from 'styles/EncodePopup.module.css'

interface EncodePopup {
    show: boolean
}

export default function EncodePopup({show = true}: EncodePopup) {
    if (!show) return null
    return (
        <div className={styles.encodePopup}>
            <iframe src={config.urls.enodeOauth} />
        </div>
    )
}
