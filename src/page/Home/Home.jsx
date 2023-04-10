
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
import Prolist from "../../component/ProuctList/ProductList"


export default function Home(){

    const {
        token: { colorBgBase, colorTextBase ,colorNavText},
      } = theme.useToken();
    
      const [Data, setData] = useState(null)

      useEffect(() =>{


        setData(localStorage.getItem('myData'));
      } ,[])



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
               localStorage.getItem('myData') ? console.log( localStorage.getItem('myData'))  :  <ProductList Title="專屬於你" InputJson={ExculsiveToYou} />
            }
            
            <Footer/>

            
        </div>

    )


        
}

// <Prolist Title="專屬於你" InputJson={localStorage.getItem('myData')} />