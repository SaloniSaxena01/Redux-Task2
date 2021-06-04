import {
    FETCH_TEMPERATURE_REQUEST,
    FETCH_TEMPERATURE_SUCCESS, 
    FETCH_TEMPERATURE_FAILURE
} from './temperatureTypes'



export const fetchTemperatureSuccess = temp => {
    return {
        type: FETCH_TEMPERATURE_SUCCESS,
        payload: temp
    }
}


