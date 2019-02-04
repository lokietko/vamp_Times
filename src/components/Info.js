import React from 'react';
import "./Info.css";


const Info = (props) => {
const {
    sunrise,
    sunset,
    wind,
    humidity,
    pressure,
    moonphase,
    uv
} = props.info;
 const sunriseTime= new Date(sunrise*1000).toLocaleTimeString();
const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

    return ( 
<div className="info">
<div className="infoBox">

<div className="sunIconsPosition"><div className="sunny"></div><div className="moonny"></div></div>
<div className="sunTimeBox"><span>{sunriseTime}</span><span>{sunsetTime}</span></div>
<div className="infoStyleBox">
<ul className="list1">
    <li>humidity:</li>
    <li>wind:</li>
    <li>pressure</li>
    <li>moon phase:</li>
   <li><span></span>.</li>
    <li>UV:</li>
</ul>
<ul className="list2">

 <li>{humidity}%</li>
    <li>{wind}<span>m/sec</span></li>
    <li>{pressure}<span>mm/h</span></li>
    <li>{moonphase}</li>
    <li>{uv}</li>
</ul>

</div>
</div>
</div>
     );
}
 
export default Info;