import Heading from './componant/Headinig'
import Display from './componant/Display'
import { FoodItem } from './componant/foodItem'
import './App.css'
import { useState } from 'react'
import Eror from './componant/Error'
import Constainer from './componant/container'
import Item from './componant/items'

 function App() {
  const[Food, setfood]=useState([])
  const[Error,setEror]=useState("Enter the Items")
  function onkeydown0(event)
  {  
  if(event.key=="Enter"|| event.type=="click"){
    if(isNaN(event.target.value) && (event.target.value).length<=15 ){
        let Newfood=[...Food,event.target.value]
                 setfood(Newfood)
event.target .value=" "
    }
    else{
      let value= "Not the valid Ietms ,Enter the only alphabatic Eg: a,a,A,B"
  setEror(value);
      }
  }
}
function buyhandler(food,event)
{
  alert(`  the food item is the ${food} and this is the click type  of the ietm is  ${event.type} `)
}
return  <center>
<Constainer>
  <Heading></Heading>
  <Display displayhandle={onkeydown0} onclikhandle={onkeydown0}></Display>
  <Eror getfood={Food} massege={Error}></Eror>
  <FoodItem getfood={Food} foodclick={buyhandler} ></FoodItem>
  
  </Constainer>
  </center>


}

export default App

