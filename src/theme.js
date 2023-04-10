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
    colorImgText:"#ffffff",   //imgText
  },

  components: {
    Button: {
      colorPrimary: "#6366f2;", 
      colorPrimaryHover: "#85C1E9 ",
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
