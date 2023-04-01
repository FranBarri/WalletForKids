import axios from "axios";


export const loginProcess=async(userCrentials,dispatch)=>{
    dispatch({type:'LOGIN_START'})
    try{
     const response=await axios.post('http://localhost:5050/auth/loginKids',userCrentials)
        dispatch({type:'LOGIN_SUCCESS',payload:response.data},window.sessionStorage.setItem('session',JSON.stringify(response.data.token)))
    }
    catch(err){
        dispatch({type:'LOGIN_FAILURE',payload:err.response.data.message,})
            }
}


export const logoutProcess=async(dispatch)=>{
    try{
        dispatch({type:'LOGIN_START',payload:null})
        window.sessionStorage.setItem('session',null)
    }
    catch(err){
        console.log(err)
    }
}
export const registerProcess = async (userCrentials, dispatch) => {
    dispatch({ type: 'REGISTER_START' });
    try {
        const response = await axios.post('http://localhost:5050/auth/kidsRegistration',userCrentials);
        dispatch({ type: 'REGISTER_SUCCESS', payload: response.data });
    } catch (err) {
        dispatch({ type: 'REGISTER_FAILURE', payload: err.response.data.message });
    }
}
