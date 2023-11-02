import {BsFacebook, BsFillCalendarDateFill, BsFillPhoneFill, BsInstagram, BsLinkedin, BsTwitter} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import {MdEmail} from 'react-icons/md'
import './booking.css'

import { FaBookOpen } from 'react-icons/fa'
import { relative } from 'path'

interface IPopup{
 active: any,
 setActive: any,
 
}
function BookingItem({active, setActive } : IPopup){ 
    return(
        <div className={active ? "popup__wrapper active" : "popup__wrapper"} onClick={()=> setActive(false)}>
            <div className='popup__content' onClick={e => e.stopPropagation()}>
            
                <div className='image__message'>
                    
                    
                    
                </div>
                <div className='content__message--wrapper'>
                    <h2>Забронировать номер</h2>
                    
                    <div className='name__input--popup' >
                        <div>
                            
                            <CgProfile className='icon__profil' style={{    color: '#9ea7a1'}}/>
                            <input placeholder="Имя" type="search" className="input__name"/>
                        </div>
                        <div>
                            <CgProfile className='icon__profil'  style={{    color: '#9ea7a1'}} />
                            <input placeholder="Фамилия" type="search" className="input__surname"/>
                            
                        </div>
                    </div>
                    <div className='email__field--popup' style={{    color: '#9ea7a1'}}>
                        <MdEmail className='icon__email' />
                        <input placeholder="Email" type="email" className="input__email"/>
                    </div>
                    <div className='email__field--popup' style={{    color: '#9ea7a1'}}>
                        <BsFillPhoneFill className='icon__email'  />
                        <input placeholder="Номер телефона" type="search" className="input__phone"/>
                    </div>
                    <div className='date__field--popup'>
                        <p style={{textAlign:'start', marginBottom:0}}>Введите дату приезда:</p>
                        <BsFillCalendarDateFill className='icon__email' />
                        <input placeholder="Введите дату" type="date" className="input__phone" style={{width:'29vw',color:'#9ea7a1'}}/>
                    </div>
                    <div className='date__field--popup' >
                        <p style={{textAlign:'start', marginBottom:0}}>Введите дату когда вы планируете покинуть номер:</p>
                        <BsFillCalendarDateFill className='icon__email' />
                        <input placeholder="Введите дату" type="date" className="input__phone" style={{width:'29vw',color:'#9ea7a1'}}/>
                    </div>
                    <div className='send__message' >
                    <button style={{width:617}}> <p style={{margin:0,position:'relative',left:-35}} >Забронировать</p> </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingItem