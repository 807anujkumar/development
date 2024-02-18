import style from "./container.module.css"
function Container({children}){
    
    return <>
<div className={style.container1}>
    {children}
</div>
    </>
    
     
}
export default Container
