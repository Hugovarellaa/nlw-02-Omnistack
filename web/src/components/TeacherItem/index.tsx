import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

export function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://github.com/Hugovarellaa.png" alt="" />
        <div>
          <strong>Hugo Alves Varella</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de química avançada. <br />
        <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências. Mais de 200.000 pessoas já passaram por
        uma das minhas explosões.
      </p>

      <footer>
        <p>
          <span>Preço/Hora</span>
          <strong>R$ 20,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Ícone do whatsapp" />
          <span>Entrar em contato</span>
        </button>
      </footer>
    </article>
  )
}
