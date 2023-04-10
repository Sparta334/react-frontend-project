
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



export default function Home(){

    const {
        token: { colorBgBase, colorTextBase },
      } = theme.useToken();
    
    


    return(

        <div className={style.container}>

                <style>{`
                    body { 
                        background-color: ${colorBgBase}; 
                        color: ${colorTextBase}
                        }
                      
                `}</style>
    
            <Header/>
            <MainCarousel className={style.MainCarousel} />
            <ProductList Title="熱門遊戲" InputJson={Popalur}/>
            <ProductList Title="最新遊戲" InputJson={NewSet} />
            <Footer/>

            
        </div>

    )


        
}