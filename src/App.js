import React from "react"
import Raining from "./raining.png"
import Sunny from "./sunny.png"
import Day from "./Day.js"
import weather from "./weather.json"
import EachDay from "./EachDay.js"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
        CurrentPicture: weather.weather
    }
  }
  
  render() {
    return (<div> 
      {this.state.CurrentPicture.map(function(eachDay) {
        const result = EachDay(eachDay) 
        return (
          <Day 
            day={eachDay.day}
            type={eachDay.type}
            temp={eachDay.temp}
          />
        )
      })}
    </div>)
  }
}

export default App