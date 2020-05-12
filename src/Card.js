import React from 'react';
import './Card.css';    

function Card(props) {
return(
    <div id = 'card' className= 'tc georgia bg-light-green dib br3 pa3 ma2  grow bw2 shadow-5'> 
        {/* <img alt ='zoro' src= {process.env.PUBLIC_URL + '/zoro.jpg'}  /> public method */}
        <img  src = {props.pic} alt= {props.id} />
        <div>
            {/* <h3>Zoro</h3>
            <p id='para'>If I can't <strong>PROTECT</strong> even the <strong>DREAMS</strong> of my captain then whatever <strong>AMBITIONS</strong> I have is nothing but <strong>TALK</strong> </p> */}
            <h3>
                {props.name}
            </h3>
            <p id ='para'>
                {props.quote}
            </p>
        </div>
    </div>
) ;

}

export default Card ;