//import { useState } from "react";
import Preparing from "../Preparing/Preparing";


const CurrentCook = ({preparies}) => {


//     console.log(preparies)
  
//     for(const total of preparies){
//         let newTotal = [...total.preparing_time+totalTime]
//         console.log(newTotal)
//     }


    return (
        <div>
                <h3 className="text-center text-2xl mb-6 font-bold my-4">Currently Cooking: {preparies.length}</h3>
                <hr className="m-6"/>

                <div>
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

                    {
                        preparies.map((prepare,idx)=><Preparing key={idx} prepare={prepare}></Preparing>)
                    }
                     
                  
                   <div>
                    
                   </div>
                </div>

        </div>
    );
};

export default CurrentCook;