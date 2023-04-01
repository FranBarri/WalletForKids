const RegisterReducer=(state,action)=>{
    switch(action.type){
        case "REGISTER_START":
            return {
                user:null,
                isFetching:true,
                error:false
            }
        default:
            return(
                state
            )

        case "REGISTER_FAILURE":
            return({
                user:null,
                isFetching:false,
                error:action.payload
            })


        case "REGISTER_SUCCESS":
            return({
                user:action.payload,
                isFetching:false,
                error:false
            })
    }
}

export default RegisterReducer
