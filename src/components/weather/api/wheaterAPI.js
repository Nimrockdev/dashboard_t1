import axios from "axios";



const wheaterAPI = axios.create({
    //baseURL: 'https://api.openweathermap.org/data/2.5/weather?lat=41.3&lon=2.0167&appid=52d74726c8c4f3f652068bfe593e2684&units=metric&lang=en',
    baseURL: 'https://api.openweathermap.org/data/2.5/weather?appid=52d74726c8c4f3f652068bfe593e2684&lang=sp&units=metric&',

});



export { wheaterAPI };