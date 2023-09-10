import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import './countries.css'


const Countries = () => {
    const [country,setCountry]=useState([]);
    const[markVisited,setVisited]=useState([]);
    const [flags,setflags]=useState([]);
    const handleMarkVisited=(country)=>{
       const newVisitedCountris=[...markVisited,country]
       setVisited(newVisitedCountris);
       console.log(country);
    }
    const handleFlag=(country)=>{
        const newFlag=[...flags,country];
        setflags(newFlag);
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
        <div>
            <h3>Visited flags:{flags.length}</h3>
            <div className="Flag-con">
               {
                flags.map(flag=><img src={flag}></img>)
               }
            </div>
        </div>
        <div className="countries">
            
            {
                country.map(coun=><Country country={coun} key={country.cca3} handleMarkVisited={handleMarkVisited} hanldeFlages={handleFlag}></Country>)
            }
        </div>
        </>
    );
};

export default Countries;