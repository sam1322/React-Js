import React from 'react' ;
import Card from './Card'; 

const Cardlist = ({onepiece}) => {
    const cardarray = onepiece.map((user,i)=>{
        return (<Card key = {i} pic = {onepiece[i].pic } id = {onepiece[i].id} name = {onepiece[i].name} quote = {onepiece[i].quote} />) 
    }) ;
    return (
    <div>
        {cardarray }
    </div>
    )   ;
}

export default Cardlist ;