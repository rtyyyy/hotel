// import express from 'express'
import bodyParser from 'body-parser'
import ejs from 'ejs'
import express from 'express';
const port = 3005; 
const app = express()


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'get, post, put, delete'); 
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

const rooms =[ 
                {id:'1', img:'/images/room3.webp', price:'7000p', title:'Стандарт улучшенный' , description:' Три комнаты с тремя кроватями и раскладным диваном , а также с двумя балкономи с которых открывается великолепный вид на море а также массажным креслом. Сейф, кондиционер , ТВ , душ, санузел, два холодильника . - всё это есть здесь  (Yalta Intourist)' },
                {id:'2', img:'/images/room2.webp', price:'5000p', title:'Стандарт' , description:' Две комнаты  с тремя кроватями и раскладным креслом , а с также балконом с видом на горы. Сейф, кондиционер , ТВ , душ, санузел, холодильник . - всё это есть здесь(Yalta&nbsp;Intourist) ' },
                {id:'3', img:'/images/room1.webp', price:'6000p', title:'Стандарт улучшенный' , description:' Две комнаты с тремя кроватями и диваном ,  а с также балконом с видом на горы. Сейф, кондиционер , ТВ , душ, санузел , холодильник. - всё это есть здесь (Yalta Intourist)' },
                {id:'4', img:'/images/room4.webp', price:'2000p', title:'Эконом' , description:' Одна комната с двумя кроватями и  диваном в уютном помещении к тому же в минутной доступности от моря.   ТВ , душ, санузел , холодильник. - всё это есть здесь(Yalta Intourist)' }
            ]
app.get('/room/', (req, res) => {
    res.json(rooms);                  
  });

  app.get('/room/:id', (req, res) => {
    const roomId = req.params.id;  
    const room = rooms.find( (item)=>  `${item.id}` === `${roomId}`)  
    if (room.id === roomId) {
      res.json(room); 
    } else {
      res.status(404).send('room not found'); 
    }
  });

  const newsArr =[ 
    {id:'1', img:'/images/news1.jpg',  title:'Приглашаем на «Октоберфест» в отеле Yalta Intourist!' , text:'На дворе октябрь, а это значит, что в отеле Yalta Intourist проходит традиционный фестиваль «Октоберфест».' ,  description:' В субботу, 21 октября, смотровая площадка, где расположен всеми любимый лаундж-бар «Бездна», станет эпицентром радости и веселья не только для любителей пенного, но и всех, кто желает отлично провести время, получить заряд ярких впечатлений и просто насладиться праздником. Здесь будет представлен широкий ассортимент пива, вкуснейших закусок, а также насыщенная развлекательная программа. Гостей ожидает море приятных сюрпризов, конкурсов и подарков, выступление кавер-групп, танцевальные интерактивы, турниры по бирпонгу и, конечно же, дегустация пенного. ' },
    {id:'2', img:'/images/news2.jpg',  title:'Новый год на берегу Чёрного моря' , text:'На дворе золотая октябрьская пора, а значит пришло время планировать новогодний отдых на берегу Чёрного моря.' , description:'Проведите эти волшебные дни в отеле Yalta Intourist. Для Вас уже разработано новое специальное предложение и приготовлено множество приятных сюрпризов. Праздничное настроение гарантировано! Приятным дополнением к праздничным дням станет шум Чёрного моря, заснеженные вершины гор и волшебная атмосфера легендарного отеля Yalta Intourist.' },
    {id:'3', img:'/images/news3.jpg', title:' VIII Международная специализированная медицинская выставка прошла в Крыму' ,text:'С 27 по 29 сентября в концерт-холле «Хрустальный» отеля Yalta Intourist прошла VIII Международная специализированная медицинская выставка «Здравоохранение. Крым 2023».' , description:'Организатором мероприятия выступила компания «ЭкспоКрым» – одна из крупнейших компаний по проведению выставочных мероприятий в регионе. Начиная с 2014 года, компания ежегодно выбирает площадки отеля Yalta Intourist для проведения своих мероприятий. На выставку приехали ведущие представители специализированных компаний из Москвы, Рязани, Калуги, Ростова-на-Дону, Краснодара и Крыма. В самом большом зале отеля были представлены экспозиции медицинского и лабораторного оборудования, одежды и обуви, фармацевтики, дезинфекции, диагностики в направлении офтальмологии и оптики, оборудования для санаторно-курортных комплексов, медицинских центров, материалы для науки и образования в медицине.' },
    {id:'4', img:'/images/news4.jpeg',  title:'Отель Yalta Intourist приглашает на концерты симфонического оркестра' ,text:'Говорят, что симфонический оркестр – это «сердце» оркестрового исполнительства. Именно симфония по своему потенциалу превосходит другие музыкальные формы.' , description:' Время наслаждаться красками южной осени и слушать музыку – головокружительную, как листопад, полную сюрпризов, как погода этой чарующей поры, и согревающей душу, как уютные осенние вечера. Именно такая музыка будет звучать на сцене летнего кинотеатра отеля 14, 20 и 28 октября в исполнении крымскотатарского симфонического оркестра.' },
    {id:'5', img:'/images/news5.jpg',  title:'Здоровье и красота: выгоднее с бонусами Marins Club' ,text:'Как известно, осень – золотая пора для ухода за лицом и телом. После лета и яркого солнца кожа нуждается в особом уходе, чтобы не только восстановить силы, но и подготовиться к зиме.' , description:' Центры омоложения и оздоровления отеля Yalta Intourist располагают необходимым арсеналом самых современных средств и методик для вашей красоты и здоровья. Наши высококвалифицированные врачи-косметологи всегда с радостью проведут консультацию и подберут для вас наиболее эффективный комплекс процедур.  ' }
]
app.get('/news/', (req, res) => {
  res.json(newsArr);                  
});

app.get('/news/:id', (req, res) => {
  const newsId = req.params.id;  
  const news = newsArr.find( (item)=>  `${item.id}` === `${newsId}`)  
  if (news.id === newsId) {
    res.json(news); 
  } else {
    res.status(404).send('news not found'); 
  }
});
const feedbacks =[ 
  {id:'1', img:'/images/kozlov.jpg', name:'Виктор Козлов'  ,comment:' Наконец-то у нас появился удобный сервис с большим выбором отелей, нулевой комиссией и отсутствием предоплаты. Прекрасная альтернатива известным зарубежным сервисам и, пожалуй, лучший сервис по бронированию гостиниц в Рунете. Теперь я знаю, где буду выбирать гостиницы для своей следующей поездки.' },
  {id:'2', img:'/images/tolstokorov.jpg', name:'Максим Толстокоров' , comment:'YALTA INTOURIST - это редкий сайт, где название полностью соответствует содержанию. Тысячи отелей на любой вкус и кошелек по всему миру. Интерфейс спроектирован так, чтобы можно было выбрать нужный вам вариант буквально за несколько минут и тут же его забронировать. Спасибо за отличный сервис. Свои путешествия теперь начинаю с вас!' },
  {id:'3', img:'/images/kosenkova.jpg', name:'Мария Косенкова' ,comment:'С первого взгляда сервис внушает доверие, тем более, что он позволяет оплачивать отель уже на месте, тем самым уменьшая риск потери денег. Интерфейс дружелюбный и, думаю, что есть куда расти! Я бы только уникальные предложения добавила, ибо, как женщина, люблю, когда есть возможность приобрести что-то по специальной цене.' },
  {id:'4', img:'/images/staroverova.jpg', name:'Екатерина Староверова' , comment:'Очень удобный сервис - цены указаны в рублях, поэтому не будет сюрпризов по поводу "собственного" курса, который предлагают разные операторы. Понравилось детальное описание отелей. Ну, а самое главное для тех, кто пока еще не выучил английский, - вся информация на русском языке. Очень советую друзьям!' },
  {id:'5', img:'/images/mikeda.jpg', name:'Юлия Микеда' ,  comment:'Понравился простой и лаконичный дизайн, ничего лишнего,  карта под рукой, информация об отеле. У вас получилось сделать действительно удобный сервис. С удовольствием буду пользоваться.' },
]
app.get('/feedback/', (req, res) => {
res.json(feedbacks);                  
});
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });