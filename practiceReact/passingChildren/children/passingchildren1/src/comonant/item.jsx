 export function Item({item})
{
    sessionStorage.setItem("productName",item)

    return<>
{ sessionStorage.getItem("productName")}

    {/* {item} */}


    </>

}

