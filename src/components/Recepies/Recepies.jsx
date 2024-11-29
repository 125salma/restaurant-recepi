import { useEffect, useState } from "react";
import Recepi from "../Recepi/Recepi";
import './Recepies1.css'

const Recepies = ({handleRecepiCount,setCookes}) => {
    const [recepies,setRecepies] = useState([])
    //console.log(recepies)
    useEffect(()=>{
      fetch('/recepies.json')
      .then(res=>res.json())
      .then(data=>setRecepies(data))
    },[])

    
    return (
        <div className="md:w-3/6 ">
             
           {/* <h2>Recepies : {recepies.length} </h2> */}
           <div className="response">
           {
                recepies.map(recepi=><Recepi 
                setCookes={setCookes}
                key={recepi.recipe_id} 
                handleRecepiCount={handleRecepiCount}    
                recepi={recepi}></Recepi>)
            }
           </div>
           
        </div>
    );
};

export default Recepies;