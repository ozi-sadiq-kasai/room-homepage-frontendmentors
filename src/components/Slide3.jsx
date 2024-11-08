import hero3 from '../images/desktop-image-hero-3.jpg'
import hero3b from '../images/mobile-image-hero-3.jpg'
import styled from 'styled-components';
import { device } from '../device.js'

const Slide3 = () => {
  return (
    <main>
      <Section1>
        <img src={hero3} alt="pic" className="desktop-image" />
        <img src={hero3b} alt="pic" className="mobile-image" />
        <nav>
          <div>
            <h3>room</h3>
            <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z" fill="#FFF" fill-rule="evenodd"/></svg>
          </div>
            <ul>
                <li>home</li>
                <li>shop</li>
                <li>about</li>
                <li>contact</li>
            </ul>
        </nav>
        <Article>
          <h1>
           Manufactured with the best materials
          </h1>
          <p>
            Our modern furniture store provide a high level of quality. Our company has invested in advanced technology
            to ensure that every product is made as perfect and as consistent as possible. With three decades of experience
            in this industry,we understand what customers want for their home and office.
          </p>
          <div>
          <button>
            SHOP  NOW 
          </button>
          <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fillRule="nonzero"/></svg>
          </div>
        </Article>
      </Section1>
    </main>
  )
}


const Section1 = styled.section`
display:grid;
grid-template-columns: 2fr 1.1fr;

  .desktop-image{
  width:100%;
  display:block;
  }
  .mobile-image{
    display:none;
  }
    
  @media ${device.mobile} {
    grid-template-columns: 1fr;
    .desktop-image {
      display: none;
    }
      
    .mobile-image {
      display: block;
      width: 100%;
    } 
  }

  nav {
    position: absolute;
    top: 40px;
    left: 40px;
    display: flex;
    justify-content: space-between;
    width: 400px;
    color:white;

  div {
    display:flex;
    align-items:center;

      @media ${device.mobile} {
        flex-direction: row-reverse;
        max-width: 70%;
        width: 60%;
        font-size:2.3rem;
        justify-content:space-between;
      }
          svg {
        display: none; /* Hide hamburger icon on desktop */

        @media ${device.mobile} {
          display: block; /* Show hamburger icon on mobile */
        }
      }
  }

    ul {
        display: flex;
        list-style-type: none;
        justify-content: space-around;
        max-width:70%;
        width: 100%;
        padding: 0;
        margin: 0;
        @media ${device.mobile} {
      display:none;
    }
 li {
    padding: 3px; /* Optional: Add padding for a better hover effect */
  }

  li:hover {
    border-bottom: 2px solid white;
    cursor:pointer;
  }
}

`
const Article = styled.article`
display:flex;
flex-direction:column;
padding:5rem 2rem 3rem 2.7rem;

h1{
  font-size:2.4rem;
  padding-bottom:15px;

 @media ${device.mobile} {
    font-size:2.2rem;
    }  
}

p{
  font-size:14px;
  margin-bottom:1rem;
  line-height:1.4;
  color:hsl(0, 0%, 63%);

  @media ${device.mobile} {
    font-size:1.2rem;
  }  
}

div{
   padding-top:20px;
    display: flex;
    align-items: center;
    gap: 12px;
}

button {
    display: flex;
    align-items: center;
    gap: 5px; 
    letter-spacing: 0.9rem;
    font-weight: 600;
    background-color: transparent;
    border: none;
    color: #000; 
    transition: color 0.3s ease, fill 0.3s ease;
  
    @media ${device.mobile} {
      font-size:1.3rem;
      font-weight: 300;
    }
    
    svg {
      fill: #000; /* Default arrow color */
      transition: fill 0.3s ease; /* Smooth transition for arrow */
    }

    &:hover {
      color: hsla(0, 0%, 27%, 0.5); /* Change text color on hover */
      cursor: pointer;

      svg {
        fill: hsla(0, 0%, 27%, 0.5); /* Change arrow color on hover */
      }
    }
  }

`

export default Slide3