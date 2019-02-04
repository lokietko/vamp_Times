import React, { Component } from 'react';

import './App.css';
import Form from './Form';
import Result from "./Result";
//import Info from "./Info";

const APIkey = "4cc1250a35d46ef222669838f16e8299";

class App extends Component {
state={
  value:"",
  temp:"",
  date:"",
  city:"",
  moonphase:"",
  err:false,
}
handleInputChange=(e)=>{
  this.setState({
    value:e.target.value
  })
}
handleCitySubmit=(e)=>{
  e.preventDefault();
  const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIkey}&units=metric`;
 fetch(API).then(res=>{
if(res.ok){
  return res
}
throw Error("nie udało się")
})
.then(res=>res.json())
.then(res=>{
  const APIUv = `http://api.openweathermap.org/data/2.5/uvi?appid=${APIkey}&lat=${res.coord.lat}&lon=${res.coord.lon}`;
  fetch(APIUv).then(resUV=>resUV.json()).then(resUV=>{
    console.log(resUV);
    const APImoon = `http://api.farmsense.net/v1/moonphases/?d=${resUV.date}`;
    fetch(APImoon).then(resMoon=>resMoon.json()).then(resMoon=>{ 
      this.setState({
    moonphase:resMoon[0].Phase
  })
    this.setState({
      uv:resUV.value
    })
  });
});
 const time=new Date().toDateString();

  this.setState(state=>({
    err:false,
    date:time,
    temp:res.main.temp,
    city: state.value,
    pressure:res.main.pressure,
    humidity:res.main.humidity,
    sunrise:res.sys.sunrise,
    sunset: res.sys.sunset,
    wind:res.wind.speed,
    clouds:res.all,
    weatherId:res.weather[0].id,
    weatherDescription:res.weather[0].description
  }))
})
.catch(err=>{
  console.log(err)
this.setState(prev=>({
err:true,
city:prev.value
}))
})
}
componentDidMount(){
   const hour = new Date().toLocaleTimeString();
if(hour>"6:00:00" && hour<"19:00:00"){
document.body.className="day";
}else{
document.body.className="night";
}
}

  render() {
    return (
  <div className="container">
       <Form city={this.state.value} change={this.handleInputChange} submit={this.handleCitySubmit} />
       <Result weather={this.state}/>
      </div>
    );
  }
}

export default App;
