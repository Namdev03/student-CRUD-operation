import axios from "axios";
const authentictionIntace = axios.create({
    baseURL:"http://localhost:9000/"
})
export default authentictionIntace;