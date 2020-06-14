import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { jump_function } from '../actions';


class FormGame extends Component {
    render() {
        const { handleSubmit } = this.props
        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <Field name="goto" type="number" component="input" />
                </form>
            </div>
        )
    }

}

const onSubmit = (values, dispatch) => {
    const stepToGo = values.goto ? values.goto : 0;
    console.log('Onsubmit fired!', stepToGo);
    dispatch(jump_function(stepToGo))
  }
const warn = values => {
    // console.log('warn fired!', values)
  }
const validate = (values, dispatch) => {
    // console.log('validate with dispatch fired!',  dispatch)
  }

export default reduxForm({
    form: 'formGame',
    onSubmit,
    warn,
    validate
})(FormGame);