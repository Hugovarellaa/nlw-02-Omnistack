import { Link } from 'react-router-dom'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import studyIcon from '../../assets/images/icons/study.svg'

import landingSvg from '../../assets/images/landing.svg'
import logoSvg from '../../assets/images/logo.svg'

import './styles.css'

export function Home() {
  return (
    <div id="page-home">
      <div id="page-home-content" className="container">
        <div className="logo-container">
          <img src={logoSvg} alt="Logo Proffy" />
          <h2>Sua plaforma de estudos online.</h2>
        </div>

        <img
          src={landingSvg}
          alt="Image de plataforma de estudos"
          className="hero-img"
        />

        <div className="button-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            <span>Estudar</span>
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar Aulas" />
            <span>Dar aulas</span>
          </Link>
        </div>

        <span className="total-connection">
          Total de 200 conexões já realizada
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  )
}
