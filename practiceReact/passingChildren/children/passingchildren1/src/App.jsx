 import { useState } from 'react'
import './App.css'
import Heding from './comonant/Heading'
import Container from './comonant/container'
// import Fooditem from './comonant/fooditems'
import Eror from './comonant/eror massege'
import Input from './comonant/input'
function App() {
const [food,setsatte]=useState([]);
// food.length=0

//  let showtext=state_manage[0]
//  let setsatte=state_manage[1]
//  console.log(setsatte);
//  console.log(showtext);
// here we canused the state mangenment of the topic  and cencept to rebder the any thing in the broweser so let's satrt
function onkedown(event)
{
//   console.log(event1)
//   console.log(event1.target.value)
  // console.log(event);
  // if(event.key=="Enter")
  // {
     if(event.key=="Enter")
     {
    // alert(event.target.value)
    let food1=[...food,event.target.value]
  setsatte(food1);
  
 event.target.value=" "
     }
// else
// console.log("not a vlid keyword");
// }
}
//  food.length=0;
  return  <>
   <center>
<Container>
   <div className='container1'>
   <Heding></Heding>
   <Input keydownhandlar={onkedown}></Input>
 <Eror massage={food}></Eror>
 {/* <p>{showtext}</p> */}
   </div>
  </Container>
   </center>
 
 {/* <Fooditem fooditems={food}></Fooditem> */}

     
    </>

}

export default App
