
import { useState } from 'react';
import './country.css'


const Country = ({country,handleMarkVisited,hanldeFlages}) => {
    const [visit,setVisit]=useState(false)
    const handleVisited=()=>{
        setVisit(!visit);
    }
   
    

    const {name,flags,population,cca3}=country;
    return (
        <div className={`country ${visit && 'visited'}`}>
            <h3 style={{color: visit ? 'purple' : 'black'}}>Name:{name?.common}</h3>
            <img src={flags?.png} alt="" />
            <p>Population:{population}</p>
            <p>Code:{cca3}</p>
            <button onClick={handleVisited}>{visit?"visited":"going"}</button>
            {
                visit ? 'I have visited the country':"I want to visit"
            }
            <br />
            <button onClick={()=>handleMarkVisited(country)}>Mark as visited</button>
            <br /><br /><br />
            <button onClick={()=>hanldeFlages(country.flags.png)}>Flags added</button>
        </div>
    )
        }

export default Country;