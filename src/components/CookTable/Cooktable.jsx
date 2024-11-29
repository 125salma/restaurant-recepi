const Cooktable = ({cook,handlePreparing}) => {
   // console.log(cook)

    const {recipe_id,recipe_name,preparing_time,calories} = cook;
    

  
    return (
        <div>
        <div className="lg:flex items-center bg-slate-100 mt-2">
            <div >
            <table>
                <tbody>
                    <tr className="text-center">
                    <td className="pl-2">{recipe_id}</td>
                    <td className="w-24">{recipe_name}</td>
                    <td className="w-20">{preparing_time} min</td>
                    <td className="w-24">{calories}</td>
                    </tr>
              </tbody>
            </table>
         </div>


<button onClick={()=>handlePreparing(recipe_id,cook)} className="font-bold border border-2 p-2 bg-green-400 bg-green-500 rounded-3xl">Preparing</button>

 </div>
 <div>
    
 </div>
 </div>
    );
};

export default Cooktable;