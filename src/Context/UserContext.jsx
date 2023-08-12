import { createContext, useReducer } from "react"
import { Reducer } from "./Reducer"

const INITIAL_STATE = {
    isFetching:false,
    user:null,
    error:null
  }
export const AuthContext = createContext(INITIAL_STATE)

export const UserContext = ({children}) =>{
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE)
    return(
        <AuthContext.Provider 
            value={{
                isFetching:state.isFetching,
                user:state.user,
                error:state.error,
                dispatch
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}