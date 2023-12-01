import axios from "axios";
import Cookies from "universal-cookie";
import {useNavigate} from 'react-router-dom'

const auth = () => {
    const cookies = new Cookies()

    const login = (data) => {
        const bodyReq = `grant_type=password&username=${data.username}&password=${data.password}`
        axios .post(`${process.env.REACT_APP_API}/oauth/token`, bodyReq,
        {
            headers: {
                Authorization: 'Basic ' + btoa(`${process.env.REACT_APP_USERNAME}:${process.env.REACT_APP_PASSWORD}`),
                'Content-Type' : 'application/x-www-form-urlencoded'
            }
        })
        .then((response)=>{
            console.log('this is res', response)
            const token = response.data.access_token
            console.log(token)
            const refreshToken = response.data.refresh_token
            const message = response.statusText

            if (response.status === 200){
                sessionStorage.setItem("authToken", token)
                sessionStorage.setItem("refresh", token)
                window.location="/admin/dashboard"
            }else{
                alert(message)
            }
        })
        .catch((error) => console.log(error))
    }

    const logout = (setUserInfo, callback) => {
        axios 
        .post(`${process.env.REACT_APP_API}/oauth/token/logout`)
        .then((response) => {
            console.log('this is res', response)

            if(response.status === 200){
                setUserInfo(null)
                sessionStorage.clear()
                console.log('logged out')
                callback()
            }
        })
        .catch((error) => alert(error))
    }

    return{
        login,
        logout
    }
}

export default auth