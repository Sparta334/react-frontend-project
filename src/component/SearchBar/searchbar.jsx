import SearchField from "react-search-field";
import { Drawer } from 'antd'
import { useEffect, useState } from "react";
import Style from './searchbar.module.css'
import { Space } from "antd"
import axios from "axios";
import { Link } from "react-router-dom";

const api = axios.create({
    headers: {
        'Access-Control-Allow-Origin': '*'
     },
    baseURL: 'https://energetic-fox-pajamas.cyclic.app'
});


export default function SearchBar() {



    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const [ReveiceData, setData] = useState("");
    const [Value , setValue] = useState("")


    const [DataRe , setDalue] = useState([]);

    useEffect(() =>{
        console.log(DataRe)
        setData(DataRe);
        console.log(ReveiceData)

        
    })

    // 搜尋時展開
    //https://react-frontend-project-two.vercel.app/pages/Products/Control%20Ultimate%20Edition
    //https://react-frontend-project-two.vercel.app/pages/Products/Control%20Ultimate%20Edition

    const onChange = (value, event) => {

        if(value === ''){
            value+='222222222222222222222'
        }
        api.get('/BackEnd/SearchContent/' +  value ).then( res => {


            if(value ==='222222222222222222222' || res === ''){
                onClose();
            }
            else{
                showDrawer();
                console.log(res.data);

                const pp = res.data.map((post , i) =>(  
                    <div className={Style.box} key={i}>
                        <Link to={`/pages/Products/${post.product.ProductName}`}><p className={Style.SearchItemText}>{post.product.ProductName}</p></Link>
                    </div>
                ) )

                console.log(pp);

                setDalue(  pp )
        
            
            }

        
            


       })

         

    }

    return (

        <Space direction={"vertical"} size={"small"} >
            <SearchField className={Style.SearchFieldBox}

                placeholder="Search..."
                onChange={onChange}


            />

            <div id={Style.SearchFieldDrawerBox}>


                <Drawer
                    autoFocus={false}
                    placement="top"
                    closable={false}
                    onClose={onClose}
                    open={open}
                    getContainer={false}
                    id={Style.SearchFieldDrawer}
                    height={`${ReveiceData.length * 5.5}vh`}
                >

                    <div className={Style.SearchItemBox}>
                        {ReveiceData}
                    </div>
                </Drawer>

            </div>


        </Space>

    );

}

