 
import './App.css'
// import Packinglist from './componant/packinglist'
// import Maping from './componantmaping';
import { Filtering } from './componant/filtering';
// const people = [
//   'Creola Katherine Johnson: mathematician',
//   'Mario José Molina-Pasquel Henríquez: chemist',
//   'Mohammad Abdus Salam: physicist',
//   'Percy Lavon Julian: chemist',
//   'Subrahmanyan Chandrasekhar: astrophysicist'
// ];
const people1 = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}, {
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];


function App() {
return  <>
{/* <Packinglist></Packinglist>
{/* <Maping ietmes={people}></Maping> 

// */} 
<Filtering items={people1} ></Filtering>
</>
   }

export default App
