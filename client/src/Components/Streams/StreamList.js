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
                <div className="ui buttons">
                    <button className="ui secondary button">Delete</button>
                    <div className="or"></div>
                    <button className="ui teal button">Edit</button>
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
                    
                    <div className="ui left aligned segment" key={stream.id}>
                        <div className="ui grid">
                            <div className="two wide column"><i className="huge audible icon"></i></div>
                            <div className="four wide column">
                                <div className="item"><h3>{stream.Title}</h3></div>
                                <div>{stream.Description}</div>
                            </div>
                            <div className="four wide column"></div>
                            <div className="two wide column"></div>
                            <div className="four wide column right aligned">
                                { this.renderAdmin(stream) }
                            </div>
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
                {this.renderList()}
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