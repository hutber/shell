import Head from 'next/head'
import {useEffect, useState} from "react";
import Image from 'next/image'

import { axios } from "utils/axios";
import Loading from "components/Loading";
import config, { OnboardingStatus } from "config";

interface IOnBoardingStatus {
    data: {
        status: OnboardingStatus
    }
}

export default function Index() {
    const apiConnect = async () => {
        const { data } = await axios({url: `${config.urls.api}onboardingStatus`}) as IOnBoardingStatus

        if(data?.status === OnboardingStatus.LINK) {
            window.location.href=config.urls.home
        } else if(data?.status === OnboardingStatus.VEHICLE_MATCHING) {
            window.location.href=config.urls.vehicleMatching
        } else if(data?.status === OnboardingStatus.CHARGING_LOCATION_MATCHING) {
            window.location.href=config.urls.chargingLocationMatching
        } else if (data?.status === OnboardingStatus.COMPLETE) {
            window.location.href=config.urls.complete
        }
    }

    useEffect(() => {
        apiConnect()
    }, [])


    return <Loading />
}
