import React, {Component} from 'react';
import { AnimateOnChange } from 'react-animation';
import Characters from './Characters';
import Spells from './Spells';

import './style.css';

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
            <AnimateOnChange style={{display: 'block'}} durationOut="500">
                <div>
                    {this.state.homepage ?
                    <div>
                    <h1>Welcome to Potterworld</h1>
                    
                    <button className="animated-button2" name="characters" onClick={this.handleClick}><span></span><span></span><span></span><span></span>Characters</button>
                    <button className="animated-button2" name="spells" onClick={this.handleClick}><span></span><span></span><span></span><span></span>Spells</button>
                    </div> :
                    <button className="animated-button3" name="homepage" onClick={this.returnHomepage}><span></span><span></span><span></span><span></span>Return to Homepage</button>}
                    {this.state.characters && <Characters/>}
                    {this.state.spells && <Spells/>}
                </div>
            </AnimateOnChange>
        )
    }
}

export default Homepage;