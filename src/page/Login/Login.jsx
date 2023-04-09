import { Link, NavLink } from "react-router-dom"
import {CloseOutlined ,GithubOutlined } from '@ant-design/icons'
import {Row ,Col} from 'antd' 
import { selectUserProfile } from '../../redux/UserSlice';
import { useDispatch } from 'react-redux';
import addUserProfile from '../../redux/UserSlice'
import axios from "axios";
import { Provider } from 'react-redux'
import Store from '../../redux/Store'
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import { useEffect } from "react";
import Auth from '../../component/Auth/auth'
import Account from '../../component/profile/Profile'

const supabase = createClient('https://yjfcopvmnoefmqlerdxc.supabase.co' ,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqZmNvcHZtbm9lZm1xbGVyZHhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEwMTk3MDUsImV4cCI6MTk5NjU5NTcwNX0.UAlO3qY6sU4fqOqUEpzuOEyStPMf1eQNR1JepD34QS8' );

const api = axios.create({
    headers: {
        'Access-Control-Allow-Origin': '*'
     },
      baseURL: 'https://energetic-fox-pajamas.cyclic.app/'
       
    }
    
);
  


    
export default function LogIn(){

    const supabase = createClient('https://yjfcopvmnoefmqlerdxc.supabase.co' ,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqZmNvcHZtbm9lZm1xbGVyZHhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEwMTk3MDUsImV4cCI6MTk5NjU5NTcwNX0.UAlO3qY6sU4fqOqUEpzuOEyStPMf1eQNR1JepD34QS8' );

    const dispatch = useDispatch();
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

      
      <div className="container" style={{ padding: '50px 50px 50px 50px' }}>

        
        <div className="Cross"> 
          <a href="/"><CloseOutlined/></a>
        </div> 
       

        {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
      </div>
    )
  }
  

  //dispatch(addUserProfile(Result))

    // api.get('/profile')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data.user.displayName)
    //     // 在這裡處理資料
    //     })
    // .catch(err => console.log(err)).finally( () =>{

    //     window.location = "//Home"

    //  }
    // )

    // function loginwithGithub(){
    //     window.location.assign("https://github.com/login/oauth/authorize?client_id=" + GITHUB_CLIENT_ID )
    // }
