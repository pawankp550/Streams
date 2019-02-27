import React from 'react';
import { fetchStream, editStream } from '../../Actions';
import { connect } from 'react-redux';
import StreamForm from './StreamForm';


class StreamEdit extends React.Component{
    streamId = this.props.match.params.id;
    componentDidMount(){      
        this.props.fetchStream(this.streamId);
    }

    onSubmit = (fromValues) => {

           this.props.editStream(this.streamId,fromValues); 
           console.log(fromValues);

    }
    render(){   
        if(!this.props.stream){
            return (<div>Loading</div>)
        }
        else{
            return(<div>
                <h3>Edit Stream</h3>
                <StreamForm onSubmit={this.onSubmit}
                    initialValues={{Title : this.props.stream.Title, Description : this.props.stream.Description }}
                />
                </div>)
        }
    }
}

const mapStatetoProps= (state, ownProps) => {
    return {
            stream : state.Streams[ownProps.match.params.id]
    }
}


export default connect(mapStatetoProps,{fetchStream, editStream})(StreamEdit);