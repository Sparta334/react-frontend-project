import { theme } from "antd";

const darkTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: "#1677ff",  
    colorBgBase	: "#222222",
    colorTextBase: "#ffffff",
    colorTextFooter: "#ffffff",   //textcolor
    colorBgFooter: "#000000",   //backGround
    colorNavText: "#ffdeded6",
  },
  components: {
    Button: {
      colorPrimary: "#6366f2;",
      colorPrimaryHover: "#9192f5",
    }
  },
};

const lightTheme = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorBgFooter: "#3e3f97",
    colorTextFooter: '#ffffff',
    colorNavText: "#333",
  },
  components: {
    Button: {
      colorPrimary: "#6366f2;",
      colorPrimaryHover: "#9192f5",
      
    },
  },
};

export { lightTheme, darkTheme };
