import {Carousel} from 'antd';
import {Image} from 'antd'
import MainCarouselData from '../../json/MainCarousel.json'
import Style from './MainCarousel.module.css'
export default function MainCarousel(){


    return(
        <Carousel autoplay>

            {
                MainCarouselData.map((products , index) => (

                    <div className={Style.CarouselBox} key={index}>
                        
                        
                        <img className={Style.CarouselBoxImg} src={products.imageUrl}  />
                        <h3 className={Style.CarouselBoxImgText}>{products.ProductName}</h3>


                    </div>


                ))
                
            }



        </Carousel>
    )


}