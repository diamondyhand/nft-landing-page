import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components';
import Accordion from '../Accordion';


const Section = styled.section`
min-height: 100vh;
height: auto;
width: 100vw;
background-color: ${props => props.theme.text};
position: relative;
color: ${(props) => props.theme.body};
overflow: hidden;


display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};
  
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em){
  font-size: ${(props) => props.theme.fontxl};

  }
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content: center;

@media (max-width: 64em){
  width: 80%;
  }
  @media (max-width: 48em){
  width: 90%;
  flex-direction: column;

  &>*:last-child{
    &>*:first-child{

    margin-top: 0;
}

  }
  }
`
const Box = styled.div`
width: 45%;
@media (max-width: 64em){
  width: 90%;
  align-self: center;
  }

`

const Faq = () => {

const ref = useRef(null);
gsap.registerPlugin(ScrollTrigger);
useLayoutEffect(() => {
  
  let element = ref.current;

  ScrollTrigger.create({
    trigger: element,
    start:'bottom bottom',
    end:'bottom top',
    pin:true,   
    pinSpacing:false, 
    scrub:1,
    // markers:true,
  })

  return () => {
    ScrollTrigger.kill();
  };
}, [])

  return (
    <Section ref={ref} id="faq">
    <Title>Faq</Title>

    <Container>

<Box>
  <Accordion ScrollTrigger={ScrollTrigger} title="What is LegitArt.DAO?">
    LegitArt.DAO is a community-based decentralized autonomous organization (DAO) dedicated to providing funding for crypto and startup businesses through its treasury. It leverages blockchain technology and a vibrant community to revolutionize the funding landscape and support custom handmade artwork from artists worldwide.
  </Accordion>

  <Accordion ScrollTrigger={ScrollTrigger} title="Where can I view my nfts?">
    Once minted or bought simply connect to your OpenSea account to view your NFTs.
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="How does LegitArt.DAO work?">
    LegitArt.DAO operates through a treasury funded by daily artwork auctions. Each unique piece of custom artwork is represented as a LegitArt NFT, and the Ethereum generated from these auctions flows directly into the LegitArt DAO treasury. The community, comprising LegitArt NFT holders, actively participates in decision-making and voting on funding proposals.
  </Accordion>
  </Box>
    <Box>
      <Accordion ScrollTrigger={ScrollTrigger} title="What is a LegitArt NFT?">
        A LegitArt NFT stands for LegitArt Non-Fungible Token. It represents a unique piece of custom artwork created by talented artists, and each NFT is auctioned to the public. The Ethereum generated from these auctions contributes to the LegitArt DAO treasury, enabling funding opportunities for crypto and startup businesses.
      </Accordion>
      <Accordion ScrollTrigger={ScrollTrigger} title="How are artists selected for the LegitArt platform?">
        LegitArt aims to promote diversity and support a wide range of talented artists. At the halfway point of each auction cycle, a new artist is chosen to sell their artwork, bringing fresh perspectives and styles to the LegitArt community. The selected artist's profile, including social media links and public information, is showcased on the platform to encourage community engagement.
      </Accordion>
      <Accordion ScrollTrigger={ScrollTrigger} title="How are funding decisions made within LegitArt.DAO?">
        LegitArt operates on a decentralized governance structure. Each LegitArt NFT holder has one vote, and proposals for funding initiatives are collectively determined by the community through voting. This inclusive approach ensures that funding decisions are made democratically, based on the consensus of the community members.
      </Accordion>
    </Box>
    </Container>
  </Section>
  )
}

export default Faq