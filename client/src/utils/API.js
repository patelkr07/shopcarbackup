import axios from "axios";



export default {

    getCar: function(query) {
        return axios.get("http://marketcheck-prod.apigee.net/v1/search?api_key=" + process.env.REACT_APP_MARKETCHECK_KEY + "&make=" + query);

    },
    
    getVideo: function(query) {
        return axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + query + "&key=" + process.env.REACT_APP_YOUTUBE_KEY)
    }

}