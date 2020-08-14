import React, {Component} from "react"
import * as Constants from "./constants/index"
import { AnimateOnChange } from 'react-animation';

import './style.css'


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
        fetch(`${Constants.URI}spells?key=${Constants.API_KEY}`)
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
        console.log(randNum)
        this.setState({
            spell: randSpell.spell || "",
            type: randSpell.type || "",
            effect: randSpell.effect || "",
        })
    }

    render() {
        return (
            
            <div className="center">
                <AnimateOnChange>
                {
                this.state.spell !== "" && 
                <div><h2>Spell Name</h2><p>{this.state.spell}</p></div>
                }
                {
                this.state.type !== "" && 
                <div><h2>Type</h2><p>{this.state.type}</p></div>
                }
                {
                this.state.effect !== "" && 
                <div><h2>Effect</h2><p>{this.state.effect}</p></div>
                }
                </AnimateOnChange>
                <br/>
                <button className="animated-button2" onClick={this.handleChange}><span></span><span></span><span></span><span></span>Give a Random Spell</button>
                <br/>
            </div>
            
        )
    }
}

export default Spells;