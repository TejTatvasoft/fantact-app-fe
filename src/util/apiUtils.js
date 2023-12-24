import axios from "axios";
const API_URL = "https://swapi.dev/api/films/";

const ApiUtils = {

    getDashBoardData: () => {
        const headers = {
            'Content-Type': 'application/json'
        };
        return axios.get(API_URL, null, {
            headers: headers
        })
            .then(response => {
                console.log(response);
                if (response && response.data) {
                    return response.data
                }
            })
            .catch(error => {
                if (error && error.response && error.response.data)
                    throw error.response.data
            });
    }

}

export default ApiUtils;