import { theme } from "antd";

const darkTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: "#ffffff",  //商店頁面hover後的顔色
    colorBgBase	: "#222222",  
    colorTextBase: "#ffffff",     
    colorTextFooter: "#ffffff",   //textcolor
    colorBgFooter: "#000000",   //backGround
    colorNavText: "#ffffff",  //navbar文字
    colorImgText:"#ffffff",   //imgText文字顔色要白色
    colorCarouselBoxImgText:"#ffffff" //CarouselBoxImgText文字顔色要白色
  },

  components: {
    Button: {
      colorPrimary: "#6366f2;",  
      colorPrimaryHover: "#85C1E9 ",
      colorbtnbg:"ffffff" ,  // 商店頁面button變成白色
      colorbtnText:"000000", //商店頁面button裏面的文字變成黑色
      colormorebtbg:"ffffff", //顯示更多button變成白色
      colormorebtText:"000000", //顯示更多button裏面的文字變成黑色
    }
  },
};

const lightTheme = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorBgFooter: "#3e3f97",
    colorTextFooter: '#ffffff',
    colorNavText: "#333",
    colorImgText:"#000000", //
  },
  components: {
    Button: {
      colorPrimary: "#6366f2;",
      colorPrimaryHover: "#9192f5",
      
    },
  },
};

export { lightTheme, darkTheme };
