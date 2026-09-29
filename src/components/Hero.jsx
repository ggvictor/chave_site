import {AiOutlineClockCircle, AiOutlineCheckSquare, AiOutlineDollar} from 'react-icons/ai'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className = {styles.content}>
        <h1>Solução Rápida, <br/>
            <span className = {styles.color}>Segurança</span><br/>
            Que você confia.
        </h1>
        <p className = {styles.p}>Serviços de chaveiro e amolação
          com qualidade, rapidez e confiança.</p>
      </div>
      <button className = {styles.btn}>Nossos serviços</button>
      <div className = {styles.characteristics}>
        <span><AiOutlineClockCircle className ={styles.icon}/>Atendimento rápido</span>
        <span><AiOutlineCheckSquare className ={styles.icon}/>Serviços de qualidae</span>
        <span><AiOutlineDollar className ={styles.icon}/>Preços justos</span>
      </div>
    </section>
  )
}

export default Hero