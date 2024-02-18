// import Name from './componant/chailed'
import './App.css'
import Heading from './componant/heading'
import Getitems from './componant/getitems'
import { Eror } from './componant/error'
let arr=["sabji","dhee","tea","apple","mango","sweets"]
function App() {

  // let name={
  //   name:"anujkumar",
  //   state:"bihar",
  //   age:21,
  // }
  
  
//   let arr=[];
   return <>
<Heading></Heading>
 <p style={{background:"blue"}}><Getitems getitems={arr}></Getitems></p>
<Eror error={arr}></Eror>

{/* <Getitems></Getitems> */}
   {/* <h2 style={{color:"red", background:'aqua'}}>Helthy diet</h2>
   {arr.length==0?<h2> there is no any thing is the persent </h2>:null}
    {arr.map(items =><li>{items} </li> )}   */}
   </>

}

export default App
// this is the props of the recat  props is the jus use the function argument and used as the function but here we say this  the react componant of the react.
