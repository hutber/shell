function base64url(source) {
    // Encode in classical base64
    let encodedSource = btoa(source);

    // Remove padding equal characters
    encodedSource = encodedSource.replace(/=+$/, '');

    // Replace characters according to base64url specifications
    encodedSource = encodedSource.replace(/\+/g, '-');
    encodedSource = encodedSource.replace(/\//g, '_');

    return encodedSource;
}

export default function getIdToken(){
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
