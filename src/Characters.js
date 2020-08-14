import React, {Component} from "react"
import * as Constants from "./constants/index"
import { HideUntilLoaded } from 'react-animation';
import axios from 'axios';
import cheerio from 'cheerio';
import './style.css'
import ClipLoader from "react-spinners/ClipLoader";


class Characters extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            allCharacters: [],
            image: "",
            name: "",
            role: "",
            house: "",
            school: "",
            ministryOfMagic: false,
            orderOfThePhoenix: false,
            dumbledoresArmy: false,
            deathEater: false,
            bloodStatus: "",
            species: "",
            patronus: "",
            boggart: "",
            alias: "",
            wand: "",
            animagus: "",
            extraInfo: false

        }
        this.clickEvent = this.clickEvent.bind(this);
    }

    componentDidMount() {
        fetch(`${Constants.URI}characters?key=${Constants.API_KEY}`)
            .then(response => response.json())
            .then(response => {
                const characters = response
                this.setState({ allCharacters: characters })
            })
    }


    clickEvent() {
        this.setState({
            isLoading: true
        })
        const randNum = Math.floor(Math.random() * this.state.allCharacters.length)
        const randCharacter = this.state.allCharacters[randNum]
        let extras = false
        if(randCharacter.ministryOfMagic || randCharacter.orderOfThePhoenix || randCharacter.dumbledoresArmy || randCharacter.deathEater)
        {
            extras = true
        }
        console.log(randNum)
        axios.get('https://cors-anywhere.herokuapp.com/https://harrypotter.fandom.com/wiki/' + randCharacter.name.replace(/ /g,"_"))
            .then(response => {
                let $ = cheerio.load(response.data);
                const imageLink = $('.pi-image-thumbnail').attr('src')
                this.setState({
                    image: imageLink || "",
                    name: randCharacter.name,
                    role: randCharacter.role || "",
                    house: randCharacter.house || "",
                    school: randCharacter.school || "",
                    bloodStatus: randCharacter.bloodStatus || "",
                    species: randCharacter.species || "",
                    patronus: randCharacter.patronus || "",
                    boggart: randCharacter.boggart || "",
                    alias: randCharacter.alias || "",
                    wand: randCharacter.wand || "",
                    animagus: randCharacter.animagus || "",
                    ministryOfMagic: randCharacter.ministryOfMagic || false,
                    orderOfThePhoenix: randCharacter.orderOfThePhoenix || false,
                    dumbledoresArmy: randCharacter.dumbledoresArmy || false,
                    deathEater: randCharacter.deathEater || false,
                    extraInfo: extras,
                    isLoading: false
                })
            }).catch(error => {
                this.clickEvent();
            })
        
    }

    render() {
        return (

            <div className="center">
                {this.state.isLoading ?
                <div>
                <ClipLoader
                size={150}
                color={"#F5A623"}
                loading={this.state.isLoading}/>
                </div>:
                <div>
                    <HideUntilLoaded imageToLoad={this.state.image}>
                    {
                    this.state.image !== "" &&
                    <img src={this.state.image} alt="character"></img>
                    }
                    </HideUntilLoaded>
                {
                this.state.name !== "" && 
                <div><h2>Name</h2><p>{this.state.name}</p></div>
                }
                {
                this.state.alias !== "" && 
                <div><h2>Alias</h2><p>{this.state.alias}</p></div>
                }
                {
                this.state.role !== "" && 
                <div><h2>Role</h2><p>{this.state.role}</p></div>
                }
                {
                this.state.house !== "" && 
                <div><h2>House</h2><p>{this.state.house}</p></div>
                }
                {
                this.state.wand !== "" && 
                <div><h2>Wand</h2><p>{this.state.wand}</p></div>
                }
                {
                this.state.patronus !== "" && 
                <div><h2>Patronus</h2><p>{this.state.patronus}</p></div>
                }
                {
                this.state.boggart !== "" &&
                <div><h2>Boggart</h2><p>{this.state.boggart}</p></div>
                }
                {
                this.state.animagus !== "" && 
                <div><h2>Animagus</h2><p>{this.state.animagus}</p></div>
                }
                {
                this.state.school !== "" && 
                <div><h2>School</h2><p>{this.state.school}</p></div>
                }
                {
                this.state.bloodStatus !== "" && 
                <div><h2>Blood Status</h2><p>{this.state.bloodStatus}</p></div>
                }
                {
                this.state.species !== "" && 
                <div><h2>Race</h2><p>{this.state.species}</p></div>
                }
                {
                this.state.extraInfo &&
                <h2>Extra Information</h2>
                }
                {
                this.state.ministryOfMagic === true &&
                <p>Member of the Ministry of Magic</p>
                }
                {
                this.state.orderOfThePhoenix === true &&
                <p>Member of the Order of the Phoenix</p>
                }
                {
                this.state.dumbledoresArmy === true &&
                <p>Member of the Dumbledore's Army</p>
                }
                {
                this.state.deathEater === true &&
                <p>Is a Death Eater</p>
                }
                </div>
                }
                <button className="animated-button2" onClick={this.clickEvent}><span></span><span></span><span></span><span></span>Give a Random Character</button>
                <br/>
            </div>
            
        )
    }
}

export default Characters;