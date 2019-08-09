import axios from "axios";

export default {
    getRandomCar: function() {
        return axios.get("https://cars.jpeg")
    },
    getCarsOfMake: function(make) {
        return axios.get("https://cars.jpeg/" + make + "/images");
    },
    getBaseMakeList: function() {
        return axios.get("https://cars.jpeg");
    }
};