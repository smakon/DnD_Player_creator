import axios from "axios";

const instance = axios.create({
	baseURL: 'http://192.168.1.249:2205',
})

export default instance;