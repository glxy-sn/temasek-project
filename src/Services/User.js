import axios from 'axios';
import Cookies from "universal-cookie";

const user = () => {
    const cookies = new Cookies();
    const accessToken = sessionStorage.getItem("authToken");

}

export default user