const INIT_STATE = {
    isSignedIn : null

};

export default (state = INIT_STATE, action) => {

    switch(action.type){
            case 'Sign_In' :
                  return {...state, isSignedIn : true};

            case 'Sign_Out' :
                  return {...state, isSignedIn : false};

            default:
                   return state;
    }
}