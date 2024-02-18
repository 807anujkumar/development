let Maping=({ietmes})=>{
    return<>
    <ul>
        <h3> this is the length of the persent array {ietmes.length} </h3>
 {ietmes.map((ietem,index)=><li key={index}>{ietem}{index}</li>)}
 <h2>Here end  of the articale,
     so try to go the next line.

 </h2>
    </ul>
    </>

}
export default Maping