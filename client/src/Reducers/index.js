import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as formReducer} from 'redux-form';
import StreamReducer from './StreamReducer';

export default combineReducers(
    {
        auth : authReducer,
        form : formReducer,
        Streams : StreamReducer
    }

)


