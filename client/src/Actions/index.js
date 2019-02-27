import streams from '../Apis/streams';
import history from '../history';
export const signIn = (userId) => {
    return {
        type : 'Sign_In',
        payload : userId
    }
}

export const signOut = () => {
    return {
        type : 'Sign_Out'
    }
}

export const createStream = (formValues) => {
    
    

    return async (dispatch, getState) => {
           const { userId } = getState().auth;
           const response = await streams.post('/streams', {...formValues , userId} );
           
           dispatch({
               type : 'Create_Stream',
               payload : response.data
           });

           history.push('/');

    };
}

export const fetchStreams = () => {
    return async (dispatch) => {
           const response = await streams.get('/streams');
           
           dispatch({
               type : 'Fetch_Streams',
               payload : response.data
           });

    };
}


export const fetchStream = (id) => {
    return async (dispatch) => {
           const response = await streams.get(`/streams/${id}`);
           
           dispatch({
               type : 'Fetch_Stream',
               payload : response.data
           });
    };
}

export const editStream = (id, formValues) => {
    
    return async (dispatch, getState) => {
        const { userId } = getState().auth;
           const response = await streams.put(`/streams/${id}`, { ...formValues, userId} );
           
           dispatch({
               type : 'Edit_Stream',
               payload : response.data
           });

           history.push('/');

    };
}

export const deleteStream = (id) => {
    return async (dispatch) => {
           const response = await streams.delete(`/streams/${id}`);
           
           dispatch({
               type : 'Delete_Stream',
               payload : id
           });
    };
}