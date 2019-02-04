import React from 'react';
import "./Form.css";
const  Form = (props) => {
    return ( 
    <form  onSubmit={props.submit}>
<input type="text" value={props.city} onChange={props.change} placeholder="Wpisz miasto"></input>
<button >Wyszukaj miasto</button>




    </form>
     );
}
 
export default Form;