import { createContext, useEffect, useReducer } from "react"
import LoginReducer from "./LoginReducer"
import RegisterReducer from "./RegisterReducer"

const initialState={
    user:JSON.parse(sessionStorage.getItem('session')) || null,
    isFetching:false,
    error:false
}
const InitialregistrationState={
    user: null,
    isFetching: false,
    error: false
}
export const AuthContext=createContext(initialState)



export const AuthContextProvider=({children})=>{
    const [state, dispatch]=useReducer(LoginReducer,initialState)
    const [registrationState,dispatchRegistration]=useReducer(RegisterReducer,InitialregistrationState)
    useEffect(()=>{
        sessionStorage.setItem('session',JSON.stringify(state.user))
    },[state.user,registrationState.user])
   
    return(
        <AuthContext.Provider value={{user:state.user,isFetching:state.isFetching,error:state.error,dispatch:dispatch,registrated_user:registrationState.user,registration_error:registrationState.error,dispatchRegistration}}>

            {children}

        </AuthContext.Provider>
    )

}