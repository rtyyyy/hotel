import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../header/header";
import './detail.css'
import Button from "../buttons/button";
import BookingItem from "../booking/booking";

interface IRoom{
    id:string,
    img:string,
    price:string,
    title:string,
    description:string,
}


function RoomItem(){
    const [modalActive , setModalActive] = useState(false)
    const [room, setRoom] = useState<IRoom | null>(null)
    const { id  } = useParams(); 
    useEffect(()=>{
        if (id){           
            fetch(`http://localhost:3005/room/${id}`)    
            .then(res =>  res.json())
            .then(room => setRoom(room))
            .catch(error => console.log("ашыпка"));
        } 
        
    },[id] ) ;
    return(
        <div>
            <Header/>
            <div style={{display:"flex"}}>
            <div className="room__item--wrap" style={{textAlign:'start', marginLeft:'20vw'}}>
                <h1 style={{width:'70%'}}>{room?.title}</h1>
                <img src={room?.img} alt=""  />
                <p style={{marginLeft:0}}>{room?.description} И всего за - <p style={{color:'rgba(221, 66, 66, 0.884)', fontSize:20, marginLeft:0 }}>{room?.price}!</p></p>
            </div>
            <div className="room__booking--button ">
                <button >
                <li onClick={() => setModalActive(true)} style={{listStyle:'none',background: 'rgba(74, 168, 192, 0.596)' , height:60, width:170,color:'#fff',display:'flex', alignItems:'center',justifyContent:'center'}} >Забронировать номер</li>
                <BookingItem active={modalActive} setActive={setModalActive}  /> 
                </button>
            </div>
            </div>
            
        </div>
    )
}

export default  RoomItem