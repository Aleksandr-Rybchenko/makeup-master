import styles from "./Main.module.css"
const Main = () => {
  return (
    <main className={styles.main}>
      <div className={[styles.container_about]}>
        <p className={[styles.main_text_about]}>
          “Я обожнюю свою роботу. Я люблю гарне та стійке укладання волосся і
          отримую багато позитивних емоцій в роботі з клієнтом.
        </p>
        <p className={[styles.main_text_about]}>
          {" "}
          Хочу поділитися з вами своіми знаннями та техніками напрацьованими
          роками. За посиланням нижче знаходиться мій повний курс
        </p>
        <p className={[styles.main_text_about]}> "Easy perfect hairstyle"</p>
        <p className={[styles.main_text_about]}>
          {" "}
          Курс розрахований на різні типи волосся і враховує всі нюанси роботи,
          тому ви зможете впоратися навіть у найскладніших ситуаціях.
        </p>
        <p className={[styles.main_text_about]}>
          {" "}
          Стань майстром, який робить впевнено та швидко стійкі та об'ємні
          укладання без начісів та гофре. І даруйте емоції своїм клієнтам щодня”
        </p>
        <div className={[styles.main_two_button]}>
          <a href='#' className={[styles.main_btn1]}>
            Переглянути програму
          </a>
          <a href='#' className={[styles.main_btn2]}>
            Придбати курс{" "}
          </a>
        </div>
      </div>
    </main>
  )
}
export default Main
