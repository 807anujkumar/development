export function Filtering({items})
{
    // console.log(items);

    return<>
    <ul>
{items.filter((item)=>item. profession==="chemist").map((item1,index)=><li key={index}>{item1.name}</li>)}
 

        
        
            
        
    </ul>
 
    </>
}
