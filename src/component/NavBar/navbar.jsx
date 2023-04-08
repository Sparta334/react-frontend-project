
import { NavLink } from 'react-router-dom';
import {Col ,Row} from 'antd'
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/searchbar'
import style from './navbar.module.css';
import { selectUserProfile } from '../../redux/UserSlice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const api = axios.create({
    headers: {
        'Access-Control-Allow-Origin': '*'
     },
       baseURL: 'http://localhost:8000/'
    });
  

  

export default function NavBar(){


    const dispatch =useDispatch();
    const AddUser = (user) =>{
        dispatch(addUserProfile({
            user: user,
          })
          
        )
    
    };
    console.log(useSelector(selectUserProfile))



    return (

        // navbar 需要display.flex
        <div className={` ${ style.navbar }  `} >
            <Row>
            
                <Link to="/pages/Home"> <img className={style.Logo} src="http://www.joshuacasper.com/contents/uploads/joshua-casper-samples-free.jpg" alt="" /> </Link>

                <div className={style.navbarname}>
                <NavLink to = "/pages/Home" className={({isActive}) => (isActive ?  style.navItemActive : style.navItem  ) } >
                    商店主頁
                </NavLink>
                <NavLink to = "/pages/newset" className={({isActive}) => (isActive ?  style.navItemActive : style.navItem  ) } >
                    最新
                </NavLink>
                <NavLink to= "/pages/popular" className= {({isActive}) => (isActive ?  style.navItemActive : style.navItem  ) }>
                    熱門
                </NavLink>

                <NavLink to = "/pages/discount" className={({isActive}) => (isActive ?  style.navItemActive : style.navItem  ) }>
                    優惠
                </NavLink>

                <SearchBar />
                </div>
                
                {
                    
                    useSelector(selectUserProfile) === 'User' ? (
                        <div className={style.loginitem}><NavLink to = "/pages/login"  > 
                            登入
                        </NavLink>
                        </div>
                    ) :(

                        <div>
                            {useSelector(selectUserProfile) }
                            <button onClick={ ()  =>{                            
                                api.get('/logout').then( AddUser('User') )

                            } }  > 登出</button>
                        </div>
                        
                    )
                }
            
            </Row>
            
        </div>




    );



}