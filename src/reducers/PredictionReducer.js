import { getByCords,getByCityName,get3Days } from "../api/axios";


const GET_BYCORDS = "GET_BYCORDS"
const GET_BYNAME = "GET_NAME"
const GET_3DAYS = "GET_3DAYS"

const initialState = {  
    cords:{}, 
    predic: {},
    treedays: [] 
    }

export default function predictionReducer(state = initialState, action) {
    switch (action.type) {
        case GET_BYCORDS:          
            return ({...state, predic: action.payload}); 
        case GET_BYNAME:          
            return ({...state, cords: action.payload});
        case GET_3DAYS:
            return ({...state, treedays: action.payload})
    default:
        return state;
    }
}

export const GetByCity =(city,country) => (dispatch) => {
    getByCityName(city,country).then((results) => {

        const cords = {
            lat: results.data[0].lat,
            lon:results.data[0].lon
        }
        console.log("#############" + cords.lon)
        console.log("#############" + cords.lat)
        dispatch({
            type: GET_BYNAME,
            payload:cords
            
        }) 
    })
}
export const GetByCords = (lat,lon) => (dispatch) =>{
    
    getByCords(lat, lon).then((results) => {

        const predic = {
            desc: results.data.weather[0].description,
            temp: results.data.main.temp
            }
        console.log("#############" + predic.desc)
        console.log("#############" + predic.temp)
        dispatch({
            type: GET_BYCORDS,
            payload: predic            
        }) 
    })
}
export const Get3Days = (lat,lon) => (dispatch) =>{
    get3Days(lat,lon).then((results) =>{

        const treedays = [results.data.list];
        console.log("#############" + treedays)
        dispatch({
            type: GET_3DAYS,
            payload: treedays
        })
    })
}





