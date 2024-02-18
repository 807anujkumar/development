 import './App.css'
 import Eror from './componant/error'
// import Object from './componant/object'
 let person ={
  Name:"anujkumar",
  age:23,
  state:"bihar",
  dis:"saran",

 }
function App() {
  
  return <>
  <h3>Here we showed the details of the object</h3>
<Eror objectdetails={person}></Eror>

 {/* <Object getdetails={person}></Object> */}
  </>

}

export default App
