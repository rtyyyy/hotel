import { useEffect, useState } from "react";
import Header from "../header/header"
import './room.css'
import { Link } from "react-router-dom";
interface IRoom{
    id:string,
    img:string,
    price:string,
    title:string,
    description:string,
}
function Room(){
    const [rooms, setRooms] = useState<IRoom[]>([]);
    useEffect(()=>{
        fetch("http://localhost:3005/room/") 
        .then(res =>  res.json())
        .then(room => setRooms(room))
        .catch(error => console.log("ашыпка"));
    }, []) ; 
    
    return(
        <div className="room__wrapper"> 
            <Header/>
            <div style={{textAlign:'start', marginLeft:'20vw'}}>
                <div >
                    <div className="title--wrapper">
                        <p>Главная / Номера</p>
                        <h1>Номера</h1>
                    </div>
                </div>
                <div className="room__item--wrapper">
                    {rooms.map(room =>(
                        <div key={room.id}>
                            <Link to={`http://localhost:3000/roomItem/${room.id}` }  style={{textDecoration:'none' , color: 'rgba(39, 38, 38, 0.815)'}}>
                                <div className="room__item">
                                    <img src={room.img} alt="" />
                                    <h2 >{room.title}</h2>
                                    <p style={{color:'rgba(221, 66, 66, 0.884)', marginLeft:0}}>{room.price}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Room