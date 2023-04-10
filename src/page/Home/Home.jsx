
import {Row , Col} from 'antd';
import { useParams } from 'react-router-dom';
import Header from '../../component/Header/Header';
import Popalur from '../../json/PopularGame.json';
import ExculsiveToYou from '../../json/ExculsiveToYou.json';
import NewSet from '../../json/Newset.json'
import ProductList from "../../component/ProuctList/ProductList"
import MainCarousel from '../../component/Carousel/MainCarousel';
import Footer from '../../component/Footer/Footer';
import style from './home.module.css'
import { theme } from 'antd';
import { useEffect, useState } from 'react';
import Prolist from "../../component/ProuctList/Prolist"
import { createClient } from "@supabase/supabase-js";


const supabase = createClient('https://yjfcopvmnoefmqlerdxc.supabase.co' ,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqZmNvcHZtbm9lZm1xbGVyZHhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEwMTk3MDUsImV4cCI6MTk5NjU5NTcwNX0.UAlO3qY6sU4fqOqUEpzuOEyStPMf1eQNR1JepD34QS8' );


export default function Home(){

    const {
        token: { colorBgBase, colorTextBase ,colorNavText},
      } = theme.useToken();
    
      const [Data, setData] = useState(null)
      const [session, setSession] = useState(null)


      useEffect(() => {
        

        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
          })
      
          supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
          })

          if(session)  {
        
            api.post('/BackEnd/DetailHome',{
                data: JSON.stringify({
                    UserData: session.user.email, 
                }),
            })
              .then(function (response) {
                    handleSaveClick(response)
                    console.log("UUUU")
              })
              .catch(function (error) {
                console.log(error);
              });
    
    
        }
       



   

  }, [])


  function handleSaveClick(response) {

        
    localStorage.setItem('myData', response);
  };


    return(

        <div className={style.container}>

                <style>{`
                    body { 
                        background-color: ${colorBgBase}; 
                        color: ${colorTextBase}
                        },
                `}</style>

            <Header/>
            <MainCarousel className={style.MainCarousel} />
            <ProductList Title="熱門遊戲" InputJson={Popalur}/>
            <ProductList Title="最新遊戲" InputJson={NewSet} />
            {
               localStorage.getItem('myData') ? <Prolist Title="專屬於你" InputJson={localStorage.getItem('myData')}/> :  <ProductList Title="專屬於你" InputJson={ExculsiveToYou} />
            }
            
            <Footer/>

            
        </div>

    )


        
}

// <Prolist Title="專屬於你" InputJson={localStorage.getItem('myData')} />