import axios from 'axios';
const API_URL = "http://127.0.0.1:5000/users";
export const addUser = async (data) => {
   try{
    return await axios.post(API_URL , data)
   }catch(error){
    console.log("Error comes while adding user" , error.message)
   }
}
export const getUsers = async () => {
    try {
       return  await axios.get(API_URL)
    } catch (error) {
        console.log("Error comes while calling user" , error.message)
    }

}
