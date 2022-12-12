import React, {useEffect, useState} from 'react';
import config from "config";

import styles from 'styles/EncodePopup.module.css'

interface EncodePopup {
    show?: boolean
    setShow: (showHide: Boolean) => {}
}

export default function EncodePopup({show = false, setShow}: EncodePopup) {
    const iframeRef = React.createRef();
    if(typeof iframeRef !== "null" && typeof window !== typeof undefined) {
        window.addEventListener("message", (event) => {
            setShow(!event.isTrusted)
            if (event.origin !== config.urls.root)
                return;
        }, false)
    }

    if (!show) return null
    return (
        <div className={styles.encodePopup}>
            <iframe src={config.urls.enodeOauth} ref={iframeRef}/>
        </div>
    )
}
