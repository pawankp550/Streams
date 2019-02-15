import React from 'react'
import { Field, reduxForm } from 'redux-form'


class StreamCreate extends React.Component {

renderInput({input, label}){

return <div className = 'createFormElements' >
        <label>{label}</label>
        <input   {...input}  />
    </div>
}

onSubmit(formValues){
    console.log(formValues);
}


render(){
    return(
            <form
                onSubmit = {this.props.handleSubmit(this.onSubmit)}
                className='ui form' >
                    <div class="field">
                         <Field name='Title' component={this.renderInput} label = 'Title' />
                    </div>
                    <div class="field">
                    <Field name='Description' component={this.renderInput} label = 'Description' />
                    </div>

                    <button className="ui teal button">Submit</button>
                </form>
        )
    }
}

export default reduxForm({
            form : 'streamCreate'
        })(StreamCreate);