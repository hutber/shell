import React, {useEffect, useState} from 'react';
import config from "config";

import styles from 'styles/EncodePopup.module.css'

interface EncodePopup {
    show?: boolean
    setShow: () => void
}

export default function EncodePopup({show = false, setShow}: EncodePopup) {
    if(typeof window !== typeof undefined) {
        window.addEventListener("message", (event) => {
            if(!event.isTrusted){
                setShow()
            }else {
                console.info('forward')
                window.location.href=config.urls.connectedToEncode
            }
            if (event.origin !== config.urls.root)
                return;
        }, false)
    }

    if (!show) return null
    return (
        <div className={styles.encodePopup}>
            <iframe src={`${config.enode.enodeOauth}${config.enode.enodeOauthLinkState}${config.enode.enodeOauthScope}${config.enode.enodeOauthRedirect}${config.urls.iframeCompleted}`}/>
        </div>
    )
}
