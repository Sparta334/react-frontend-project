
import {Row , Col , Image} from 'antd';
import { useState} from 'react';
import { Space } from 'antd';
import { Button } from 'antd/es/radio';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import Style from './ProductList.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProductList.css'
export default function ProductList({Title , InputJson  }){

    const [inPos ,setInPos ] = useState(0);
    const [width, setWidth] = useState(0);

    const Chan = (offest)  =>{

        let re =inPos+offest ;
        if(re > 4){
            re = 4;
        }
        else if(re < 0){
            re =  0;
        }

        setInPos(re);
       
        let box = document.querySelector(".ImageBox");
        setWidth(box.clientWidth);

    }


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        initialSlide: 0,
        draggable:true,
        swipeToSlide: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
              }
            }
          ]
        };

    return(
        
        <div className={Style.ItemsLayout}>

            <div>{Title}</div>
            <Slider {...settings}  >
            {/* <motion.div animate={{ x:- width*inPos }}> */}
                {       


                        InputJson.map((product)=> (
                            <Space size={32}>
                            <div className="ImageBox" key={product.id} >

                                <Image.PreviewGroup>
                                <Image 
                                     preview={{ visible: false }}
                                    src={product.imageUrl} 
                                    height="90%" 
                                    width="90%" 
                                    alt="Sample" 

                                    />

                                <div style={{ display: 'none' }} >
                                    {product.Detail.map((detail , index)  =>  <Image height="900px" width="100%" key={index} src={detail} /> )}
                                </div>
                                </Image.PreviewGroup>

                                <Row>


                                    <div className={Style.imgText}>{product.ProductName}</div>
                                   
                                    <Link to={`/pages/Products/${product.ProductName}` }><Button type='primary' className={Style.shop} > 商店頁面 </Button></Link>
                                    


                                </Row>
                                
                            </div>
                            </Space>
                           
                        )     
                    )

                }

            {/* </motion.div> */}
            </Slider>
            <Button type="primary" block  className={Style.more}>
                顯示更多👉
            </Button>
        </div>

    );


}