import { getPredictions } from "../api/axios";




const initialState = {    
    predic: {}
}

export default function predictionReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PREDICTION:
            console.log("###### payload " + action.payload)
            return ({...state, predic: action.payload});            
    default:
        return state;
    }
}
const GET_PREDICTION = "GET_PREDICTION"
export const getPredictionsAction = (lat, lon) => (dispatch)  => {
    
    getPredictions(lat, lon).then((results) => {
        //guardo los objetos de el resultado de la peticion en un objeto

        dispatch({
            type: GET_PREDICTION,
            payload: results.data,
            
        }) 
    })
}
