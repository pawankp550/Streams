import React from 'react';

class GoogleAuth extends React.Component{
    state = {
        isSignedIn : null
    }

componentDidMount(){

    window.gapi.load('client:auth2', () => {

        window.gapi.client.init({
               clientId : '327351045104-bqspefftc2dic2i22qujuop6q8bqmiaq.apps.googleusercontent.com',
               scope : 'email'
        }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState(
                    {
                        isSignedIn : this.auth.isSignedIn.get()
                    }
                )
                this.auth.isSignedIn.listen(this.renderauthButton);
        });

    });
}

renderauthButton = () => {
   this.setState({
                        isSignedIn : this.auth.isSignedIn.get()
                    });
}

onClickHandler(){
    if(this.state.isSignedIn){
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
                    <i class="fab fa-google"></i> {this.state.isSignedIn? 'Sign Out' : 'Sign In'}
                </button>
            </div>
        )
    }
}

export default GoogleAuth;

