import axios from "axios";

export default axios.create({
    baseURL: "http://localhost/app_server/exp_transcript/react_api"
})