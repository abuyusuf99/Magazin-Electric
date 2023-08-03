import { useState } from 'react'
// import Main from './components/Main.jsx' 
import style from './components/css/Header.module.css'
import { fakedatabase } from './components/fakedatabase.jsx'
import Card from './components/Card'



function App() {

const[data,setData]=useState(fakedatabase)
const[text,setText]=useState('')

const searchProd =(e)=>{
  setText(e.target.value)
}

  return (
    <div>
<div className={style.header}>
  <input 
type="text"
value={text} 
onChange={(e)=> searchProd(e)}/>
</div>
<div className={style.main}>
      <div className={style.left}>

      </div>
      <div className={style.props}>
     { data.filter((item)=>{
    if(item.title.toLocaleLowerCase().includes(text)){
      return item
    }
  }).map((item)=>{
      return (
        // eslint-disable-next-line react/jsx-key
        <Card image={item.image} title={item.title} price={item.price}   />
      )
     })}

       
        </div>
      </div>
      </div>
  )
}

export default App
