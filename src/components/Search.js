import React from 'react' ;

const Searchbox = ({searchfield , searchChange})=> {
    return(
        <div className = 'pa2'>
            <input className ='pa3 ba ba--green bg-lightest-blue '  
            type='search' 
            placeholder='search'
            onChange = {searchChange} 
             />
             
        </div>
    )
}

export default Searchbox ;