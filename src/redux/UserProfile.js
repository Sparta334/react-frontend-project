import {configureStore} from '@reduxjs/toolkit';
import UserProfileReducer from './UserSlice';

const Store = configureStore({

    reducer:{
        user : UserProfileReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',

});

export default Store;


// 取得變數

// *  useSelector(selectUserProfile)
// import { selectUserProfile } from '../redux/UserSlice';