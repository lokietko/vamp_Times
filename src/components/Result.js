import React from 'react';
import "./Result.css";
import Info from './Info';
import "./Info.css";
import rain from "../images/rain-hd-png-small-image-png-300.png";
import drizzle from "../images/drizzle.png";
import thunderstorm from "../images/burza.png";

import snow from "../images/snow.png";
import cl from "../images/chmura.png";
import wannCres from "../images/1024px-2011-11-19-Waning_crescent_moon.jpg";
import waxCres from "../images/wax.jpg";
import wanGib from "../images/1024px-2013-01-02_00-00-55-Waning-gibbous-moon.jpg";
import thirdQuater from "../images/Waning_gibbous_moon_near_last_quarter_-_23_Sept._2016.png";
import fullMoon from "../images/20110319_Supermoon.jpg";
import waxGib from "../images/Lune-Nikon-600-F4_Luc_Viatour.jpg";
import firstQuater from "../images/Daniel_Hershman_-_march_moon_(by).jpg";


const Result = (props) => {
     const{err,city,uv,temp,moonphase,date,weatherId,weatherDescription}=props.weather;
let url="";


 if (weatherId >= 500 && weatherId <= 531) {

    url = rain;

} 

else if (weatherId >= 200 && weatherId <= 232) {

    url = thunderstorm;

}
else if (weatherId >= 300 && weatherId <= 321) {

    url = drizzle;

}

else if (weatherId >=600 && weatherId <= 622) {

    url = snow;

}
else if (weatherId>=801 && weatherId <=805 ) {

    url = cl;

}

else {

    url = "nic";

}
let moons= "";
if (moonphase === "Waning Crescent") {

    moons = wannCres;

} else if (moonphase === "Dark Moon") {

   moons ="";

} else if (moonphase === "Third Quarter ") {

    moons = thirdQuater;

} else if (moonphase === "Waning Gibbous") {

moons = wanGib;

} else if (moonphase === "Full Moon") {

    moons = fullMoon;

}
else if (moonphase === "Waxing Gibbous") {

    moons= waxGib;

}
else if (moonphase === "First Quarter") {

    moons = firstQuater;

}

else if (moonphase === "Waxing Crescent") {

    moons = waxCres;

}


 else {

    moons = "";

}




let tempDegree =parseFloat(temp);
let float = Math.round(tempDegree);
let content=null;
if(!err&&city){
content=(
<div className="result1">
<div className="temp"> 
<p> {date}</p>
{float}&#176;C
<div className = "weather"
style = {{ background: `url(${url})`}}> </div>
<p className="weatherDescription">{weatherDescription}</p>
</div>

<div  className="moon" style={{background:`url(${moons})`}}></div>
<div className="katy">
{uv>=1?<p>Uwazaj na wysokie promieniowanie UV, Użyj kremu z filtrem </p>:<p>Idealna pogoda</p>}
{moonphase === "Full Moon"?<p>Uwaga na wilkołaki!</p>:<p>Nic ci nie grozi ze strony Wilkołaków</p>}
</div>
<Info info={props.weather}/>
</div> 
)
}
    return ( 
    <div className="result">
        {err ?"We do not have this city in base": content}
    </div> );
}
 
export default Result;