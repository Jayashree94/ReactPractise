import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {name1} = this.props;
        return(
            <h1>Name: {name1}</h1>
        )

    }
}