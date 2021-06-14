const initialState = {
    counter : 0
}


const LoginReducer = (state = true, action)=>{
    switch (action.type){
        case 'LOGIN':
            return !state;
        default:
            return state
    }
}

export default LoginReducer;