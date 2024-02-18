import { Item } from "./item";
 export default function Fooditem({fooditems, handleclik })
{
return <>
{
    fooditems.map((item,index)=>{
       return  <>
        <div className="para">
        <p key={index}>
                <Item item={item}></Item>
                </p>
            <button onClick={handleclik} >Buy</button> 
    
        </div>
        </>

    }

    )
}

</>
}