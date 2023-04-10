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
import NavBar from "../../component/NavBar/navbar";
import { theme } from 'antd';
import { createClient } from "@supabase/supabase-js";


const supabase = createClient('https://yjfcopvmnoefmqlerdxc.supabase.co' ,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqZmNvcHZtbm9lZm1xbGVyZHhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEwMTk3MDUsImV4cCI6MTk5NjU5NTcwNX0.UAlO3qY6sU4fqOqUEpzuOEyStPMf1eQNR1JepD34QS8' );

const api = axios.create({
    headers: {
        'Access-Control-Allow-Origin': '*'
    },
    baseURL: 'https://energetic-fox-pajamas.cyclic.app',
});

export default function DetailPage() {


    const {
        token: { colorBgBase, colorTextBase },
      } = theme.useToken();
    
      const [session, setSession] = useState(null)

      useEffect(() => {
        

            supabase.auth.getSession().then(({ data: { session } }) => {
                setSession(session)
              })
          
              supabase.auth.onAuthStateChange((_event, session) => {
                setSession(session)
              })

       

      }, [])
  

      function handleSaveClick(response) {
        localStorage.setItem('myData', JSON.stringify(response));
      };

    const { ProductName } = useParams();

    const [ReveiceData, setData] = useState("");
    const [Name, setName] = useState("");
    const [display, SetDsiplay] = useState("");
    const [ImageUrl, setUrl] = useState("");
    const [Des, setDes] = useState("");
    const [imageURLsState, setImageURLsState] = useState([]);
    const [IsLoad, setLoad] = useState(false);
    useEffect(() => {
        api.get('/BackEnd/Products/' + ProductName).then(res => {
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

            const NoEntry = `
            
                <div>       
    
                    禁止進入
                
                </div>
            `




            SetDsiplay(NoEntry);
        });

        console.log(session)

        if(session)  {
            
            api.post('/BackEnd/Detail',{
                body:{
                    UserData: session.user.email, 
                    UserViewData: ProductName
                },
            })
              .then(function (response) {
                    handleSaveClick(response)
                    console.log("UUUU");
              })
              .catch(function (error) {
                console.log(error);
              });
    
    
        }
       




    }, ProductName); // 空数组告诉 React 仅执行一次


    useEffect( ()=>{



    } , ProductName )


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
                <style>{`
                    body { 
                        background-color: ${colorBgBase}; 
                        color: ${colorTextBase}
                        }
                      
                `}</style>
            <NavBar />
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