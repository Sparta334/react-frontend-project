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
import {GithubOutlined} from '@ant-design/icons'



const supabase = createClient('https://yjfcopvmnoefmqlerdxc.supabase.co' ,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqZmNvcHZtbm9lZm1xbGVyZHhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEwMTk3MDUsImV4cCI6MTk5NjU5NTcwNX0.UAlO3qY6sU4fqOqUEpzuOEyStPMf1eQNR1JepD34QS8' );


export default function Suth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()

    setLoading(true)
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    })

    setLoading(false)
  }

  async function signout() {
    const { error } = await supabase.auth.signOut()
  }

  async function signInWithGitHub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    })
  }

  return (
    <div className="row flex flex-center">
      <div className="col-6 form-widget">
        <h1 className="header">Let's Go</h1>
          
          <button onClick={handleLogin} ><GithubOutlined /></button>
           
        </div>

    </div>
  )
}