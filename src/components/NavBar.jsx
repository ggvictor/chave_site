import {FaWhatsapp, FaKey} from 'react-icons/fa'
import React from 'react'
import styles from './NavBar.module.css'
const NavBar = () => {
  return (
      <nav className= {styles.container}>
        <div className = {styles.logo}>
        <FaKey className={styles.icon}/>

          <div>
            <h1>CHAVEIRO</h1>
            <span>E AMOLADOR</span>
          </div>
        </div>
        <ul className = {styles.lista}>
          <li>
           <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#servicos">Serviços</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#galeria">Galeria</a>
          </li>
          <li>
            <a href="#depoimentos">Depoimentos</a>
          </li>
          <li>
            <a href="contatos">Contatos</a>
          </li>
        </ul>
        <button className = {styles.button}>
          <FaWhatsapp className= {styles.zap}/>
          WhatsApp
        </button>
      </nav>
  )
}

export default NavBar