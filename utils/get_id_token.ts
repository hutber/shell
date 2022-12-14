function base64url(source: string) {
    // Encode in classical base64
    let encodedSource = btoa(source);

    // Remove padding equal characters
    encodedSource = encodedSource.replace(/=+$/, '');

    // Replace characters according to base64url specifications
    encodedSource = encodedSource.replace(/\+/g, '-');
    encodedSource = encodedSource.replace(/\//g, '_');

    return encodedSource;
}

function generateIdToken(){
    const header = {
        "alg": "HS256",
        "typ": "JWT"
    };

    const stringifiedHeader = JSON.stringify(header);
    const encodedHeader = base64url(stringifiedHeader);

    const data = {
        "sub": "abc1234",
    };

    const stringifiedData = JSON.stringify(data);
    const encodedData = base64url(stringifiedData);

    return encodedHeader + "." + encodedData;
}


export default function getIdToken(){
    const currentLocalSessionId = sessionStorage.getItem('idToken')
    if(currentLocalSessionId) {
        return currentLocalSessionId
    } else {
        sessionStorage.clear();
        //pretend refresh from congito
        const currentSessionToken = generateIdToken()
        sessionStorage.setItem('idToken', currentSessionToken)
        return currentSessionToken
    }
}
