import axios from "axios";

const instance = axios.create({
	baseURL: 'http://localhost:2205',
})

export default instance;