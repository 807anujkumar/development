 import Item from "./items"
 export function FoodItem({getfood,foodclick}){
    return<>
    { getfood.map((item ,index)=><li key={index}className=" item"> <b><Item getitem={item} ></Item></b> <span> <button className="btm" onClick={(e)=>foodclick(item,e)}>Buy</button></span>
</li> )}
    </>

}