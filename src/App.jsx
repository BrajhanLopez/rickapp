import Location  from './components/Location'

import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ResidentInfo from './components/ResidentInfo'

let obj = {
  "id": 50,
  "name": "Kyle's Teenyverse",
  "type": "Teenyverse",
  "dimension": "Replacement Dimension",
  "residents": [
    "https://rickandmortyapi.com/api/character/197",
    "https://rickandmortyapi.com/api/character/364"
  ],
  "url": "https://rickandmortyapi.com/api/location/50",
  "created": "2017-12-30T12:36:19.730Z"
}

function App() {
  const [random, setrandom] = useState()
   const [location, setlocation] =useState()
const [search, setsearch] = useState()


const submit = e => {
  setsearch(e.target.previousSibling.value);
  e.target.previousSibling.value =""
}

  useEffect(()=>{
    
      axios.get('https://rickandmortyapi.com/api/location/')
      .then(res => setrandom(Math.floor(Math.random()*(res.data.info.count)+1)))
      .catch(e => console.log(e))
    
  
  },[])

  useEffect(()=>{

if (random && !search) {
  axios.get(`https://rickandmortyapi.com/api/location/${random}`)
  .then(res => setlocation(res.data))
}
if (search) {
  axios.get(`https://rickandmortyapi.com/api/location/${search}`)
  .then(res => setlocation(res.data))
}


  },[random, search])

console.log(location);






  return (
    <div className="App">
    <div className="header">
      <input className='text1'  type="text" placeholder='type a location id'/>  
      <button className='search' onClick={submit}>Buscar</button>
    </div>

      <div className="main">
      <Location datalocation={location}/>
      <br />
      <div className='container-list'>
      {
        location?.residents.map(url=>{
          return <ResidentInfo url={url} key={url} />
        })

      }
      </div>

      
      </div>
      
     
     
    </div>
  )
}

export default App
