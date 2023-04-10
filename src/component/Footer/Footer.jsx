import {InstagramOutlined } from '@ant-design/icons'
import {TwitterOutlined} from   '@ant-design/icons'
import {FacebookOutlined} from '@ant-design/icons'
import {YoutubeOutlined} from '@ant-design/icons'
import style from './Footer.module.css'

export default function Footer(){

    return(
        <div>
        <footer>
            <div className={style.inner_width}>
            <div className={style.copyright}>
                &copy; 2023 | Created & Designed By <a  href="#">Let's Go Team</a>
            </div>
            <div class="sm">
                <a href="#" className={style.btnlogo}><InstagramOutlined /></a>
                <a href="#" className={style.btnlogo}><TwitterOutlined /></a>
                <a href="#" className={style.btnlogo}><FacebookOutlined /></a>
                <a href="#" className={style.btnlogo}><YoutubeOutlined /></a>
            </div>
            </div>

        </footer>

        </div>
    )

}