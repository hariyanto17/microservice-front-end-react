import {POPULATE_PROFILE} from "constants/types/users"

export const populateProfile = (profile = {}) => ({
    type: POPULATE_PROFILE,
    payload: profile,
});