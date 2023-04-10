import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './redux/Store'
import Home from './page/Home/Home'
import DetailPage from './page/DetailPage/DetailPage'
import LogIn from './page/Login/Login'
import ScrollToTop from './component/ScrollTo/ScrollTo'
import './App.css'

function App() {



  return (

    <Provider store= {Store}>
              

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pages" >
              <Route path=":ProductName" element={ <DetailPage/>}  />
        </Route>
        <Route path="login" element={<LogIn/>} />
      </Routes>
      <ScrollToTop/>
      </BrowserRouter>


    </Provider>
  )
}

export default App
