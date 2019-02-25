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
                <div className="ui buttons right floated content">
                  <button className="ui teal button">Delete</button>
                  <button className="ui button">Edit</button>
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
                    
                        
                            <div className="item" key={stream.id}>
                                <i className="huge audible icon"/>
                            <div className="content">
                                 {stream.Title}
                                <div className="description">{stream.Description}</div>
                            </div>
                            
                            
                                { this.renderAdmin(stream) }
                         
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