const Preparing = ({prepare}) => {
    //console.log(prepare)
    const {recipe_id,recipe_name,preparing_time,calories} = prepare;

    return (
        <div  className=" bg-slate-100	mt-2">
                            
            <table>
                <tbody>
                <tr className="text-center ">
                    <td className="pl-2">{recipe_id}</td>
                    <td className="w-24">{recipe_name}</td>
                    <td className="w-20">{preparing_time} min</td>
                    <td className="w-24">{calories}</td>
                </tr>
                </tbody>
            </table>
        <div>
            
        </div>
           
         </div>
    );
};

export default Preparing;