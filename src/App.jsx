import { useState } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Store from './redux/UserProfile'
import Home from './page/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <Provider store= {Store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pages">
          <Route path=":pagesName" element={ <Home/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
