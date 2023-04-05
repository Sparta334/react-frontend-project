
import {Row , Col , Image} from 'antd';
import { motion } from "framer-motion"; 
import { useState} from 'react';
import {LeftOutlined  , RightOutlined } from '@ant-design/icons'
import { Button } from 'antd/es/radio';

import Style from './ProductList.module.css';

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

    return(
        
        <div className={Style.ItemsLayout}>

            <div>{Title}</div>
            <LeftOutlined className={Style.Btn} onClick={() =>Chan(-1) } />


            <RightOutlined className={Style.Btn} onClick={() =>Chan(1) } />
            <motion.div animate={{ x:- width*inPos }}>
            <Row  gutter={[30, 32 ]} wrap={false}>
                {       


                        InputJson.map((product)=> (

                            <Col className="ImageBox" xs={8} sm={8} md={8} lg={6} xl={6} key={product.id} >

                                <Image.PreviewGroup>
                                <Image 
                                     preview={{ visible: false }}
                                    src={product.imageUrl} 
                                    height="100%" 
                                    width="100%" 
                                    alt="Sample" 

                                    />

                                <div style={{ display: 'none' }} >
                                    {product.Detail.map((detail , index)  =>  <Image height="900px" width="100%" key={index} src={detail} /> )}
                                </div>
                                </Image.PreviewGroup>



                                <div className={Style.imgText}>{product.ProductName}</div>
                                
                            </Col>
                           
                        )     
                    )

                }


            </Row>
            </motion.div>
            <Button type="primary" block>
                顯示更多
            </Button>
        </div>

    );


}