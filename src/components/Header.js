import styles from "./Header.module.css"
import avaYulia from "./../img/ava.png"
const Header = () => {
  return (
    <>
      <header>
        <div className={[styles.header_img]}>
          <img src={avaYulia} alt='Nesterenko Yulia' />
        </div>
        <div className={styles.text}>
          <h2>Nesterenko Yulia</h2>
          <div className={styles.blur}>
            <h1>“easy perfect hairstyle”</h1>
            <p>Актуально для майстрів, які працюють з волоссям</p>
            <a href='#'>Придбати курс</a>
          </div>
        </div>
      </header>
    </>
  )
}
export default Header
