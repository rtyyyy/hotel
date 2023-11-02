import Header from "../header/header"
import './prices.css'
function Prices(){
    return(
        <div>
            <Header/>
            <div className="title--wrapper" style={{textAlign:'start', marginLeft:'20vw'}}>
                <p>Главная / Цены</p>
                <h1>Цены</h1>
                <h2>Прейскурант цен (Справочная информация)</h2>
                <p style={{fontSize:14}}>По проживанию в гостинице «YALTA INTOURIST» на период с 11.01.16 по 31.12.16</p>
            </div>
            <div  className='table__price--wrapper'  > 
            <div className="room__type--price">
                <div className="room__header--price">
                    <p style={{width:350, height:102.5, display:'flex',alignItems:'center'}}>Тип номера</p>
                </div>
                <div className="room__desc--price">
                    <p>Трёхместный трёхкомнатный</p>
                    <p>Спальня: (три кровати , кондиционер, сейф, Тв, душ, санузел, балкон, холодильник)</p>
                    <p>Гостинная:(комплект мягкой мебели, кондиционер, холодильник, саунзел , балкон )</p>
                </div>
                <div className="room__desc--price">
                    <p>Трёхместный двухкомнатный</p>
                    <p>Спальня: (три кровати , кондиционер, сейф, Тв, душ, санузел, балкон)</p>
                    <p>Гостинная:(комплект мягкой мебели, кондиционер, холодильник, саунзел  )</p>
                </div>
                <div className="room__desc--price">
                    <p>Трёхместный двухкомнатный</p>
                    <p>Спальня: (три кровати , кондиционер, сейф, Тв, душ, санузел, балкон)</p>
                    <p>Гостинная:(комплект мягкой мебели, кондиционер, холодильник, саунзел )</p>
                </div>
                <div className="room__desc--price">
                    <p>Двуместный однокомнатный</p>
                    <p>Спальня: (две кровати , кондиционер, сейф, Тв, душ, санузел, балкон)</p>
                    <p>Гостинная:(комплект мягкой мебели,  холодильник, саунзел )</p>
                </div>
            </div>
            <div className="room__placement--price">
                <div className="room__header--price">
                    <p style={{width:120, height:102.5, display:'flex',alignItems:'center',marginLeft:0}}>Вид размещения</p>
                </div>
                <div className="room__amount--price">
                    <p style={{background:"rgba(187, 185, 185, 0.466)"}}>2-местное</p>
                    <p>3-местное</p>
                    <p style={{background:"rgba(187, 185, 185, 0.466)" }}>Доп место</p>
                </div>
                <div className="room__amount--price">
                    <p >2-местное</p>
                    <p style={{background:"rgba(187, 185, 185, 0.466)"}}>3-местное</p>
                    <p >Доп место</p>
                </div>
                <div className="room__amount--price">
                    <p style={{background:"rgba(187, 185, 185, 0.466)"}}>2-местное</p>
                    <p>3-местное</p>
                    <p style={{background:"rgba(187, 185, 185, 0.466)"}}>Доп место</p>
                </div>
                <div className="room__amount--price" style={{borderBottom:'1px solid rgba(167, 161, 161, 0.452)'}}>
                    <p>2-местное</p>
                    <p style={{background:"rgba(187, 185, 185, 0.466)"}}>3-местное</p>
                    <p>Доп место</p>
                </div>
            </div>
            <div className="room__placement--price">
                <div className="room__header--price">
                    <p style={{width:120, height:102.5, display:'flex',alignItems:'center', textAlign:'start',marginLeft:0}}>цена рублей с 11.01 по 01.06.16</p>
                </div>
                <div className="room__amount--price">
                    <p style={{background:"rgba(187, 185, 185, 0.466)"}}>6500p</p>
                    <p>7000p</p>
                    <p style={{background:"rgba(187, 185, 185, 0.466)" }}>800p</p>
                </div>
                <div className="room__amount--price">
                    <p >6000p</p>
                    <p style={{background:"rgba(187, 185, 185, 0.466)"}}>6500p</p>
                    <p >700p</p>
                </div>
                <div className="room__amount--price">
                    <p style={{background:"rgba(187, 185, 185, 0.466)"}}>5000p</p>
                    <p>5800p</p>
                    <p style={{background:"rgba(187, 185, 185, 0.466)"}}>800p</p>
                </div>
                <div className="room__amount--price" style={{borderBottom:'1px solid rgba(167, 161, 161, 0.452)'}}>
                    <p>2000p</p>
                    <p style={{background:"rgba(187, 185, 185, 0.466)"}}>2500p</p>
                    <p>500p</p>
                </div>
            </div>
            <div className="room__placement--price">
                <div className="room__header--price">
                    <p style={{width:120, height:102.5, display:'flex',alignItems:'center', textAlign:'start',marginLeft:0}}>цена рублей с 01.06 по 30.09.16</p>
                </div>
                <div className="room__amount--price">
                    <p style={{background:"rgba(187, 185, 185, 0.466)"}}>6900p</p>
                    <p>7500p</p>
                    <p style={{background:"rgba(187, 185, 185, 0.466)" }}>950p</p>
                </div>
                <div className="room__amount--price">
                    <p >6300p</p>
                    <p style={{background:"rgba(187, 185, 185, 0.466)"}}>6800p</p>
                    <p >820p</p>
                </div>
                <div className="room__amount--price">
                    <p style={{background:"rgba(187, 185, 185, 0.466)"}}>5300p</p>
                    <p>6000p</p>
                    <p style={{background:"rgba(187, 185, 185, 0.466)"}}>900p</p>
                </div>
                <div className="room__amount--price" style={{borderBottom:'1px solid rgba(167, 161, 161, 0.452)'}}>
                    <p>2200p</p>
                    <p style={{background:"rgba(187, 185, 185, 0.466)"}}>2800p</p>
                    <p>580p</p>
                </div>
            </div>
            <div className="room__placement--price">
                <div className="room__header--price">
                    <p style={{width:120, height:102.5, display:'flex',alignItems:'center', textAlign:'start',marginLeft:0}}>цена рублей с 01.10 по 31.12.16</p>
                </div>
                <div className="room__amount--price" style={{borderRight:'1px solid rgba(167, 161, 161, 0.452)'}}>
                    <p style={{background:"rgba(187, 185, 185, 0.466)"}}>6500p</p>
                    <p>7300p</p>
                    <p style={{background:"rgba(187, 185, 185, 0.466)" }}>900p</p>
                </div>
                <div className="room__amount--price" style={{borderRight:'1px solid rgba(167, 161, 161, 0.452)'}}>
                    <p >6200p</p>
                    <p style={{background:"rgba(187, 185, 185, 0.466)"}}>6600p</p>
                    <p >800p</p>
                </div>
                <div className="room__amount--price" style={{borderRight:'1px solid rgba(167, 161, 161, 0.452)'}}>
                    <p style={{background:"rgba(187, 185, 185, 0.466)"}}>5200p</p>
                    <p>5900p</p>
                    <p style={{background:"rgba(187, 185, 185, 0.466)"}}>880p</p>
                </div>
                <div className="room__amount--price" style={{borderBottom:'1px solid rgba(167, 161, 161, 0.452)',borderRight:'1px solid rgba(167, 161, 161, 0.452)'}}>
                    <p>2100p</p>
                    <p style={{background:"rgba(187, 185, 185, 0.466)"}}>2600p</p>
                    <p>550p</p>
                </div>
            </div>
            
            </div>
            
        </div>
    )
}

export default Prices