import React from 'react'
import { Field, reduxForm } from 'redux-form'


class StreamCreate extends React.Component {

renderInput({input}){
console.log({input});
return <div>
        <input   {...input}    />
    </div>
}

render(){
return(
           <form>
                <Field name='Title' component={this.renderInput} />
                <Field name='Description' component={this.renderInput} />
            </form>
    )

}

}

export default reduxForm({
    form : 'streamCreate'
})(StreamCreate);