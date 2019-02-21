import _ from 'lodash'

const StreamReducer = (state={}, action) => {

        switch(action.type){

            case 'Create_Stream' : 
                return {...state, [action.payload.id] : action.payload};
            
            case 'Fetch_Stream' : 
                return {...state, [action.payload.id] : action.payload};
            
            case 'Edit_Stream' :
                return {...state, [action.payload.id] : action.payload};    
                
            case 'Delete_Stream' :
                return _.omit(state,action.payload)   

            default :
                return state;    
        }


}


export default StreamReducer;