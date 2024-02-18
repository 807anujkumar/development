//  import style from "Dispaly.module.css"
 export default function Display( {displayhandle,onclikhandle})
{
 return <> 
    <div className="input-group mb-3">
  <input type="text" className="form-control Dinput"  placeholder="Enter the food Item" aria-label="Recipient's username" aria-describedby="button-addon2" onKeyDown={displayhandle} />
    
  <button className="btn btn-outline-success btn-warning" type="button" id="button-addon2"onClick={()=>onclikhandle()}>Add</button>
</div>

       
</> 
}