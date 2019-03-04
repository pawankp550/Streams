import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../Actions';
import {  NavLink  } from 'react-router-dom';

class StreamList extends React.Component{

    componentDidMount(){
        this.props.fetchStreams();
    }

    renderAdmin(stream){
        if(stream.userId === this.props.CurrentUserId){
               return(
                <div className="right floated content">              
                    <NavLink to={`/Streams/edit/${stream.id}`} className="ui teal button">Edit</NavLink>
                    <NavLink to={`/Streams/delete/${stream.id}`} className="ui button">Delete</NavLink>
                </div>
              
               ) 
        }        
    }

    renderCreateStream(){

        if(this.props.isSignedIn){
            return(
                <div style={{textAlign : 'right'}}>
                    <NavLink to='/streams/new' className="ui teal button">
                        Create Stream
                    </NavLink>

                </div>

            )

        }

    }

    renderList(){
        return this.props.Streams.map(
            stream => {
                return(
                        
                            <div className="list-Container item" key={stream.id}>
                                <i className="huge audible icon"/>
                                <div className="content">
                                    
                                        <NavLink className="header" to = {`/streams/show/${stream.id}`} >{stream.Title}</NavLink>
                                       
                                    {stream.Description}
                                    { this.renderAdmin(stream) }
                                </div>                        
                            </div>
                      );
            }
        )
    }

    render(){
        return(
            <div className='ui teal segment'>
                <h1>STREAMS</h1> 
                <div className="ui celled list">
                    {this.renderList()}     
                </div>
                {this.renderCreateStream()}
                
            </div>
        );
    }
}

const mapStatetoProps = (props) => {
   
    return {
            Streams : Object.values(props.Streams),
            CurrentUserId : props.auth.userId,
            isSignedIn : props.auth.isSignedIn
    }
}

export default connect(mapStatetoProps,  {fetchStreams})(StreamList);