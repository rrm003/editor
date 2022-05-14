import Card from './card';
import Post from './post';
import React, { Component } from 'react';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.setStateOfParent.bind(this);
        this.state = {
            listComponent : [],
            title : ""
        };
    }
    setStateOfParent = (name) => {
        this.setState({title:name});
    }
    render() {
        for(var i=0;i<5;i++){
            this.state.listComponent.push(<Card setStateOfParent = {this.setStateOfParent} id={i}/>)
        }
        return (
            <div className='profile'>
                Profile Page
            </div>
        );
   }
}

export default Profile;