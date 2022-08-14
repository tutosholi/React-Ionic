import axios from "axios";

export const getPredictions = (ciudad) => {
    return axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},UY&appid=898f6e81239ad2285cfbaca38135f740`)
}


export const getPredictions2 = (lat, long) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&lang=es&appid=898f6e81239ad2285cfbaca38135f740`)
}