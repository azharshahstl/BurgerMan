import axios from 'axios'; 

let instance = axios.create({
   baseURL: "https://hammy-hammy-default-rtdb.firebaseio.com/"
})

export default instance;