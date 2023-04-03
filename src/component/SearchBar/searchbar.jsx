import SearchField from "react-search-field";
import {Drawer} from 'antd'
import { Link } from 'react-router-dom';
import { useState } from "react";
import Data from "../../json/Data.json"
import Style from './searchbar.module.css'
import {Space} from "antd"

export default function SearchBar(){


    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
      const onClose = () => {
        setOpen(false);
    };

    const [ReveiceData , setData] = useState("");


    // 搜尋時展開
        

    const onChange = (value, event) =>{
        
        const _Producit = 
        Data.filter(post => {
            if (value === "" ) {
              onClose()
              return value;
            } else if (post.ProductName.toLowerCase().includes(value.toLowerCase() )) {
                showDrawer();
                return post;
            }
          }).map((post, index) => (

                <div className={Style.box} key={index}>
                    <Link to={`/pages/Products/${post.ProductName}`}><p className={Style.SearchItemText}>{post.ProductName}</p></Link>
                </div>

          ))



          setData(_Producit);
    }

    return (

        <Space direction={"vertical"}  size={"small"} >
            <SearchField className={Style.SearchFieldBox}
            
            placeholder="Search..."
            onChange={onChange}
            
            
            />

            <div id= {Style.SearchFieldDrawerBox}> 


                <Drawer 
                    autoFocus = {false}
                    placement="top"
                    closable={false}
                    onClose={onClose}
                    open={open}
                    getContainer={false}
                    id ={Style.SearchFieldDrawer}
                    height={`${ReveiceData.length*5}vh`}               
                >
                    
                    <div className={Style.SearchItemBox}>
                        {ReveiceData}
                    </div>
                </Drawer>

            </div>
          

        </Space>

    );

}

