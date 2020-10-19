import React, { Component } from 'react';

export class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color,
            size: 100,
        }
    }

    static getDerivedStateFromProps(props, state) {
        return { color: 'pink' }
    }

    
    shouldComponentUpdate() {
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(prevProps);
        return null; 
    }

    componentDidUpdate() {
        console.log('monté!');
        document.getElementById("coco").innerHTML = "COCO IS HERE!";
    }


    render() {
        console.log('render');
        return(
            <div id="coco" style={{ color: this.props.color, fontSize: this.state.size }}>Hello</div>
        );
    }

    componentDidMount() {
        setTimeout(() => { this.setState({ size: 50 })}, 3000);
    }
}

export class ButtonTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
        }
    }
    render() {
        return(
            <div>
                <Child color={this.state.color} />
                <button onClick={() => this.setState({color: 'yellow'})}>Change Color</button>
            </div>
        );
    }
    change(color) {
        console.log(color);
        
    }
}