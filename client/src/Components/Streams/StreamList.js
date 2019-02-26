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
                   <button className="ui button">Delete</button>
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
                                    <div className="header"> 
                                        <h3>{stream.Title}</h3>
                                    </div>    
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