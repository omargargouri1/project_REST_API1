import axios from 'axios'
import EditUser from '../components/EditUser'
import { ADD_USERS, DELETE_USERS, EDIT_USERS, GET_USERS } from './actionTypes'


export const getUser = ()=> async(dispatch)=>{
    try {
        const res = await axios.get('/viwUser')
        console.log(res)
        dispatch({
            type:GET_USERS,
            payload:res.data

        })
    } catch (error) {
        alert ('get error')
    }
}
export const deleteUser = (id)=>async(dispatch)=>{
    try {
        const res = await axios.delete(`/deleteUser/${id}`)
        dispatch({
            type:DELETE_USERS,
            payload:id
        })
    } catch (error) {
        alert ('delete error')
        
    }
}
export const addUser = (newUser)=>async(dispatch)=>{
    try {
        const {data}= await axios.post('/addUser',newUser)
        dispatch({
            type:ADD_USERS,
            payload:data
        })
    } catch (error) {
        alert ('add error')
    }
}
export const editUser = (id,name,email,phone)=>async(dispatch)=>{
    const editedUser = {
        id,
        name,
        email,
        phone
    }
    try {
        const {data}=await axios.put(`/editUser/${id}`,editedUser)
        dispatch({
            type:EDIT_USERS,
            payload:{
                id,
                data

            }

        })
        
    } catch (error) {
        alert('Edit.error')
        
    }
}