// import { useState } from 'react'
import style from './css/Card.module.css'
// import fakedatabase from './fakedatabase'
function Card({image,price,title}) {

  // const[data, setDatabase] = useState(fakedatabase)
  
  return (
    <div>
        <div  className={style.card}>
            <img className={style.mac} src={image} alt=''/>
            <div>
            <span className={style.span1}>{price}</span>
            </div>
            <span className={style.span3}>{title}</span>
            <button className={style.button}>Купить</button>
        </div>
        </div>
  )
}

export default Card