import axios from "axios"

const axiosWithAuth = () => {
    const token = localStorage.getItem('token')
//purring token into header so axioswithauth can be used to run api calls
    return axios.create({
        baseURL: 'http://localhost:5000/api',
        headers: {
            Authorization: token
        }
    })
}

export default axiosWithAuth 