import Header from "../header/header"
import './services.css'
function Services(){
    return(
        <div>
            <Header/>
            <div style={{textAlign:'start', marginLeft:'20vw'}}>
                    <div className="title--wrapper">
                        <p>Главная / услуги</p>
                        <h1>Услуги</h1>
                    </div>
                    <div className="services__content--wrapper">
                        <div className="services__content--item">
                            <img src="/images/transfer.webp" alt="" />
                            <h3>Трансфер</h3>
                            <p style={{marginLeft:0}}>
                                В отеле Yalta Intourist бесплатно предоставляется услуга трансфера по маршрутам:
                                ж/д вокзал г. Симферополь - отель - ж/д вокзал г. Симферополь
                                Схема бесплатного трансфера на ж/д вокзале г. Симферополь
                            </p>
                        </div>
                        <div className="services__content--item">
                            <img src="/images/parking.webp" alt="" />
                            <h3>Парковка</h3>
                            <p style={{marginLeft:0}}>
                            Для вашего комфортного пребывания на территории отеля расположены две автомобильные парковки.
                            Нижняя парковка: Для гостей, проживающих в отеле – бесплатно. Для посетителей – 200 р/час.
                            Верхняя парковка: 500 руб/час (первые 15 минут бесплатно).
                            Услуги парковки предоставляются при наличии свободных мест.
                            </p>
                        </div>
                        <div className="services__content--item">
                            <img src="/images/pharmacist.jpg" alt="" />
                            <h3>Аптека</h3>
                            <p style={{marginLeft:0}}>
                            В аптеке представлен широкий ассортимент лекарственных средств, детского питания и товаров для красоты.
                            Находится в конце Торговой галереи на первом этаже отеля.
                            Время работы: с 9.00 до 22.00
                            </p>
                        </div>
                        <div className="services__content--item">
                            <img src="/images/shoping.webp" alt="" />
                            <h3>Торговая галерея</h3>
                            <p style={{marginLeft:0}}>
                            Современная Торговая галерея в отеле Yalta Intourist – это настоящий мир шопинга, где можно приобрести все необходимое, не покидая отель.
                            Здесь вы найдете товары на любой вкус и кошелек, начиная от роскошных вечерних нарядов, заканчивая продуктами питания. 
                            В торговых павильонах расположились магазины курортных предметов и товаров для дома, модных пляжных аксессуаров, брендовой одежды и обуви от классики до спорта, игрушек, фирменных солнцезащитных очков, сумок и украшений. 
                            В конце Торговой галереи находится аптека с широким ассортиментом лекарств, детского питания и товаров для красоты.
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Services