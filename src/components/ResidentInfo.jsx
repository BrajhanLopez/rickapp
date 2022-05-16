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
            <div className='status'> <div className='sta' ></div>   {residenti?.status}  </div>
            <li className='li'> <h2>{residenti?.name}</h2> </li>
            <hr />
            <li className='li'>RAZA: {residenti?.species} </li>

            <li className='li'>ORIGEN: {residenti?.origin.name} </li>

            <li className='li'>APARICION EN EPISODIOS: {residenti?.episode.length}</li>

    </ul> 
        </article>
    );
};

export default ResidentInfo;