import { getPredictions } from "../api/axios";

const initialState = {    
    predic: {}
}

export default function predictionReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PREDICTION:
            return ({...state, predic: action.payload});            
    default:
        return state;
    }
}
const GET_PREDICTION = "GET_PREDICTION"
export const getPredictionsAction = (lat, lon) => (dispatch)  => {
    
    getPredictions(lat, lon).then((results) => {
        //guardo los objetos de el resultado de la peticion en un objeto
        const predic = {
            wheather: results.data.weather,
            main: results.data.main,
            visibility: results.data.visibility,
            wind: results.data.wind,
            clouds: results.data.clouds,
            sys: results.data.sys        
        }
        dispatch({
            type: GET_PREDICTION,
            payload: predic           
        }) 
    })
}
