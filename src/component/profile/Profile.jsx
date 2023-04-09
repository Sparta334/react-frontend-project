import axios from 'axios'
import { selectUserProfile } from '../../redux/UserSlice';
import { useDispatch } from 'react-redux';
import addUserProfile from '../../redux/UserSlice'
import { useState } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { createClient } from "@supabase/supabase-js";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { theme } from 'antd';

const supabase = createClient('https://yjfcopvmnoefmqlerdxc.supabase.co' ,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqZmNvcHZtbm9lZm1xbGVyZHhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEwMTk3MDUsImV4cCI6MTk5NjU5NTcwNX0.UAlO3qY6sU4fqOqUEpzuOEyStPMf1eQNR1JepD34QS8' );

export default function Account({ session }) {
    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState(null)
    const [website, setWebsite] = useState(null)
    const [avatar_url, setAvatarUrl] = useState(null)
    const disspiatch =useDispatch()
    useEffect(() => {
      async function getProfile() {
        setLoading(true)
        const { user } = session
  
        let { data, error } = await supabase
          .from('profiles')
          .select(`username, website, avatar_url`)
          .eq('id', user.id)
          .single()
  
        if (error) {
          console.warn(error)
        } else if (data) {
          setUsername(data.email)
          
        }
  
        setLoading(false)
      }

     
  
      getProfile()
      
    }, [session])
  
  
    return (

        
        <div>
            {session.user.email}
          <button className="button block" type="button" onClick={() => supabase.auth.signOut()}>
            Sign Out
          </button>
        </div>

    )
  }