import './card.css'
import React,{ Component }  from 'react';



class Card extends Component{
    constructor(props) {
        super(props);
        this.handleClick.bind(this);
    }
    handleClick = () => {
        this.props.setStateOfParent("Geeks For Geeks"+this.props.id);
    }
    render() {
        return(
            <div className="card" onClick={this.handleClick}>
                <h3>title</h3>
                <p>Note that the development build is not optimized.To create a production build, use npm run build. </p>
                <footer>
                    <p>footer</p>
                </footer>
            </div>
        )
    }
}

export default Card;