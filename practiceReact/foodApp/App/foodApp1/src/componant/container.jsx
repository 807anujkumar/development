import style from "./container.module.css"
const Constainer=({children})=>{
     return<>
<div className={style.contant}>
    {children}

</div>
    </>
}
export default Constainer
