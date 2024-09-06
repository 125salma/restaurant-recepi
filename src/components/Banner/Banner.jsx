import './Banner.css'
const Banner = () => {
    return (
        <div>
           <div className='banner-img h-auto w-full' >
            <div className='text-center p-12' >
            <h2 className='text-7xl text-white font-bold '>Discover an exceptional cooking 
              class tailored for you!</h2>
              <p className='text-white text-2xl pt-6'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding 
              problems to become an exceptionally well world-class Programmer</p>

              <div className='pt-6'>
                <button className='text-black font-bold bg-green-400 border-2 text-3xl p-4  rounded-full'>Explore Now</button>
                <button className='text-white font-bold border-2  ml-4 text-3xl p-4 rounded-full'>Our Feedback</button>
            </div>
            </div>
           
           </div>

           <div className="my-20" >
           <h1 className="text-6xl font-bold text-center ">Our Recipes</h1>
            <p className="text-center text-2xl mt-2 text-slate-500	">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget 
            urna volutpat curabitur elementum mauris aenean neque.</p>
           </div>
        </div>
    );
};

export default Banner;