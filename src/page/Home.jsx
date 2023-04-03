
import {Row , Col} from 'antd';
import { useParams } from 'react-router-dom';
import Header from '../component/Header/Header';
import Popalur from '../json/PopularGame.json';
import ExculsiveToYou from '../json/ExculsiveToYou.json';
import NewSet from '../json/Newset.json'
import ProductList from "../component/Carousel/ProductList"

export default function Home(){


    const {pagesName} = useParams();


    return(

        <div className="container">

            <Header/>
            
            <ProductList Title="熱門遊戲" InputJson={Popalur}  />
            <ProductList Title="最新遊戲" InputJson={NewSet} />

        </div>

    )



}