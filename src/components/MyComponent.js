import React from 'react';
import ReactDom from 'react-dom';

export default class MyComponent extends  React.Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log(this)
        return <div>MyComponent
            <div>{this.props.notes}</div>
        </div>;
    }
}