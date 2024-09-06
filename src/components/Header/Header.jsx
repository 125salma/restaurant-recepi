import { RiAccountCircleLine} from "react-icons/ri";


const Header = () => {
    return (
        //navigation
        <div className="flex justify-between items-center mt-4">
            <h3 className="text-4xl font-bold">Recipe Calories</h3>
            <div className="">
                <ul  className="flex text-slate-500	 ">
                    <li className="px-6">Home</li>
                    <li className="px-6">Recipes</li>
                    <li className="px-6">About</li>
                    <li className="px-6">Search</li>
                </ul>
               
            </div>
              <div className="flex items-center ">
              <input className=" border border-gray-700	w-64 rounded-full
              h-9" type="text" placeholder="     Search"  />
              <span className="pl-2 text-green-950 text-5xl"><RiAccountCircleLine></RiAccountCircleLine></span>
              </div>
        </div>
    );
};

export default Header;