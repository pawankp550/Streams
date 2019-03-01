import React from 'react';
import Modal from '../Modal';
import History from '../../history';
import {  NavLink  } from 'react-router-dom';
import { deleteStream, fetchStream } from '../../Actions'
import { connect } from 'react-redux';

class StreamDelete extends React.Component {
     streamId = this.props.match.params.id;

    componentDidMount(){
        this.props.fetchStream(this.streamId);
    }

    StreamDelete(){

        this.props.deleteStream(this.streamId);
    }

     action = (
            <div>
                <button onClick={() => this.StreamDelete()} className='ui teal button'>Delete</button>
                <NavLink to='/' className='ui button'>Cancel</NavLink>
            </div>
    ) 

     onDismiss = () => {
         History.push('/');
    }
    
    renderContent = () =>{
        if(!this.props.stream){
            return `Do you really want to delete:`
        }
        else{
        return `Do you really want to delete: ${this.props.stream.Title}`
        }
    }

    render(){
    return(
           <div>
                StreamDelete
                <Modal 
                    header = 'Delete Stream'
                    content = {this.renderContent()}
                    action = {this.action}
                    onDismiss = {this.onDismiss}
                />
            </div>
    )
    }

}

const mapStatetoProps = (state, ownProps) => {

    return {
        stream : state.Streams[ownProps.match.params.id]
    }
}

export default connect(mapStatetoProps, {deleteStream, fetchStream})(StreamDelete);