import { useEffect, useState } from "react";
import Header from "../header/header"
import './feedback.css'
interface IComments{
    id:string,
    name:string,
    post:string,
    comment:string
    img:string,
}
function Feedback(){
    const [comments, setComments] = useState<IComments[]>([]);
    useEffect(()=>{
        fetch("http://localhost:3005/feedback/") 
        .then(res =>  res.json())
        .then(comment => setComments(comment))
        .catch(error => console.log("ашыпка"));
    }, []) ; 
    return(
        <div>
            <Header />
            <div style={{textAlign:'start', marginLeft:'20vw'}}>
                    <div className="title--wrapper">
                        <p>Главная / Отзывы</p>
                        <h1>Отзывы</h1>
                    </div>
                
                <div className="comments--wrapper">
                    {comments.map(comment =>(
                    <div key={comment.id}>
                        <div className="comment__item--wrapper">
                            <img src={comment.img} alt=""  />
                            <h1>{comment.name}</h1>
                            <p style={{marginLeft:0}}>{comment.comment}</p>
                        </div>
                    </div>
                    ))}
                </div>
               
                
            </div>
        </div>
    )
}

export default Feedback