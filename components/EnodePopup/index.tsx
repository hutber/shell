import React, {useEffect, useState} from 'react';
import config from "config";

import styles from 'styles/EncodePopup.module.css'

interface EncodePopup {
    show: boolean
}

export default function EncodePopup({show = true}: EncodePopup) {
    const [display, setDisplay] = useState(show)
    const iframeRef = React.createRef();
    console.info(iframeRef)
    if(typeof iframeRef !== "null" && typeof window !== typeof undefined) {
        window.addEventListener("message", (event) => {
            setDisplay(!event.isTrusted)
            if (event.origin !== config.urls.root)
                return;
        }, false)
    }

    if (!display) return null
    return (
        <div className={styles.encodePopup}>
            <iframe src={'/enode_finished'} ref={iframeRef}/>
        </div>
    )
}
