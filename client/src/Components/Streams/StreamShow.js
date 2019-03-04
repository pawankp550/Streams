import React from 'react';
import { fetchStream } from '../../Actions';
import { connect } from 'react-redux';

class StreamShow extends React.Component{

    streamId = this.props.match.params.id;

    componentDidMount(){
    this.props.fetchStream(this.streamId);
    }
   
    render(){
        if(!this.props.stream){
            return <div>Loading...</div>
        }
        else{
            return(
                <div>{this.props.stream.Title}
                {this.props.stream.Description}
                </div>

            )
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream : state.Streams[ownProps.match.params.id]
    }

}


export default connect(mapStateToProps, {fetchStream})(StreamShow);