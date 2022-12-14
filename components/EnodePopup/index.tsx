import React, {useEffect, useState} from 'react';
import config from "config";

import styles from 'styles/EncodePopup.module.css'

interface EncodePopup {
    show?: boolean
    setShow: (showHide: Boolean) => {}
}

export default function EncodePopup({show = false, setShow}: EncodePopup) {
    const iframeRef = React.createRef();
    if(iframeRef && typeof window !== typeof undefined) {
        window.addEventListener("message", (event) => {
            console.info(event)
            if(!event.isTrusted){
                setShow(false)
            }else {
                console.info('forward')
                window.location.href='/enode_connection_status_check'
            }
            if (event.origin !== config.urls.root)
                return;
        }, false)
    }

    if (!show) return null
    return (
        <div className={styles.encodePopup}>
            <iframe src={`${config.enode.enodeOauth}${config.enode.enodeOauthLinkState}${config.enode.enodeOauthScope}${config.enode.enodeOauthRedirect}`} ref={iframeRef}/>
        </div>
    )
}
