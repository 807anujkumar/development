 import Fooditem from "./fooditems"
import { Item } from "./item"
 const Eror = ({massage})=>{

function handleclik(event,item){
     
}

    return <>
{massage.length==0?<h3>Here no any food  list  the present</h3>:<Fooditem fooditems={massage} handleclik={handleclik}></Fooditem>
}
    </>
 }
 export  default Eror
