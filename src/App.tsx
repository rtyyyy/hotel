import React from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Feedback from './components/feedback/feedback';
import News from './components/news/news';
import Prices from './components/prices/prices';
import Services from './components/services/services';
import Room from './components/room/room';
import RoomItem from './components/details/roomItem';
import NewsItem from './components/details/newsItem';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<About/>} path='/about'/>
      <Route element={<Contact/>} path='/contact'/>
      <Route element={<Feedback/>} path='/feedback'/>
      <Route element={<News/>} path='/news'/>
      <Route element={<Room/>} path='/room'/>
      <Route element={<Prices/>} path='/prices'/>
      <Route element={<Services/>} path='/services'/>
      <Route element={<RoomItem/>} path='/roomItem/:id'/>
      <Route element={<NewsItem/>} path='/newsItem/:id'/>
      </Routes>
    </div>
  );
}

export default App;
