import { useState } from 'react';
import hero1a from '../images/image-about-dark.jpg'
import hero1b from '../images/image-about-light.jpg'
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import styled from 'styled-components';
import { device } from '../device.js'


const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide

  const slides = [<Slide1 />, <Slide2 />, <Slide3 />]; // Array of slide components

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <Main>
      <SlideContainer>
        {slides[currentSlide]} {/* Render the current slide */}
      </SlideContainer>

       <NavArrows>
          <ArrowButton onClick={prevSlide}> <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fillRule="evenodd"/></svg></ArrowButton>
          <ArrowButton onClick={nextSlide}> <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fillRule="evenodd"/></svg></ArrowButton>
        </NavArrows>
      <Section2>
        <img src={hero1a} alt="pic" />
        <article>
          <h2>
          About our furniture
          </h2>
          <p>
          Our multifunctional collection blends design and function to suit your individual taste.
          Make each room unique, or pick a cohesive theme that best express your interests and what
          inspires you. Find the furniture pieces you need, from traditional to contemporary styles
          or anything in between. Product specialists are available to help you create your dream space.  
          </p>
        </article>
        <img src={hero1b} alt="chair" />
      </Section2>
    </Main>
  );
};

const Main = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
`;

const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const NavArrows = styled.div`
  position: absolute;
  top: 65.9%;
  left:64.5%;
  width: 100%;
  display: flex;
  align-items: center;
  transform: translateY(-50%);

  @media ${device.mobile} {
    top: 25%;
    left:85.5%;
`;

const ArrowButton = styled.button`
  background: rgba(0, 0, 0, 0.8);
  color: white;
  border: none;
  font-size: 2rem;
  padding: 20px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`
const Section2 = styled.section`
display:grid;
grid-template-columns: 1.5fr 2.5fr 1.5fr;

@media ${device.mobile} {
grid-template-columns:1fr
}

img {
  display: block;
  width: 100%; 
  height: auto;
}


article{
  padding:3rem 2rem 1rem 3rem;
  line-height:1.3;

  h2{
   text-transform: uppercase;
   padding-bottom:10px;
   font-size:15px;
   letter-spacing: 0.4em;

   @media ${device.mobile}{
    font-size:25px;
   }
  }
  p{
   color:hsl(0, 0%, 63%); 
   @media ${device.mobile}{
    font-size:2.2rem;
   }
  }
}
`;

export default Slide;
