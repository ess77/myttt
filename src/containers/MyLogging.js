import React, { Component } from 'react'
import { ErrorHandler } from 'universal-react-logger'
const express = require('express');
const app = express();

class MyLogging extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            error: this.props.error,
            errorInfo: this.props.errorInfo
        };
        this.handleClick = this.handleClick.bind(this);
        this.makeError = this.makeError.bind(this);
    }

    handleClick() {
        this.setState(({counter}) => {
            counter = counter + 1;
        });
    }

    makeError() {
        try {
            this.functionDoesntNotExist();
        } catch(error) {
            this.props.setEventError(error)
        }
    }

    render() {
        if(this.state.counter === 5) {
            throw new Error('Error on render');
        }

        return(
            <div>
                <h1 key="welcome">Universal Logging in React</h1>
                <button onClick={this.handleClick}>Update counter {this.state.counter} </button>
                <button onClick={() => this.makeError}>Make Event Error</button>
            </div>
        )
    }
}


//error logging
app.post('/log-clients-errors', (req, res) => {    
    let error = req.body.error.message;
    let errorInfo = req.body.error.stack;

    res.status(200);
});


export default ErrorHandler(MyLogging, true)