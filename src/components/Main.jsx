import Card from "./card";
import style from "./css/Main.module.css";

function Main() {
  return (
    <div className={style.main}>
      <div className={style.left}>
        <p className={style.p}>Гаджеты и аксессуары</p>
        <p className={style.p}>Бытовая техника</p>
        <p className={style.p}>Прочее</p>
      </div>
      <div className={style.props}>
        <Card
          image="https://static.eldorado.ru/photos/mv/Pdb/30064275b.jpg/resize/380x240/"
          price="75000 ₽ "
          discount="90000 ₽"
          title="MacBook"
          button="Купить"
        />
        <Card
          image="https://www.icases.ru/upload/resize_cache/iblock/69e/882_882_0/69e59cde49751e70afd000838983bc78.webp"
          price="72000 ₽ "
          discount="80000 ₽"
          title="Iphone 14 Pro Max"
          button="Купить"
        />
        <Card
          image="https://img.flandosales.ru/r/MrLJIWAA6Ik/rs:fit:560:0:1/plain/images/products/1/5462/720745814/700-nw.jpg@webp"
          price="58950 ₽ "
          // discount="1500000 ₽"
          title="Скутер"
          button="Купить"
        />
        <Card
          image="https://img.mvideo.ru/Pdb/30025150b.jpg"
          price="12000 ₽ "
          title="Монитор Samsung"
          button="Купить"
        />
        <Card
          image="https://forinshop.ru/upload/resize_cache/iblock/1f7/300_300_1/3x8rtszdv6bs07tkxkjkfpilor95uhgv.jpg"
          price="11000 ₽ "
          title="Респираторная маска"
          button="Купить"
        />
        <Card
          image="https://img.mvideo.ru/Big/20083823bb.jpg"
          price="49900 ₽ "
          title="Стиральная машина"
          button="Купить"
        />
        </div>
      </div>
  );
}

export default Main;
