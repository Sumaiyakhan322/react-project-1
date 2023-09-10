import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import './countries.css'


const Countries = () => {
    const [country,setCountry]=useState([]);
    const[markVisited,setVisited]=useState([]);
    const handleMarkVisited=(country)=>{
       const newVisitedCountris=[...markVisited,country]
       setVisited(newVisitedCountris);
       console.log(country);
    }
    useEffect(()=>{
      fetch('https://restcountries.com/v3.1/all')
      .then(res=>res.json())
      .then(data=>setCountry(data))
    },[])
    return (
        <>
        <div>
            <h3>Visited list</h3>
            <h4>Visitd:{markVisited.length}</h4>
            <ul>
                {
                    markVisited.map(country=><li key={country.cca3}>{country?.name?.common}</li>)

                    
                }
            </ul>
        </div>
        <div className="countries">
            
            {
                country.slice(0,10).map(coun=><Country country={coun} key={country.cca3} handleMarkVisited={handleMarkVisited}></Country>)
            }
        </div>
        </>
    );
};

export default Countries;