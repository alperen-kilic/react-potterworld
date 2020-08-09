import React, {Component} from "react"
import * as Constants from "./constants/index"
import { AnimateOnChange } from 'react-animation';


class Spells extends Component {
    constructor() {
        super()
        this.state = {
            allSpells: [],
            spell: "",
            type: "",
            effect: "",
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch(Constants.URI + "spells?key=" + Constants.API_KEY)
            .then(response => response.json())
            .then(response => {
                const spells = response
                this.setState({ allSpells: spells })
            })
    }

    handleChange(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allSpells.length)
        const randSpell = this.state.allSpells[randNum]
        this.setState({
            spell: randSpell.spell,
            type: randSpell.type || "",
            effect: randSpell.effect || "",
        })
    }

    render() {
        return (
            
            <div>
                <button onClick={this.handleChange}>Give a Random Spell</button>
                <br/>
                <AnimateOnChange>
                {
                this.state.spell !== "" && 
                <p>Spell Name: {this.state.spell}</p>
                }
                {
                this.state.type !== "" && 
                <p>Type: {this.state.type}</p>
                }
                {
                this.state.effect !== "" && 
                <p>Effect: {this.state.effect}</p>
                }
                </AnimateOnChange>
            </div>
            
        )
    }
}

export default Spells;