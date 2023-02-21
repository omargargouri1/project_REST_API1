const { GET_USERS, DELETE_USERS,ADD_USERS, EDIT_USERS } = require("./actionTypes")


const init ={
    users:[],
    loading:true,
    error:null,
    msg:null
}


const reducer=(state=init,{type,payload})=>{
    switch (type) {
        case GET_USERS:
            return{
                ...state,users:payload,
                loading:false,
            }
         case DELETE_USERS:
             return{
                 ...state,loading:false,users:state.users.filter(el=>el._id!==payload)
             }
        case ADD_USERS:
            return{
                ...state,users:[...state.users,payload]
            }
            case EDIT_USERS:
                return{
                    ...state,users:state.users.map(el=>el._id===payload.id?payload.data:el)
                }

            
        
    
        default:
            return state
    }
}

export default reducer