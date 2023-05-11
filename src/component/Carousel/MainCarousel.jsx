import {Carousel} from 'antd';
import Slider from "react-slick";
import {Image} from 'antd'
import MainCarouselData from '../../json/MainCarousel.json'
import Style from './MainCarousel.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { theme } from 'antd';

export default function MainCarousel(){

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay:true,
        autoplaySpeed:3000,
        centerMode:true,
    }

   

    return(
        <Slider  {...settings} >

            {
                MainCarouselData.map((products , index) => (

                    <div className={Style.CarouselBox} key={index}>
                        
                        
                        <img className={Style.CarouselBoxImg} src={products.imageUrl}  />
                      


                    </div>


                ))
                
            }



        </Slider>
    )


}