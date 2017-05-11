import { LOGIN, LOGOUT } from '../actions/type';

const INITIAL = {
    loggedIn: false,
    userdata    : {
        username: null
    },
}
export default (state=INITIAL,action) => {
    switch(action.type){
        case LOGIN :
            return {
                ...state,
                loggedIn:true,
                username: action.payload,
            };
        break;
        break;
        case LOGOUT :
            return {
                state:INITIAL
            };    
        break;
        
        default :
            return state;
    }
}