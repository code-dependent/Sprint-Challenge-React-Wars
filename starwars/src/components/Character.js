// Write your Character component here
import React from 'react';


const Characters = props=>{
    console.log(props)
    
return(
    <div className='charCard'>
        <div style={{width:'100%'}}>
            <img style={{width:'100%', borderTopLeftRadius: '5%',borderTopRightRadius: '5%' }} src={props.char.image}/>
        </div>
        <h2>{props.char.name}</h2>
    </div>
)
}


export default Characters