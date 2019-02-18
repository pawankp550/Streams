import React from 'react'
import { Field, reduxForm } from 'redux-form'


class StreamCreate extends React.Component {

renderInput({input, label, meta}){
   const errorClass = `field ${meta.error && meta.touched?'error':'null'}`
    return <div className = {errorClass}>
            <div className='field'>
                <label>{label}</label>
                <input   {...input}  autoComplete = 'off' />
                <label>{meta.touched?meta.error:null}</label>
            </div>
        </div>
}

onSubmit(formValues){
    console.log(formValues);
}


render(){
    return(<div className="ui teal segment">
                <form
                    onSubmit = {this.props.handleSubmit(this.onSubmit)}
                    className='ui form' >
                            <Field name='Title' component={this.renderInput} label = 'Title' />

                            <Field name='Description' component={this.renderInput} label = 'Description' />
                        <button className="ui teal button">Submit</button>
                    </form>
            </div>
        )
    }
}

const validate = (formValues) => {

    const error = {}

    if(!formValues.Title){

        error.Title = 'Please enter a Title'

    }

    if(!formValues.Description){

        error.Description = 'Please enter a Description'
    }

       return error

}

export default reduxForm({
            form : 'streamCreate',
            validate
        })(StreamCreate);