import style from "./css/Header.module.css";
function Header() {
  return (
    <div>
      <div className={style.header}>
        <p>Intocode Coding Shotcamp</p><img
          className={style.img}
          src="https://a.allegroimg.com/s1024/0c16e6/e6a2c2934081a1171b29ad6a13cc"
        />
      </div>
    </div>
  );
}

export default Header;
