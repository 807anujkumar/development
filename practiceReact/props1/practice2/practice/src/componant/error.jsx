import Object from "./object";
let Eror=({objectdetails})=>{
    return<>
    <p>{ objectdetails.age!=23? <h3 style={{color:"red"}}>  sorry! sorry! Plese enter the valid age </h3>:<Object getdetails={objectdetails.age}></Object> }</p>
    </>
}
export default Eror;
