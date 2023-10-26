/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorage";
import { useMemo } from "react";

const ModeAndNavBarContext = createContext();
// eslint-disable-next-line react/prop-types
const ModeAndMenuProvider = ({ children }) => {

  const [showNavbar, setShowNavbar] = useState(false);
  const {isDarkMode, darkModeToggle} = useLocalStorageState(
    window.matchMedia('(prefers-color-scheme:dark)'), 
    "isDarkMode");

    useMemo(()=>{
     setTimeout(() => {
      // window.scrollTo(-2,0)
     }, 0);
      if (isDarkMode) {
        document.querySelector("html").className = "dark-mode";
      } else {
        document.querySelector("html").className = "light-mode";
      }
    },[])

  
    useEffect(() => {
    if (isDarkMode) {
      document.querySelector("html").className = "dark-mode";
    } else {
      document.querySelector("html").className = "light-mode";
    }
  }, [isDarkMode]);
  
  return (
    <ModeAndNavBarContext.Provider
      value={{ 
        showNavbar: showNavbar, setShowNavbar: setShowNavbar ,
        isDarkMode:isDarkMode, darkModeToggle:darkModeToggle
      }}
    >
      {children}
    </ModeAndNavBarContext.Provider>
  );
};
function useGetContext() {
  const context = useContext(ModeAndNavBarContext);
  if (context === undefined)
    throw new Error("useDarkMode was used outside of DarkModeProvider");
  return context;
}
export { ModeAndMenuProvider, useGetContext };
