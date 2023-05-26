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
import { useLocation } from "react-router-dom";
import AddToCart from "../../component/Cart/AddToCart/AddToCart";

const supabase = createClient('https://yjfcopvmnoefmqlerdxc.supabase.co' ,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqZmNvcHZtbm9lZm1xbGVyZHhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEwMTk3MDUsImV4cCI6MTk5NjU5NTcwNX0.UAlO3qY6sU4fqOqUEpzuOEyStPMf1eQNR1JepD34QS8' );

const api = axios.create({
    headers: {
        'Access-Control-Allow-Origin': '*'
    },
    baseURL: 'https://energetic-fox-pajamas.cyclic.app',
});

export default function DetailPage() {


    const { pathname } = useLocation();

    const {
        token: { colorBgBase, colorTextBase },
      } = theme.useToken();
    
      const [session, setSession] = useState(null)

      
      const handleSaveClick = (response) => {

        
        localStorage.setItem('myData',   JSON.stringify(response.data));

        
      }
    

  

    const { ProductName } = useParams();

    const [ReveiceData, setData] = useState("");
    const [Name, setName] = useState("");
    const [display, SetDsiplay] = useState("");
    const [ImageUrl, setUrl] = useState("");
    const [Des, setDes] = useState("");
    const [imageURLsState, setImageURLsState] = useState([]);
    const [IsLoad, setLoad] = useState (false);
    const [ProductID , setID] =  useState("001")


    const GetApi = () =>{
    
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
          })
      
           supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
          })
    
    }
    const PostApi =() =>{
        if(session)  {
            
            api.post('/BackEnd/Detail',{
                data:{
                    UserData: session.user.email, 
                    UserViewData: ProductID
                },
            }).then((response) => {

                    console.log(response)
                    handleSaveClick(response)
                    console.log("UUUU")
              })
              .catch(function (error) {
                console.log(error);
              });
    
    
        }
       



   


 
    if(session == null){
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })
    }
      

        
        console.log(session.user.email)

    
    }

    const GetDataApi= () =>{
        
        api.get('/BackEnd/Products/' + ProductName).then(res => {
            setData(res.data)
            setDes(res.data.Description)
            setUrl(res.data.imageUrl)
            setID(res.data.itemId)

            console.log(res.data.itemId);
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

    
    
    }


    useEffect(() => {

        const fetchData = async () => {


            
             await Promise.all([
                GetApi(),
                GetDataApi(),
                PostApi(),
            ]) ;
            

             
 
        
        }

        fetchData()

    }, [ProductName , session==null]); // 空数组告诉 React 仅执行一次


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
        slidesToScroll: 1,
        arrows:false
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
                    <AddToCart product={ReveiceData} qty={1} />
                </div>
            )}
            
            <Footer className={style.footer} />



            
        </div>
    );

}