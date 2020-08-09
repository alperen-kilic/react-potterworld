import React, {Component} from "react"
import * as Constants from "./constants/index"
import { AnimateOnChange } from 'react-animation';
import axios from 'axios';
import cheerio from 'cheerio';

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


        }
        this.clickEvent = this.clickEvent.bind(this);
    }

    componentDidMount() {
        fetch(Constants.URI + "characters?key=" + Constants.API_KEY)
            .then(response => response.json())
            .then(response => {
                const characters = response
                this.setState({ allCharacters: characters })
            })
    }

    // handleChange(event) {
    //     event.preventDefault()
    //     this.setState({
    //         isLoading: true
    //     })
    //     // const randNum = Math.floor(Math.random() * this.state.allCharacters.length)
    //     const randNum = 185
    //     const randCharacter = this.state.allCharacters[randNum]
    //     console.log(randNum)
    //     axios.get('https://harrypotter.fandom.com/wiki/' + randCharacter.name.replace(/ /g,"_"))
    //         .then(response => {
    //             try{
    //                 let $ = cheerio.load(response.data);
    //                 const imageLink = $('.pi-image-thumbnail').attr('src')
    //                 this.setState({
    //                     image: imageLink || "",
    //                     name: randCharacter.name,
    //                     role: randCharacter.role || "",
    //                     house: randCharacter.house || "",
    //                     school: randCharacter.school || "",
    //                     bloodStatus: randCharacter.bloodStatus || "",
    //                     species: randCharacter.species || "",
    //                     patronus: randCharacter.patronus || "",
    //                     boggart: randCharacter.boggart || "",
    //                     alias: randCharacter.alias || "",
    //                     wand: randCharacter.wand || "",
    //                     animagus: randCharacter.animagus || "",
    //                     ministryOfMagic: randCharacter.ministryOfMagic || false,
    //                     orderOfThePhoenix: randCharacter.orderOfThePhoenix || false,
    //                     dumbledoresArmy: randCharacter.dumbledoresArmy || false,
    //                     deathEater: randCharacter.deathEater || false,
    //                     isLoading: false
    //                 })
    //             }
    //             catch(e)
    //             {
    //                 console.log(e)
    //             }
    //         })
    //         .catch( (error) => {
    //             console.log(error)
    //         })
    // }


    clickEvent() {
        this.setState({
            isLoading: true
        })
        const randNum = Math.floor(Math.random() * this.state.allCharacters.length)
        const randCharacter = this.state.allCharacters[randNum]
        console.log(randNum)
        axios.get('https://harrypotter.fandom.com/wiki/' + randCharacter.name.replace(/ /g,"_"))
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
                    isLoading: false
                })
            }).catch(error => {
                this.clickEvent();
            })
        
    }

    render() {
        return (

            <div>
                {this.state.isLoading ? <p>Loading</p> :
                <div>
                {
                this.state.image !== "" &&
                <img src={this.state.image} alt="character"></img>
                }
                {
                this.state.name !== "" && 
                <p>Name: {this.state.name}</p>
                }
                {
                this.state.alias !== "" && 
                <p>Alias: {this.state.alias}</p>
                }
                {
                this.state.role !== "" && 
                <p>Role: {this.state.role}</p>
                }
                {
                this.state.house !== "" && 
                <p>House: {this.state.house}</p>
                }
                {
                this.state.wand !== "" && 
                <p>Wand: {this.state.wand}</p>
                }
                {
                this.state.patronus !== "" && 
                <p>Patronus: {this.state.patronus}</p>
                }
                {
                this.state.boggart !== "" &&
                <p>Boggart: {this.state.boggart}</p>
                }
                {
                this.state.animagus !== "" && 
                <p>Animagus: {this.state.animagus}</p>
                }
                {
                this.state.school !== "" && 
                <p>School: {this.state.school}</p>
                }
                {
                this.state.bloodStatus !== "" && 
                <p>Blood Status: {this.state.bloodStatus}</p>
                }
                {
                this.state.species !== "" && 
                <p>Race: {this.state.species}</p>
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
                <button onClick={this.clickEvent}>Give a Random Character</button>
                <br/>
            </div>
            
        )
    }
}

export default Characters;