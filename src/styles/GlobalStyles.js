import { createGlobalStyle } from "styled-components";
import "@fontsource/akaya-telivigala"
import "@fontsource/sora"




const GlobalStyles = createGlobalStyle`

${'' /* 
*{
    outline: 1px solid red !important;
} */}

*,*::before,*::after{
    margin: 0;
    padding: 0;
}

body{
    font-family: 'Sora', sans-serif;
    overflow-x: hidden;
}

h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
a{
    color: inherit;
    text-decoration:none;
}

.pc-logo {
  display: block; /* Show the logo by default on PCs */
}

.mobile-logo {
  display: none; /* Show the logo by default on PCs */
}

  
  /* For Mobile devices with screen width up to 768px */
  @media (max-width: 768px) {
    .pc-logo {
      display: none; /* Hide the PC logo on mobile devices */
    }
    
    .mobile-logo {
      display: block; /* Show the mobile logo on mobile devices */
    }
  }
  
`

export default GlobalStyles;