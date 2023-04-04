
import { NavLink } from 'react-router-dom';
import {Col ,Row} from 'antd'
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/searchbar'
import style from './navbar.module.css';



export default function NavBar(){

    return (

        // navbar 需要display.flex
        <div className={` ${ style.navbar }  `} >
            <Row>

                <Link to="#"> <img className={style.Logo} src="http://www.joshuacasper.com/contents/uploads/joshua-casper-samples-free.jpg" alt="" /> </Link>

                <NavLink to = "/pages/newset" className={({isActive}) => (isActive ?  style.navItemActive : style.navItem  ) } >
                    最新
                </NavLink>
                <NavLink to= "pages/popular" className= {({isActive}) => (isActive ?  style.navItemActive : style.navItem  ) }>
                    熱門
                </NavLink>

                <NavLink to = "pages/discount" className={({isActive}) => (isActive ?  style.navItemActive : style.navItem  ) }>
                    優惠
                </NavLink>

                <SearchBar />

                <NavLink to = "pages/login"  > 
                    登入
                </NavLink>

            </Row>
        
        </div>




    );



}