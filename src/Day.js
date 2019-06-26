import React from "react"
import Sunny from "./sunny.png"
import Raining from "./raining.png"
import "./App.css"

function Day(props) {
    return (<div>
        <div className="container main">
            <span className="center">{props.day}</span>
            <img className="WeatherImage" src={props.type === 'Sunny' ? Sunny : Raining} />
            <span>{props.temp}</span>
        </div>
    </div>)
}

export default Day