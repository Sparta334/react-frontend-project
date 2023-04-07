import { useState } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Store from './redux/UserProfile'
import Home from './page/Home/Home'
import DetailPage from './page/DetailPage/DetailPage'
import './App.css'

function App() {



  return (
    
    <Provider store= {Store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pages">
          <Route path="Home" element={ <Home/>}/>
          <Route path="Products/:ProductName" element={ <DetailPage/>}  />
        </Route>
      </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
