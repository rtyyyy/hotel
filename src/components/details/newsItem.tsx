import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../header/header";
import './detail.css'

interface INews{
    id:string,
    img:string,
    text:string,
    title:string,
    description:string,
}

function NewsItem(){
    const [newArr, setNew] = useState<INews| null>(null)
    const { id  } = useParams(); 
    useEffect(()=>{
        if (id){           
            fetch(`http://localhost:3005/news/${id}`)   
            .then(res =>  res.json())
            .then(news => setNew(news))
            .catch(error => console.log("ашыпка"));
        } 
        
    },[id] ) ;
    return(
        <div>
            <Header/>
            <div className="news__item--wrap" style={{textAlign:'start', marginLeft:'20vw'}}>
            <div className="title--wrapper">
                        <p>Главная / новости</p>
                        <h1>Новости</h1>
                </div>
                <div style={{display:"flex"}}>
                    <div className="news__item--img">
                        <img src={newArr?.img} alt="" />
                    </div>
                    <div className="news__item--info">
                        <h1 style={{marginLeft:0}}>{newArr?.title}</h1>
                        <p style={{marginLeft:0}}>{newArr?.text}</p>
                        <p style={{marginLeft:0}}>{newArr?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  NewsItem