import React from 'react'
import ReactDOM from 'react-dom/client'
import './add/global.css';
import twitterLogo from './assets/logo-twitter.svg';
import { Bell, Bookmark, DotsThree, DotsThreeCircle, DotsThreeVertical, Envelope, FileText, Hash, House, Sparkle, User } from 'phosphor-react';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='layout'>
      <aside className='side-bar'>
        <img src={twitterLogo} alt="logo" className='logo'/>
        <nav className='main-navigation'>
          <a className='active' href="#">
            <House weight='fill'/>
            Home
          </a>
          <a href="#">
            <Hash/>
            Explorer
          </a>
          <a href="#">
            <Bell/>
            Notification
          </a>
          <a href="#">
            <Envelope/>
            Messages
          </a>
          <a href="#">
            <Bookmark/>
            Bookmarks
          </a>
          <a href="#">
            <FileText/>
            List
          </a>
          <a href="#">
            <User/>
            Profile
          </a>
          <a href="#">
            <DotsThreeCircle/>
            More
          </a>
        </nav>
        <button className='new-tweet' type='button'>Tweet</button>  
      </aside>
      <div className="content">
        <main className="time-line">
          <div className='time-line-header'>
            Home
            <Sparkle/>
          </div>

          <form className='new-tweet-form' action="">
            <label htmlFor="tweet">
              <img src="https://github.com/patrickluizdev.png" alt="Patrick Luiz" />
              <textarea name="" id="tweet"/>
            </label>
          </form>
        </main>
      </div>
    </div>
  </React.StrictMode>,
)
