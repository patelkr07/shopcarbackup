import axios from "axios";

export default {

    getCar: function(req, res) {
        return axios.get("http://marketcheck-prod.apigee.net/v1/search?api_key=" + process.env.MARKETCHECK_KEY + "&make=", { params: req.query });

    },
    
    getVideo: function(req, res) {
        return axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q=cars&key=", { params: req.query })
    }

}












// import axios from "axios";

// export default {
//     getRandomCar: function() {
//         return axios.get("https://cars.jpeg")
//     },
//     getCarsOfMake: function(make) {
//         return axios.get("https://cars.jpeg/" + make + "/images");
//     },
//     getBaseMakeList: function() {
//         return axios.get("https://cars.jpeg");
//     }
// };




// export default {
//     getCar: function(query) {
//         return axios.get("/api/cars", { params: { q: query } });
//     }
// };