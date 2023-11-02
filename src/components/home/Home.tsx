import { Link } from "react-router-dom"
import Button from "../buttons/button"
import Header from "../header/header"
import  {BiSolidBed} from 'react-icons/bi'
import  {BsCardList} from 'react-icons/bs'
import  {FaPiggyBank} from 'react-icons/fa'
import './home.css'
function Home(){
    return(
        <div className="home__wrapper">
            <Header/>
            <div className="home__title--wrapper" >
                <img src="./images/backgroundImg.webp" alt="" />
            </div>
            <div className="home__title--info">
                <h1>Гостиница «YALTA INTOURIST»</h1>
                <p>Лучший выбор для комфортного отдыха!</p>
                <Link to={'./room'} ><Button/></Link>
            </div>
            <div className="home__title--footer">
                <Link to={'/room'} style={{textDecoration:'none' , color:"black"}}>
                    <div className="home__footer--item">
                        <BiSolidBed style={{fontSize:70}}/>
                        <p>Комфортабельные номера</p>
                    </div>
                </Link>
                <Link to={'/prices'} style={{textDecoration:'none' , color:"black"}}>
                    <div className="home__footer--item">
                        <FaPiggyBank style={{fontSize:70}}/>
                        <p>Доступные цены</p>
                    </div>
                </Link>
                <Link to={'/services'} style={{textDecoration:'none' , color:"black"}}>
                    <div className="home__footer--item">
                        <BsCardList style={{fontSize:70}}/>
                        <p>Широкий спектр услуг</p>
                    </div>
                </Link>
            </div>
            
        </div>
    )
}

export default Home