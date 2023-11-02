import './header.css'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
import { Link } from 'react-router-dom'
function Header(){
    return(
        <div className="header__wrapper">
            <div className="header__wrapper--contact">
                <div className='header__wrapper--logo'>
                    <Link to={'/'}><img src="../images/logo.webp" alt="" /></Link>
                </div>
                <div className='phone__image--contact'>
                    <BsFillTelephoneFill/>
                </div>
                <div className='phone__number--contact'>
                    <p>+7 (800) 600-5555 </p>
                    <p>+7 (495) 139-1051</p>
                </div>
                <div className='email__image--contact'>
                    <p><HiOutlineMail/></p>
                </div>
                <div className='header__email--contact'>
                    <p>booking@yaltaintourist.ru</p>
                </div>
            </div>
            <div className="header__wrapper--menu">
                <div className='header__wrapper--menu'>
                    <ul >
                        <Link to={'/'} style={{textDecoration:'none'}}><li>Главная </li></Link>
                        <Link to={'/about'} style={{textDecoration:'none'}}><li>О нас</li></Link>
                        <Link to={'/room'} style={{textDecoration:'none'}} ><li>Номера</li></Link>
                        <Link to={'/prices'} style={{textDecoration:'none'}}><li>Цены</li></Link>
                        <Link to={'/services'} style={{textDecoration:'none'}}><li>Услуги</li></Link>
                        <Link to={'/news'} style={{textDecoration:'none'}}><li>Новости</li></Link>
                        <Link to={'/feedback'} style={{textDecoration:'none'}}><li>Отзывы</li></Link>
                        <Link to={'/contact'} style={{textDecoration:'none'}}><li>Контакты</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header