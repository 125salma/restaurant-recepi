import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
import './Recepi.css'


const Recepi = ({recepi,handleRecepiCount}) => {
    //console.log(recepi)
   
    const {recipe_id,recipe_image,recipe_name,short_description,ingredients,preparing_time,calories} = recepi;
  
    return (
        <div className="cart-width border border-gray-300 rounded-3xl mb-4 mr-4">
            <div className=" p-4">
                <img className="w-full h-56 rounded-3xl" src={recipe_image} alt="" />
                <h3 className="text-2xl pt-6 font-bold">{recipe_name}</h3>
                <p className="text-slate-500 pt-4 pb-4"><span>{short_description}</span></p>
                <hr />
                <h3 className="text-2xl font-bold pt-4 pb-4">Ingredients: {ingredients.length}</h3>
                <p className="pb-4">

                       {
                        ingredients.map((ingredient,idx)=><li key={idx}>{ingredient}</li>)
                       }
                     
                </p>
                <hr />
                <div className="flex justify-between  mt-4">
                    <p className="flex items-center"><CiClock2 /> {preparing_time} min</p>
                    <p className="flex items-center"><AiOutlineFire /> {calories}</p>
                </div>

                <button onClick={()=>handleRecepiCount(recepi,recipe_id)} className=" font-bold  border border-2 p-4 bg-green-500 rounded-full mt-6">Want to Cook</button>

            </div>
        </div>
    );
};

export default Recepi;