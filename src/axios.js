import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://cookies-builder.firebaseio.com";


export default instance;
