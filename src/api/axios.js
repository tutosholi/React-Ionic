import axios from 'axios'


export const getPredictions = (lat, long) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&lang=es&appid=898f6e81239ad2285cfbaca38135f740`)
}