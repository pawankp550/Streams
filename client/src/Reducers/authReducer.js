const INIT_STATE = {
    isSignedIn : null

};

export default (state = INIT_STATE, action) => {

    switch(action.type){
            case 'Sign_In' :
                  return {...state, isSignedIn : true, userId : action.payload};

            case 'Sign_Out' :
                  return {...state, isSignedIn : false, userId : null};

            default:
                   return state;
    }
}