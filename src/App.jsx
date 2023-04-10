import { useEffect, useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './redux/Store'
import Home from './page/Home/Home'
import DetailPage from './page/DetailPage/DetailPage'
import LogIn from './page/Login/Login'
import ScrollToTop from './component/ScrollTo/ScrollTo'
import './App.css'
import { ConfigProvider } from 'antd';
import { lightTheme , darkTheme  } from './theme'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { theme } from 'antd'

function App() {

  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };


useEffect(() =>{

  console.log(isDarkMode)


},[isDarkMode])



  return (

    <div>


        <DarkModeSwitch
          className='Swicth'
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={30}


        />



    <Provider store={Store}>
              
    <ConfigProvider  theme={ isDarkMode ?  darkTheme : lightTheme   }>
      

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

      </ConfigProvider>
    </Provider>
    

    </div>
  )

}

export default App
