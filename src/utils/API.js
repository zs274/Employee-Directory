import axios from "axios";
const URL = "https://randomuser.me/api/?inc=phone,name,email,picture";

export default {
    search: function() {
        return axios.get(URL);
    }
};