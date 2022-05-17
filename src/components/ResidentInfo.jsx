import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({url}) => {
    
const [residenti, setresidenti] = useState()


useEffect(()=> {

    
      axios.get(url)
.then(res=>setresidenti(res.data))
    

},[])


    return (
       
           <article className='article'>
             
            
            <ul className='ul'>
            <li className='li'> <img src={residenti?.image} alt="" /></li>
           
            {(()=> {
           if (residenti?.status === 'Alive') {
           return( <div className='status'> <div className='sta green' ></div>   {residenti?.status}  </div> 
     ) }
           else if (residenti?.status === 'Dead') {
            return( <div className='status'> <div className='sta red' ></div>   {residenti?.status}  </div> 
    )}
           else {
            return(  <div className='status'> <div className='sta unknow' ></div>   {residenti?.status}  </div> 
    )} 

            })()}

           
            <li className='li'> <h2>{residenti?.name}</h2> </li>
            <hr />
            <li className='li'> <b> RAZA: </b>{residenti?.species} </li>

            <li className='li'> <b>ORIGEN: </b>{residenti?.origin.name} </li>

            <li className='li'><b>APARICION EN EPISODIOS:</b> {residenti?.episode.length}</li>

    </ul> 
        </article>
    );
};

export default ResidentInfo;