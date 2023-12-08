import styles from "./Mainblock.module.css"
import firstImg from "./../img/lesson_one/1.png"
import secondImg from "./../img/lesson_one/2.png"
import threetImg from "./../img/lesson_one/3.png"
const Mainblock = () => {
  return (
    <div className={[styles.main_block]}>
      <div className={[styles.container_mainblock]}>
        <h2 className={[styles.main_block_title]}>програма курсу</h2>
        <div className={styles.lesson}>
          <h3 className={[styles.lesson_title_one]}>Урок 1</h3>
          <h3 className={[styles.lesson_name]}>Теорія</h3>
          <p className={[styles.about_lesson]}>Ви навчитеся:</p>
          <div className={styles.block_text}>
            <p className={[styles.lesson_text]}>
              Створювати стійкі комерційні укладки на тяжкому пористому та
              стекловидному волоссі
            </p>
            <p className={[styles.lesson_text]}>Визначення структури волосся</p>
            <p className={[styles.lesson_text]}>
              Підбір вірних стайлінгових засобів відповідно до типу волосся
            </p>
            <p className={[styles.lesson_text]}>
              Обʼєми та форми відповідно до анатомічної особливості форми голови
              та обличчя
            </p>
            <p className={[styles.lesson_text]}>
              Вибір інструментів та температури спираючись на структуру волосся
            </p>
            <p className={[styles.lesson_text]}>
              Вірне стилізування та оформлення укладки
            </p>
          </div>
        </div>
        <div className={[styles.lesson_all]}>
          <h3 className={[styles.lesson_number]}>Урок 2</h3>
          <h3 className={[styles.lesson_title]}>Голівудська хвиля</h3>
          <p className={[styles.lesson_subtitle]}>(Легкі та м’які хвилі)</p>
          <div className={[styles.lesson_video]}>
            <iframe
              width='1170'
              height='650'
              src='https://www.youtube.com/embed/tx68oyg6cqg?si=PN6JUXew6P15mQwP'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
          </div>
          <div className={[styles.lesson_img]}>
            <img src={firstImg} />
            <img src={secondImg} />
            <img src={threetImg} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Mainblock
