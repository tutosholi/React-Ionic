import { getByCords,getByCityName,get5Days } from "../api/axios";


const GET_BYCORDS = "GET_BYCORDS"
const GET_BYNAME = "GET_NAME"
const GET_3DAYS = "GET_3DAYS"


const initialState = {  
    cords:{}, 
    predic: {},
    fiveDays: []
}

export default function predictionReducer(state = initialState, action) {
    
    switch (action.type) {
        case GET_BYCORDS:          
            return ({...state, predic: action.payload}); 
        case GET_BYNAME:          
            return ({...state, cords: action.payload});
        case GET_3DAYS:
            return ({...state, fiveDays: action.payload})
    default:
        return state;
    }
}

export const GetByCity =(city,country) => (dispatch) => {
    getByCityName(city,country).then((results) => {
        
        const cords4 = {
            lat: results.data[0].lat,
            lon:results.data[0].lon
        }
        console.log("#############" + cords4.lon)
        console.log("#############" + cords4.lat)
        dispatch({
            type: GET_BYNAME,
            payload:cords4
            
        }) 
    })
}
export const GetByCords = (lat,lon) => (dispatch) =>{
    
    getByCords(lat, lon).then((results) => {

        const predic = {
            desc: results.data.weather[0].description,
            temp: results.data.main.temp,
            icon: results.data.weather[0].icon
            }
        console.log("#############" + predic.desc)
        console.log("#############" + predic.temp)
        console.log("#############" + predic.icon)
        dispatch({
            type: GET_BYCORDS,
            payload: predic            
        }) 
    })
}
export const Get5Days = (lat,lon) => (dispatch) =>{
    get5Days(lat,lon).then((results) =>{

        const fiveDays = results.data.list;
        console.log("#############" + fiveDays)
        dispatch({
            type: GET_3DAYS,
            payload: fiveDays
        })
        
    })
}





