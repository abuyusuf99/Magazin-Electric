import style from './css/Card.module.css'
// import img from './IMG/mac.jpg'
function Card({image,price,discount,title,button}) {
  return (
    <div>
        <div  className={style.card}>
            <img className={style.mac} src={image} alt=''/>
            <div>
            <span className={style.span1}>{price}</span>
            <span className={style.span2}>{discount}</span>
            </div>
            <span className={style.span3}>{title}</span>
            <button className={style.button}>{button}</button>
        </div>
        </div>
  )
}

export default Card