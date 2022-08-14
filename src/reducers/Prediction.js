import getPredictions from "axios";


const GET_PREDICTION = "GET_PREDICTION"



export const getPredictionsActions = () => (dispatch)  => {
    
    getPredictions(city).then((results) => {
        dispatch({
            type: GET_PREDICTION,
            payload: results.data.results
        }) 
    })
}


const initialState = {
     
     lat: '',
     lon:'',
     
     
}

export default function predictionReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PREDICTION:
            return ({...state, predictionsList: action.payload})
        default:
            return state;
    }
}