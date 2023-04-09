
import { NavLink } from 'react-router-dom';
import {Col ,Row} from 'antd'
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/searchbar'
import style from './navbar.module.css';
import { selectUserProfile } from '../../redux/UserSlice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { addUserProfile } from '../../redux/UserSlice'
import { Provider } from 'react-redux'
import Store from '../../redux/Store'
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { createClient } from '@supabase/supabase-js';

const api = axios.create({
    headers: {
        'Access-Control-Allow-Origin': '*'
     },
       baseURL: 'https://energetic-fox-pajamas.cyclic.app/'
    });
  

const supabase = createClient('https://yjfcopvmnoefmqlerdxc.supabase.co' ,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqZmNvcHZtbm9lZm1xbGVyZHhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEwMTk3MDUsImV4cCI6MTk5NjU5NTcwNX0.UAlO3qY6sU4fqOqUEpzuOEyStPMf1eQNR1JepD34QS8' );


export default function NavBar(){


    const dispatch =useDispatch();
    // const AddUser = (user) =>{
    //     dispatch(addUserProfile({
    //         user: user,
    //       })
          
    //     )
    
    // };
    console.log(useSelector(selectUserProfile))
    const [session, setSession] = useState(null)
    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
          setSession(session)
        })
    
        supabase.auth.onAuthStateChange((_event, session) => {
          setSession(session)
        })
      }, [])


    return (

        // navbar 需要display.flex
        <Provider store = {Store}>
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
                     
                     !session  ? (
                        <div className={style.loginitem}><NavLink to = "/pages/login"  > 
                            登入
                        </NavLink>
                        </div>
                    ) :(

                        <div className={style.loginitem}>
                            <NavLink to = "/pages/login" > 
                                {session.user.email}  登出
                            </NavLink>
                        </div>
                        
                    )
                }
            
            </Row>
            
        </div>

    </Provider>


    );



}