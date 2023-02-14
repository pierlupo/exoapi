import axios from "axios";

// const data = []
// export const getData = () => new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve(data)
//     },5000)
// })

const urlapi = "http://localhost:8080/Clients"

export const getInfoApiZip = () => {
    return axios.get(urlapi)
}