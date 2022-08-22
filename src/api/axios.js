import axios from 'axios'


export const getByCords = (lat, long) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&lang=es&appid=898f6e81239ad2285cfbaca38135f740`)
}


export const getByCityName = (city,country = "UY") => {
    return axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=5&appid=5cce8160a0e13202538fcc384656e37b`)
}


export const get5Days = (lat, long) => {
    return axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=5cce8160a0e13202538fcc384656e37b`)
}