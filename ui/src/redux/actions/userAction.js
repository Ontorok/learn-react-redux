import axios from "axios"
import { onUpdateFailed, onUpdateStart, onUpdateSuccess } from "../slices/userSlice"

export const updateUser = async (userInfo, dispatch) => {
    dispatch(onUpdateStart())
    try {
        const res = await axios.post('http://localhost:4000/api/users/1/update', userInfo)
        dispatch(onUpdateSuccess(res.data))
    } catch (err) {
        dispatch(onUpdateFailed(err.message))
    }
}