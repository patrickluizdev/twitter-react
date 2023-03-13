import React from 'react'
import ReactDOM from 'react-dom/client'
import './add/global.css';
import twitterLogo from './assets/logo-twitter.svg';
import { House } from 'phosphor-react';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='layout'>
      <aside className='side-bar'>
        <img src={twitterLogo} alt="logo" className='logo'/>
        <nav className='main-navigation'>
          <a href="#">
            <House/>
            Home
          </a>
          <a href="#">Explorer</a>
          <a href="#">Notification</a>
          <a href="#">Messages</a>
          <a href="#">Bookmarks</a>
          <a href="#">List</a>
          <a href="#">Profile</a>
          <a href="#">More</a>
        </nav>
        <button className='new-tweet' type='button'>Tweet</button>  
      </aside>
      <div className="content">
        content
      </div>
    </div>
  </React.StrictMode>,
)
