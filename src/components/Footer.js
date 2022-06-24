import React from 'react'
import styled from "styled-components";
import Banner from "./Banner";
import Logo from "./Logo"
import Facebook from "../Icons/Facebook"
import Instagram from "../Icons/Instagram"
import Twitter from "../Icons/Twitter";
import LinkedIn from "../Icons/LinkedIn"

const Section = styled.section`
min-height: 100vh;
height: 100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
color: ${(props) => props.theme.text};

display: flex;

flex-direction: column;
`

const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-items: center;

border-bottom: 1px solid ${(props) => props.theme.text};
@media (max-width: 48em) {
  width: 90%;
  h1{
    font-size: ${props => props.theme.fontxxl};
  }
}
`

const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 48em) {
  width: 100%;
}
`

const IconList = styled.div`
display: flex;
align-items: center;
margin: 1rem auto;

&>*{
  padding-right: 0.5rem;
  transition: all 0.2s ease;

  &:hover{
    transform: scale(1.2);
  }
}
`

const MenuItems = styled.ul`
list-style: none;
width: 50%;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-gap: 1rem;

@media (max-width: 48em) {
  display: none;
}
`
const MenuItem = styled.li`
width: fit-content;
cursor: pointer;

&::after{ 
  content: ' ';
  display: block;
  width: 0%;
  height: 2px;
  background: ${props => props.theme.text};
  transition: width 0.3s ease;
}
&:hover::after{
  width: 100%;
}
`

const Bottom = styled.div`
width: 75%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-itms: center;

a{
  text-decoration: underline;
}
@media (max-width: 48em) {
  flex-direction: column;
  width: 100%;
span{
  margin-bottom: 1rem;
}
}
`

const Footer = () => {
  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })

  }


  return (
    <Section>
      <Banner />
      <Container>
        <Left>
          <Logo />
          <IconList>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedIn />
            </a>
          </IconList>
        </Left>
        <MenuItems>
        <MenuItem onClick={() => scrollTo('home')}>Home</MenuItem>
        <MenuItem onClick={() => scrollTo('about')}>About</MenuItem>
        <MenuItem onClick={() => scrollTo('roadmap')}>Roadmap</MenuItem>
        <MenuItem onClick={() => scrollTo('showcase')}>Showcase</MenuItem>
        <MenuItem onClick={() => scrollTo('team')}>Team</MenuItem>
        <MenuItem onClick={() => scrollTo('faq')}>Faq</MenuItem>
        </MenuItems>
      </Container>
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} Weirdos Club. All rights reserved.
        </span>
        <span>
          Made with &#10084; by <a href="https://github.com/sahuljr7" target="_blank" rel="noopener noreferrer">
            Sahul
          </a>
        </span>
      </Bottom>
    </Section>
  )
}

export default Footer