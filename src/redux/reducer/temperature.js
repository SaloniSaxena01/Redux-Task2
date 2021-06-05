const initialState = {
    temp: ''
}

const temprature = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TEMPERATURE_SUCCESS':
            return {
                temp: action.payload,
            }
        default: return state
    }
}

export default temprature;