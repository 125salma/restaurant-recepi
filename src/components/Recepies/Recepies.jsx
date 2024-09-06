import { useEffect, useState } from "react";
import Recepi from "../Recepi/Recepi";

const Recepies = ({handleRecepiCount,setCookes}) => {
    const [recepies,setRecepies] = useState([])
    //console.log(recepies)
    useEffect(()=>{
      fetch('../../../public/recepies.json')
      .then(res=>res.json())
      .then(data=>setRecepies(data))
    },[])

    

    return (
        <div className="  w-2/3">
             
           {/* <h2>Recepies : {recepies.length} </h2> */}
           <div className="grid md: grid-cols-2">
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