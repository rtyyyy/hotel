
import Header from '../header/header'
import './contact.css'

function Contact(){
  return(
    <div>
      <Header/>
                <div style={{textAlign:'start', marginLeft:'20vw'}}>
                    <div className="title--wrapper">
                        <p>Главная / Контакты</p>
                        <h1>Контакты</h1>
                    </div>
                    <div className='contact__info--item'>
                      <h1>Адрес отеля</h1>
                      <p>Республика Крым, 298650, г. Ялта, ул. Дражинского, 50. Отель Yalta Intourist.</p>
                    </div>
                    <div className='contact__info--item'>
                      <h1>Email</h1>
                      <p>booking@yaltaintourist.ru</p>
                    </div>
                    <div className='contact__info--item'>
                      <h1>Телефон</h1>
                      <p> +7 (800) 600-5555</p>
                    </div>
                    <div className='contact__info--item' style={{paddingBottom:20}}>
                      <h1>Схема проезда</h1>
                      <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A0de1db3a464a7e19dfdc8b478ecd7f512e6020e019cff17ad509f93e49e73aae&amp;source=constructor" width="1280" height="556" ></iframe>
                    </div>
                </div>
                    

    </div>
  )
}

export default Contact