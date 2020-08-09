import React from 'react'
import './App.css'
import './fonts/stylesheet.css'
import Homepage from './Homepage';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }


  render() {
    return(
        <div>
          <Homepage/>
        </div>  
          )
  }
}

export default App;
