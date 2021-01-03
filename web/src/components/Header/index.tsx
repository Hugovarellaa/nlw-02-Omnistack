import { Link } from 'react-router-dom'

import backIcon from '../../assets/images/icons/back.svg'
import logoIcon from '../../assets/images/logo.svg'

import { ReactNode } from 'react'
import './styles.css'

interface Props {
  title: string
  children?: ReactNode
}

export function Header({ title, children }: Props) {
  return (
    <>
      <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <img
              src={backIcon}
              alt="Seta para esquerda branca Voltar para Home"
            />
          </Link>

          <img src={logoIcon} alt="Logo Proffy" />
        </div>

        <div className="header-content">
          <strong>{title}</strong>

          {children}
        </div>
      </header>
    </>
  )
}
