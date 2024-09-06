import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Cooking from './components/Cooking/Cooking'
import Header from './components/Header/Header'
import Recepies from './components/Recepies/Recepies'
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cookes,setCookes] = useState([]);
  
  const handleRecepiCount = (cook) =>{
    const newCookes = [...cookes, cook];
 
//console.log(newCookes)
// const result = newCookes.reduce((finalArray,current)=>{
//   console.log(current)
//   let obj = finalArray.find((item)=>item.id===current.id)
//   if(!obj){
//     return finalArray.concat([current])
//   }
//   return  alert('dd')


// },[])
// setCookes(result)

//single data pass 
const result = newCookes.filter((value,index)=>{
 //console.log(index)

 let obj =newCookes.indexOf(value) === index;
// console.log(newCookes.indexOf(value))
 if(obj){
    return newCookes.concat([index]);

 }
 else{
 toast("Already Exist");

 }

})

setCookes(result);

  }

  return (  
    <div className='md: max-w-7xl	 mx-auto'>
        <Header></Header>
        <Banner></Banner>
        <div className='flex my-14'> 
          <Recepies handleRecepiCount={handleRecepiCount}></Recepies>
          <Cooking cookes={cookes} setCookes={setCookes} ></Cooking>
        </div>
        <ToastContainer />

    </div>
  )
}

export default App
