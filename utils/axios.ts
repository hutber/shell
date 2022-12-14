import { default as RQAxios } from 'axios'
import config from '../config/urls.json'
import getIdToken from "utils/get_id_token";

export const axios = async ({
    url = `${config.api}`,
    body = {},
    method = 'GET',
    headers = {}
}) => {
    try {
        const currentlyActiveSessionToken = getIdToken()

        //Build up the object that is passed to fetch api
        let fetchObject = {
            url: `${url}`,
            ...(method === 'GET' ? {} : body),
            method,
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${currentlyActiveSessionToken}`,
                'Content-Type': 'application/json',
                ...headers
            }
        };

        //Make API call
        const response = await RQAxios(fetchObject);
        console.info(response)

        return response;
    //     const originalResponseStatus = response;
    //     //Safely handle any requests that aren't in json so we don't get caught in a promise hole
    //     const responseBody = whenMatchedForceAPIBodyToBeObject.includes(originalResponseStatus.status) ? {} : await response.json();
    //     let responseObject = {
    //         status: originalResponseStatus.status,
    //         headers: originalResponseStatus.headers ? originalResponseStatus.headers : null,
    //         body: responseBody
    //     };
    //
    //     //If the token has expired throw user out, currently 1h
    //     if (responseObject.body.message === anonReponses.throwUserOut) throwUserBackToStart();
    //
    //     // if response contains a new token update old one, happs
    //     if (responseObject.body.token) sessionStorage.setItem('token', JSON.stringify(responseObject.body.token));
    //
    //     //If the request didn't have a valid token, go and fetch one
    //     if (responseObject.body.message === apiGenric.missingAUthToken && !currentlyActiveSessionToken) {
    //         const anonRequest = await apiFetch(`${apiEndpoints.anon_api_base_url}/token`);
    //         sessionStorage.setItem('token', JSON.stringify(anonRequest.body));
    //
    //         //Build up signed headers with new token
    //         const signedContent = awsSignedHeaderGenerator(fetchObject, anonRequest.body);
    //         const afterTokenResponse = await apiFetch(url, dispatch, body, method, signedContent.headers);
    //
    //         responseObject = {
    //             status: afterTokenResponse.status,
    //             headers: afterTokenResponse.headers ? afterTokenResponse.headers : null,
    //             body: afterTokenResponse.body
    //         };
    //     }
    //
    } catch (response) {
        console.error(response);
        return response;
    }
    // return queryResponse
}
