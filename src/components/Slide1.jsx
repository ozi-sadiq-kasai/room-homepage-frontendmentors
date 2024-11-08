import hero1 from '../images/desktop-image-hero-1.jpg'
import hero1b from '../images/mobile-image-hero-1.jpg'
import styled from 'styled-components';
import { device } from '../device.js'

const Slide1 = () => {
  return (
    <main>
      <Section1>
        <img src={hero1} alt="pic" className="desktop-image" />
        <img src={hero1b} alt="pic" className="mobile-image" />
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
            Discover innovative ways to decorate
          </h1>
          <p>
            We provide unmatched quality, comfort, and style for property owners across the country. 
            Our experts combine form and function in bringing your vision to life. Create a room in your 
            own style with our collection and make your property a reflection of you and what you love. 
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
  display: grid;
  grid-template-columns: 2fr 1.1fr;

  .desktop-image {
    width: 100%;
    display: block;
  }
  .mobile-image {
    display: none;
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
    color: white;

    div {
      display: flex;
      align-items: center;

      h3 {
        display: block;
      }

      svg {
        display: none; /* Hide hamburger icon on desktop */

        @media ${device.mobile} {
          display: block; /* Show hamburger icon on mobile */
        }
      }

      @media ${device.mobile} {
        flex-direction: row-reverse;
        width: 90%;
        font-size: 2.3rem;
        justify-content: space-between;
      }
    }

    ul {
      display: flex;
      list-style-type: none;
      justify-content: space-around;
      max-width: 70%;
      width: 100%;
      padding: 0;
      margin: 0;

      @media ${device.mobile} {
        display: none; /* Hide menu list on mobile */
      }

      li {
        padding: 3px;
      }

      li:hover {
        border-bottom: 2px solid white;
        cursor: pointer;
      }
    }
  }
`;

const Article = styled.article`
display:flex;
flex-direction:column;
padding:6rem 1rem 3rem 2.7rem;

h1{
  font-size:2.4rem;
  padding-bottom:15px;

  @media ${device.mobile} {
   font-size:4.5rem;
  }
}

p{
  font-size:14px;
  margin-bottom:1rem;
  line-height:1.4;
  color:hsl(0, 0%, 63%);

  @media ${device.mobile} {
   font-size:2.2rem;
  }
}

div{
  padding-top:20px;
  display:flex;
  align-items:center;
  gap:12px;

  svg{
  
  }
}

button {
    display: flex;
    align-items: center;
    gap: 5px; /* Adds spacing between text and SVG */
    letter-spacing: 0.9rem;
    font-weight: 600;
    background-color: transparent;
    border: none;
    color: #000;

    @media ${device.mobile} {
      font-size:1.7rem;
      font-weight: 300;
    }
    svg {
      fill: #000;
      transition: fill 0.3s ease; 

    &:hover {
      color: hsla(0, 0%, 27%, 0.5); 
      cursor: pointer;

      svg {
        fill: hsla(0, 0%, 27%, 0.5); 
      }
    }
  }
`
export default Slide1