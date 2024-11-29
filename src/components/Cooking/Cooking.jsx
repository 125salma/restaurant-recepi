import { useState } from "react";
import Cooktable from "../CookTable/Cooktable";
import CurrentCook from "../CurrentCook/CurrentCook";

const Cooking = ({cookes,setCookes}) => {
    //console.log(cookes.calories)
    const [preparies,setPreparies] = useState([]);
    
    const handlePreparing=(id,preparing)=>{

        const newPreparing = [...preparies , preparing];
        setPreparies(newPreparing)
         //console.log('removeitems',id);
         const removePreparing = cookes.filter(cookP=>cookP.recipe_id!==id);
         setCookes(removePreparing);

    }
    
    return (
        <div className="ml-4 md:w-3/6  border border-gray-300 rounded-3xl cook-side p-4">
            <h3 className="text-center text-2xl mb-6 font-bold my-4">Want to Cook: {cookes.length}</h3>
            <hr className="m-6"/>
            <table>
            <thead>
            <tr>
               <th> </th>
               <th className="pl-8">Name</th>
               <th className="pl-12">Time</th>
               <th className="pl-8">Calories</th>
            </tr>
             </thead>
            </table>
            <div>
             
               {
                     cookes.map((cook,idx)=><Cooktable key={idx} cook={cook} handlePreparing={handlePreparing}></Cooktable>)
                }
            
               
            </div>


            <div>
        
            <CurrentCook preparies={preparies} handlePreparing={handlePreparing}></CurrentCook>
            

            </div>
        </div>
    );
};

export default Cooking;