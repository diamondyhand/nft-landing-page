import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/sempro.png';
import imgMobile from '../assets/sempro_mobile.png';

// const LogoText = styled.h1`
// font-family: 'Akaya Telivigala', cursive;
// font-size: ${props => props.theme.fontxxxl};
// color: ${props => props.theme.text};
// transition: all 0.2s ease;

// &:hover{
//     transform: scale(1.1);
// }

// @media (max-width: 64em){
// font-size: ${props => props.theme.fontxxl};
// }
// `

const Logo = () => {
  return (
    <Link to="/">
      <img class="pc-logo" src={img} alt="img" width={230} height={80}/>
      <img class="mobile-logo" src={imgMobile} alt="img" width={60} height={60}/>
    </Link>
    // <LogoText>        
    // </LogoText>
  )
}

export default Logo