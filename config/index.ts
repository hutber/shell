import urls from "./urls.json";
import enode from "./enode.json";

export enum OnboardingStatus {
    LINK = 'LINK',
    VEHICLE_MATCHING = 'VEHICLE_MATCHING',
    CHARGING_LOCATION_MATCHING = 'CHARGING_LOCATION_MATCHING',
    COMPLETE = 'COMPLETE',
}

export default {
    urls,
    enode
}
