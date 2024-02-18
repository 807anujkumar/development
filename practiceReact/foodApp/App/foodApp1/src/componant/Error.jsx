function Eror({getfood,massege})
{
    return<>
    {getfood.length==0 ?<h3>{massege}</h3>:isNaN(massege)&& getfood.length==0? <h3> {massege}</h3> :null}

    </>
}
export default Eror;

