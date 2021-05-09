import axios from "axios";
const URL = "https://randomuser.me/api/?results=100&nat=gb";

export default {
    getUsers: function() {
        return axios.get(URL);
    }
};