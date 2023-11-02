import Header from "../header/header"
import { useEffect, useState } from "react";
import './news.css'
import { Link } from "react-router-dom";
interface INews{
    id:string,
    img:string,
    text:string,
    title:string,
    description:string,
}
function News(){
    const [newsArr, setNews] = useState<INews[]>([]);
    useEffect(()=>{
        fetch("http://localhost:3005/news/") 
        .then(res =>  res.json())
        .then(news => setNews(news))
        .catch(error => console.log("ашыпка"));
    }, []) ; 
    return(
        <div>
            <Header/>
            <div style={{textAlign:'start', marginLeft:'20vw'}}>
                <div className="title--wrapper">
                        <p>Главная / новости</p>
                        <h1>Новости</h1>
                </div>
                <div className="news__content--wrapper">
                    {newsArr.map(news =>(
                        <div key={news.id}>
                            <Link to={`http://localhost:3000/newsItem/${news.id}` }  style={{textDecoration:'none' , color: 'rgba(39, 38, 38, 0.815)'}}>
                            <div className="news__content--item">
                            <img src={news.img} alt="" />
                            <h3>{news.title}</h3>
                            <p style={{marginLeft:0}}>{news.text}</p>
                            </div>
                            </Link>
                        </div>
                    ))}
                        
                        
                    </div>
            </div>
                
        </div>
    )
}

export default News