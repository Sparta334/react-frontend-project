import {Col ,Row} from 'antd'
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/searchbar'
import style from './navbar.module.css';
import { selectUserProfile } from '../../redux/UserSlice';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import NavBarDrawer from '../NavBarDrawer/NavBarDrawer';
import axios from 'axios';
import { createClient } from '@supabase/supabase-js';
import { theme , Drawer} from 'antd';
import { Default, Desktop , Laptop , Mobile } from '../MediaQuery/MediaQurey';
import { fallDown as Menu } from 'react-burger-menu'



const supabase = createClient('https://yjfcopvmnoefmqlerdxc.supabase.co' ,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqZmNvcHZtbm9lZm1xbGVyZHhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEwMTk3MDUsImV4cCI6MTk5NjU5NTcwNX0.UAlO3qY6sU4fqOqUEpzuOEyStPMf1eQNR1JepD34QS8' );


export default function NavBar(){

    const { GlobalToken } = theme.useToken();
    const panelStyle = {

        color:"#ffffff",
        border: 'none',
      };
    const [session, setSession] = useState(null)
    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
          setSession(session)
        })
    
        supabase.auth.onAuthStateChange((_event, session) => {
          setSession(session)
        })
      }, [])

      const {
        token: {colorNavText,colorNavbg},
      } = theme.useToken();
    

    return (

        // navbar 需要display.flex
        <>
        
        <style>{`
                  .${style.navbar}{

                    background-color:${colorNavbg};
                     

                    }
         `} </style>
    


        <div className={` ${ style.navbar }  `} >

            <style>{`
                  .${style.navItem} , .${style.loginitem} , .${style.navItemCollapse}{

                     color: ${colorNavText};
                     

                    }
    
            `} </style>
    
         <Default>
            <Row className={style.navbarwidth} >
            
                
                <Col span={18} className={style.navbarLeft}>
                <Link to="/"> <img className={`${style.Logo} ${style.navItem } `} src="https://static.vecteezy.com/system/resources/previews/000/626/507/original/lightning-logo-template-vector.jpg" alt="" /> </Link>
                <Link to = "/" className={style.navItem } >
                    商店主頁
                </Link>
                <Link to = "/newset" className={style.navItem } >
                    最新
                </Link>
                <Link to= "/popular" className= {style.navItem }>
                    熱門
                </Link>

                <Link to = "/discount" className={style.navItem }>
                    優惠
                </Link>

                <SearchBar />

                </Col>
                <Col span={6} className={style.navbarRight}>

                 <div  >

                 {
                     
                     !session  ? (
                        <Link className={style.navItem} to = "/login"  > 
                            登入
                        </Link>
                       
                    ) :(
                        <div>
                              <NavBarDrawer Title={session.user.email}/>
                                                               
                        </div>
                        
                    )
                }

                    
                 </div>


                 </Col>
                
              

                
            </Row>
            </Default>
            <Mobile>
        
            <Menu  >
                <div className={style.navbarwidth} >

                   
                        <div >
                       
                        <Link to = "/" className={style.navItem } >
                            商店主頁
                        </Link>
                        <Link to = "/newset" className={style.navItem } >
                            最新
                        </Link>
                        <Link to= "/popular" className= {style.navItem }>
                            熱門
                        </Link>

                        <Link to = "/discount" className={style.navItem }>
                            優惠
                        </Link>

                        <SearchBar />
                        </div>

            
                        </div>
                </Menu>
                    <Row wrap={true}>
                        <Col span={15}>
                            <Link className={style.MobileLogo}  to="/"> <img className={`${style.Logo} ${style.navItem } `} src="https://static.vecteezy.com/system/resources/previews/000/626/507/original/lightning-logo-template-vector.jpg" alt="" /> </Link>
                        </Col>
                        <Col span={4} className={style.navbarRight2}>
                        
                        <div className={style.navItemText}  >

                            

                        {
                            
                            !session  ? (
                                <Link to = "/login"  > 
                                    登入
                                </Link>
                            
                            ) :(
                                <div>
                                    <NavBarDrawer Title={session.user.email}/>
                                                                    
                                </div>
                                
                            )
                        }

                        
                    </div>


                    </Col>
                    
                

            
                    </Row>

               


            </Mobile>


        </div>
        </>


    );



}