import axios from "axios";
const URL = "https://randomuser.me/api/?inc=gender,name,email,picture";

export default {
    search: function() {
        return axios.get(URL);
    }
};