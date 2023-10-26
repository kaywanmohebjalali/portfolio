import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {

    &, &.dark-mode {
   --color-bg:#121212;
  --second-bg-color :#292e33;
  --third-bg-color :#451952;
  --text-color:#f5f5f5;
  --text-color-button:#12f7ff;
  --text-color-about:#12f7ff;
  --navbar-bottom-color :#292e33;
  --hover-color:#12f7ff;
  --big-font:2.5rem;
  --normal-font:2rem;
  --small-font:1rem;
  --h2-font:3rem;

  --neon-box-shadow:0 0 0.5rem #12f7ff;
  --font-neon-text-shadow:0 0 10px rgba(18, 247, 255, 0.3),
  0 0 20px rgba(18, 247, 255, 0.3),
  0 0 30px rgba(18, 247, 255, 0.3),
  0 0 40px rgba(18, 247, 255, 0.3),
  0 0 70px rgba(18, 247, 255, 0.3),
  0 0 80px rgba(18, 247, 255, 0.3),
  0 0 100px rgba(18, 247, 255, 0.3),
  0 0 150px rgba(18, 247, 255, 0.3);

  --text-header-shadow: 0 0 10px rgba(18, 247, 255, 0.6),
      0 0 20px rgba(18, 247, 255, 0.6), 0 0 30px rgba(18, 247, 255, 0.6),
      0 0 40px rgba(18, 247, 255, 0.6), 0 0 70px rgba(18, 247, 255, 0.6),
      0 0 80px rgba(18, 247, 255, 0.6), 0 0 100px rgba(18, 247, 255, 0.6),
      0 0 150px rgba(18, 247, 255, 0.6);

      .sticky{
    border-bottom: 2px solid var(--second-bg-color)!important;
}

    }

    

    &.light-mode {
       
    --color-bg:#fff;   
    --second-bg-color :#292e33;
     --third-bg-color :#434bd9;
  --text-color:#595456;
  --text-color-button:#fff;
  --text-color-about:#fff;
 --navbar-bottom-color :#eeede8;
 --hover-color:#1CD6CE;
 /* --hover-color:#05BFDB; */
 

  --big-font:2.5rem;
  --normal-font:2rem;
  --small-font:1rem;
  --h2-font:3rem;

  --neon-box-shadow:0 0 0.2rem #1CD6CE;

  --font-neon-text-shadow:0 0 10px rgba(28,214,206, 0.3),
  0 0 20px rgba(28,214,206, 0.3),
  0 0 30px rgba(28,214,206, 0.3),
  0 0 40px rgba(28,214,206, 0.3);

  --text-header-shadow: 0 0 10px rgba(18, 247, 255, 0.6),
      0 0 15px rgba(18, 247, 255, 0.6);
    
      
      .sticky{
       border-bottom: 2px solid #f4f4f4!important;
     
}

    }








}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  list-style: none;
  font: inherit;
  color: inherit;
  text-decoration: none;
  scroll-behavior: smooth;
  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}


body {
  /* font-family: "Poppins", sans-serif; */
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-display: optional;
  background-color: var(--color-bg);
  color: var(--text-color);
  transition: color 0.3s, background-color 0.3s;
 
}


@media screen and (max-width:420px){
    html{
        font-size: 80%;
    }
    
}




::-webkit-scrollbar{
    width: 0.5rem;
    
    background-color: var(--color-bg);
}

::-webkit-scrollbar-thumb{
    background-color: var(--hover-color);
    border-radius: 5rem;
    height: 10px;
    
}


`;

export default GlobalStyles;


