import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../component/Header/Header";
import axios from "axios";
import style from './detailPage.module.css'
import { Image } from "antd";
import { Row, Col, Button } from 'antd'
import { Spin } from 'antd';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../component/Footer/Footer";
import './detail.css'

const api = axios.create({
    headers: {
        'Access-Control-Allow-Origin': '*'
    },
    baseURL: 'https://energetic-fox-pajamas.cyclic.app',
});

export default function DetailPage() {

    const { ProductName } = useParams();

    const [ReveiceData, setData] = useState("");
    const [Name, setName] = useState("");
    const [display, SetDsiplay] = useState("");
    const [ImageUrl, setUrl] = useState("");
    const [Des, setDes] = useState("");
    const [imageURLsState, setImageURLsState] = useState([]);
    const [IsLoad, setLoad] = useState(false);
    console.log(ProductName);

    useEffect(() => {
        api.get('/BackEnd/Products/' + ProductName).then(res => {

            console.log(res)
            setData(res.data)
            setDes(res.data.Description)
            setUrl(res.data.imageUrl)

            const detailArray = res.data.Detail;
            const Temo = []
            Temo.push(res.data.imageUrl);

            for (let i = 0; i < detailArray.length; i += 1) {
                Temo.push(detailArray[i])
            }
            setImageURLsState(Temo);
            setLoad(true);


        }).catch(error => {
            console.error(error);

            const NoEntry = `
            
                <div>       
    
                    禁止進入
                
                </div>
            `




            SetDsiplay(NoEntry);
        });



    }, []); // 空数组告诉 React 仅执行一次


    const settings = {
        customPaging: function(i) {
          return (
            <a class="abtn">
              <img class="abtnImg" src={imageURLsState[i]} />
            </a>
          );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (

        <div className={style.header}>
            <Header />
            { !IsLoad ? (
                <div className={style.problemfixed}> <Spin size="large" /></div>
            ) : (
                <div>
                    <div className={style.title} >《 {ReveiceData.ProductName} 》</div>
                    <Slider {...settings}>

                        {

                            imageURLsState.map((imageURL, index) => (

                               <img key={index} src={imageURL} className={style.img}   alt="" />

                            ))

                        }


                    </Slider>

                    <div className={style.Description}>

                        {Des}

                    </div>
                </div>
            )}
            
            <Footer className={style.footer} />



            
        </div>
    );

}