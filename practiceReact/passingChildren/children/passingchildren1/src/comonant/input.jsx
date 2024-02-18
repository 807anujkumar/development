 const Input =({keydownhandlar})=>{
  return  <>
<div className="display">

<input type="text" placeholder="Enter the Food Name" className="input" required onKeyDown={keydownhandlar}/>

<button className="btm">Add</button>

</div>
    </>

}
  export default Input