import axios from "axios";

export const jpAxios = axios.create({
   baseURL : 'https://jsonplaceholder.typicode.com',
//    headers : {
//     Authorization : 'Bearer 5xghxfccvx65nxcvnhgmj2zb65 ...' ,
//     "Content-Type" : "application/json"
//    },
   timeout : 5000 ,
   timeoutErrorMessage : "زمان پاسخ گویی بیش از 5 ثانیه طول کشید ...!"
})