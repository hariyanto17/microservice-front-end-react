import { POPULATE_PROFILE } from "constants/types/users";

const initialState = null

export default function (state = initialState, action) {
    switch (action.type) {
        case POPULATE_PROFILE:
            return action.payload
    
        default:
            return state;
    }
}