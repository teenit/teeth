import axios from "axios";

export function serverAdress(arg){
    return "https://zuki.people-ua.org/gt/" + arg;
 }
 export async function api(obj, url){
   return await axios({
         url: serverAdress(url),
         method: "POST",
         header: {'application/x-www-form-urlencoded': 'application/json;charset=utf-8'},
         data: JSON.stringify(obj)
     })
     .then((data)=>{
         console.log("Received data: ", data);
         return data.data
     })
     .catch((error)=>{
         console.log(error)
     })
 }
 