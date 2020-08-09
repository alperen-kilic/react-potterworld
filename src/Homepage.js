import React, {Component} from 'react';
import { AnimateOnChange } from 'react-animation';
import Characters from './Characters';
import Spells from './Spells';

class Homepage extends Component {
    constructor() {
        super()
        this.state = {
            homepage: true,
            characters: false,
            spells: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.returnHomepage = this.returnHomepage.bind(this);
    }

    handleClick(event) {
        const {name} = event.target
        name === "characters" ? this.setState({characters: true, homepage: false}) : this.setState({spells: true, homepage: false})
    }

    returnHomepage() {
        this.setState({
            homepage: true,
            characters: false,
            spells: false,
        })
    }

    render(){
        return(
            <div>
                {this.state.homepage ?
                <div>
                <p>Welcome to Potterworld!</p>
                <button name="characters" onClick={this.handleClick}>Characters</button>
                <button name="spells" onClick={this.handleClick}>Spells</button>
                </div> :
                <button name="homepage" onClick={this.returnHomepage}>Return to Homepage</button>}
                {this.state.characters && <Characters/>}
                {this.state.spells && <Spells/>}
            </div>
        )
    }
}

export default Homepage;