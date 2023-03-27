import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Postagem from './pages/Postagem'
import Profile from './pages/Profile'

const Router = () => {
    const user = {
        id: 15071997,
        username: 'Mateus',
        avatar: 'https://www.smitefire.com/images/god/icon/fenrir.png',
        auth: '^lw%V2voS5HjeLfEghE2YWw4U$cv0pVj2Pd8LzFQLilkpNt^sQ'
    }

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home user={user}/>} />
            <Route path='/profile/:userID' element={<Profile user={user}/>} />
            <Route path='/post/:id' element={<Postagem user={user}/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router