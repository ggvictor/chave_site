import { GiPincers, GiCarKey,  GiPadlock } from "react-icons/gi";
import styles from './Services.module.css'
import chave from '../assets/chave.avif'
import alicate from '../assets/alicate.jpg'
import fechadura from '../assets/fechadura.avif'

const Services = () => {
  return (
    <section className = {styles.services}>
      <span className= {styles.span}>Nossos Serviços</span>
      <h2>O QUE PODEMOS FAZER POR VOCÊ</h2>
      <div className = {styles.services_container}>
        <div className = {styles.service_card}>
          <img src= {chave} alt="chave"  className = {styles.chave}/>
          <span className = {styles.icon_chaves}><GiCarKey/></span>
          <span className = {styles.bold}>Cópia de Chave</span>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo enim corrupti placeat, dolorem provident praesentium dolorum ea amet.</p>
        </div>
        <div className = {styles.service_card}>
          <img src={alicate} alt="alicate"  className = {styles.alicate}/>
          <span className = {styles.icon_alicates}><GiPincers/></span>
          <span className = {styles.bold}>Amolação de Alicates</span>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo enim corrupti placeat, dolorem provident praesentium dolorum ea amet.</p>
        </div>
        <div className = {styles.service_card}>
          <img src={fechadura} alt="fechadura" className = {styles.fechadura} />
          <span className = {styles.icon_fechaduras}><GiPadlock/></span>
          <span className = {styles.bold}>Troca de Fechaduras</span>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo enim corrupti placeat, dolorem provident praesentium dolorum ea amet.</p>
        </div>
      </div>
    </section>
  )
}

export default Services