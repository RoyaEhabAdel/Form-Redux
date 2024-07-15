import { errorUser, startUser, successUser } from "./UserSlice"
import axios from 'axios';

export const postUser = async(user, dispatch) => {
    dispatch(startUser());


    try{
        const res = await axios.post("http://localhost:5000/api/users", user)

        dispatch(successUser(res.data))

    }catch(error){
        dispatch(errorUser())
    }
}