import './body.css'
import Card from './card';
import Post from './post';
import React,{ Component }  from 'react';

class Body extends Component {
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
            <div className='body' id="body">
                {this.state.title===""?this.state.listComponent:<Post setStateOfParent = {this.setStateOfParent} id={this.state.title}/>}  
            </div>
        )
    }
}

export default Body;
