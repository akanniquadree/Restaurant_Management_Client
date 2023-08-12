
export const Reducer = (state, action) =>{
    switch (action.type) {
        case "LOGIN_START":
            return{
                isFecting:true,
                user:null,
                error:null
            }
        case "LOGIN_SUCCESS":
            return{
                isFecting:false,
                user:action.payload,
                error:null
            }
        case "LOGIN_SUCCESS":
            return{
                isFecting:false,
                user:null,
                error:action.payload
            }
    
        default:
           return state;
    }
}