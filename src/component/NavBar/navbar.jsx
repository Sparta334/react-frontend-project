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
        <div className={` ${ style.navbar }  `} >
            <Row>
            
                <a href="/Home"> <img className={style.Logo} src="http://www.joshuacasper.com/contents/uploads/joshua-casper-samples-free.jpg" alt="" /> </a>

                <div className={style.navbarname}>
                <a href = "/Home" className={style.navItem } >
                    商店主頁
                </a>
                <a href = "/newset" className={style.navItem } >
                    最新
                </a>
                <a href= "/popular" className= {style.navItem }>
                    熱門
                </a>

                <a href = "/discount" className={style.navItem }>
                    優惠
                </a>

                <SearchBar />
                </div>
                
                {
                     
                     !session  ? (
                        <div className={style.loginitem}><a to = "//login"  > 
                            登入
                        </a>
                        </div>
                    ) :(

                        <div className={style.loginitem}>
                            <a to = "//login" > 
                                {session.user.email}  登出
                            </a>
                        </div>
                        
                    )
                }
            
            </Row>
            
        </div>


    );



}