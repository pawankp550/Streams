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
        });

    });
}

renderauthButton(){
    if(this.state.isSignedIn === null){
        return <h3>I don't know</h3>
    } else if(this.state.isSignedIn){
        return <h3>Signed In</h3>
    }
    else{
        return <h3>Signed Out</h3>
    }
}

    render(){
        return(
            <div>
            {this.renderauthButton()}
            </div>
        )
    }
}

export default GoogleAuth;

