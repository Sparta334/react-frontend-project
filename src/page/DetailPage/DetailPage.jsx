import { useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../component/Header/Header";
import axios from "axios";
import style from './detailPage.module.css'
import { Image } from "antd";
import {Row , Col ,Button} from 'antd'

const api = axios.create({
    headers: {
        'Access-Control-Allow-Origin': '*'
     },
    baseURL: 'https://energetic-fox-pajamas.cyclic.app',
});

export default function DetailPage(){

    const {ProductName} = useParams();
    
    const [ReveiceData, setData] = useState("");
    const [Name , setName] = useState("");
    const [display , SetDsiplay] = useState("");
    const [ImageUrl , setUrl] = useState("");
    const [Des , setDes] = useState("");
    const [imageURLsState, setImageURLsState] = useState([]);

    console.log(ProductName);

    useEffect(() => {
        api.get('/BackEnd/Products/' +  ProductName ).then(res => {

            console.log(res)
                setData( res.data)
                setDes(res.data.Description)
                setUrl(res.data.imageUrl)

                const detailArray = res.data.Detail;
                const Temo = []
                for(let i = 0 ; i<detailArray.length ; i+=1 ){
                    Temo.push(detailArray[i])
                }
                setImageURLsState(Temo);
                 
                console.log()
                               
            
        } ).catch(error => {
            console.error(error);
    
            const NoEntry = `
            
                <div>       
    
                    禁止進入
                
                </div>
            `
    
               
    
    
            SetDsiplay( NoEntry );
          });
    
        
    
      }, []); // 空数组告诉 React 仅执行一次
    

    
 
    return(

        <div>
            <Header />
            <div className={style.title} > {ReveiceData.ProductName} </div>
            <img src={ImageUrl} className={style.img} />
            <Row gutter={[2, 12]}>
            
                {

                        imageURLsState.map((imageURL, index) => (

                        <Col key={index}className={style.imgbox}><Button className={style.BtnImgBox} type="primary" size="large" onClick={ () =>setUrl(imageURL)  }  > <img src={imageURL} height="100%" width="100%" alt="" /> </Button>  </Col>

                    )) 
                    
                }
            

            </Row>

            <div className={style.Description}>
                
                {Des}

            </div>

        </div>
    );

}