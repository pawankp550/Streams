import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../Actions';

class StreamList extends React.Component{

    componentDidMount(){
        this.props.fetchStreams();
    }

    renderList(){
        return this.props.Streams.map(
            stream => {
                return(
                    
                    <div className="ui left aligned segment" key={stream.id}>
                    <div className="ui grid">
                    <div className="two wide column"><i class="huge audible icon"></i></div>
                    <div className="four wide column"><div className="item"><h3>{stream.Title}</h3></div>
                        <div>{stream.Description}</div></div></div>
                    
                        
                    </div>
                );
            }
        )
    }

    render(){
        console.log(this.props.Streams);
        return(
            <div className='ui teal segment'>
                {this.renderList()}
            </div>
        );
    }
}

const mapStatetoProps = (props) => {
   
    return {
        Streams :Object.values(props.Streams)
    }
}

export default connect(mapStatetoProps,  {fetchStreams})(StreamList);