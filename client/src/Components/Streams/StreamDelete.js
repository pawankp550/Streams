import React from 'react';
import Modal from '../Modal';
import History from '../../history';

const StreamDelete = () => {
    const action = (
            <div>
                <button className='ui teal button'>Delete</button>
                <button className='ui button'>Cancel</button>
            </div>
    ) 

    const onDismiss = () => {
         History.push('/');
    }
    return(
           <div>
                StreamDelete
                <Modal 
                    header = 'Delete Stream'
                    content = 'Do you really want to delete?'
                    action = {action}
                    onDismiss = {onDismiss}
                />
            </div>
    )

}

export default StreamDelete;