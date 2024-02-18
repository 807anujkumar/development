import Item from "./items";
let Getitems=({getitems})=>{
    const items=getitems.map((item,index)=><h1 style={{background:"red"}} key={index}>{item}</h1>)
    return<>
    {/* <h2 style={{background:"aqua"}}> {items} 
</h2>
    <Item getitems={items}></Item> 
    <p style={ {background:"green"}}> 
    <Item getitems={items}></Item></p>
    <Item getitems={items}></Item>  */}
    {items}

    
    </>
}
export default Getitems;