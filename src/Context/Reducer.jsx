
export const Reducer = (state, action) =>{
    switch (action.type) {
        case "LOGIN_START":
            return{
                isFetching:true,
                user:null,
                error:null
            }
        case "LOGIN_SUCCESS":
            return{
                isFetching:false,
                user:action.payload,
                error:null
            }
        case "LOGIN_FAILURE":
            return{
                isFetching:false,
                user:null,
                error:action.payload
            }
        case "LOGOUT":
            return{
                isFetching:false,
                user:null,
                error:null
            }
    
        default:
           return state;
    }
}