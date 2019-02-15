import React from 'react';
import { connect } from 'react-redux'
import { signIn, signOut} from '../Actions'

class GoogleAuth extends React.Component{

   componentDidMount(){

    window.gapi.load('client:auth2', () => {

        window.gapi.client.init({
               clientId : '327351045104-e12pmvq05m0f0h6fju31be5kpdmnoh04.apps.googleusercontent.com',
               scope : 'email'
        }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
        });

    });
}

onAuthChange = (isSignedIn) => {
 if(isSignedIn){
     //calling action method
     this.props.signIn(this.auth.currentUser.get().getId());
 }
 else{
     //calling action method
     this.props.signOut();
 }
}

onClickHandler(){
    if(this.props.isSignedIn){
        this.auth.signOut();
    }
    else{
        this.auth.signIn();
    }
}
    render(){
        return(
            <div>
                <button className="ui red button" onClick={this.onClickHandler.bind(this)}>
                    <i class="fab fa-google"></i> {this.props.isSignedIn? 'Sign Out' : 'Sign In'}
                </button>
            </div>
        )
    }
}

const mapStatetoProps= (state) => {

        return{
            isSignedIn : state.auth.isSignedIn
        }
    }

export default connect(mapStatetoProps,{signIn, signOut})(GoogleAuth);

