import { Link } from "react-router-dom"
import {CloseOutlined ,GithubOutlined } from '@ant-design/icons'
import {Row ,Col} from 'antd' 
import { selectUserProfile } from '../../redux/UserSlice';
import { useDispatch } from 'react-redux';
import addUserProfile from '../../redux/UserSlice'
import axios from "axios";


const api = axios.create({
    headers: {
        'Access-Control-Allow-Origin': '*'
     },

      baseURL: 'https://energetic-fox-pajamas.cyclic.app'
       
    }
    
);
  

    
export default function LogIn(){

    const dispatch = useDispatch();



    const AddUser = (user) =>{
      dispatch(addUserProfile(
         user
         )
        
      )
  
    };
  
    const egt = (e) =>{
        e.preventDefault();
        api.get('/auth/github').then( res => {
            
            window.location = res.data.url;
    
        })
    }

    api.get('/profile').then( res => {
            
        AddUser(res)

    })


    return(

        <div>

            <Link to={"/pages/Home"} ><CloseOutlined /></Link>
            <Row gutter={[2,20]}>  

                    <Col>
                        <button onClick={egt} ><GithubOutlined /></button>
                    </Col>
                    <Col>
                    
                    </Col>
                    <Col>
                    
                    </Col>


            </Row>
            

        </div>
    )

}