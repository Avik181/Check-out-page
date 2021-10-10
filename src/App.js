import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import hero from "./hero.png";
import bg from "./bg1.png";

function App() {
  return (
    <Container>
      
      <Card>
        <Image></Image>
        <Content>
          <h1>Order Summary</h1>
          <p>You can now listen to millions of songs, audiobooks, and podcasts on any 
            device anywhere you like!</p>
        </Content>

        <div class = "pricing-block">
          <div id = "music-icon"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#DFE6FB"/><path fill="#717FA6" fill-rule="nonzero" d="M32.574 15.198a.81.81 0 00-.646-.19L20.581 16.63a.81.81 0 00-.696.803V26.934a3.232 3.232 0 00-1.632-.44A3.257 3.257 0 0015 29.747 3.257 3.257 0 0018.253 33a3.257 3.257 0 003.253-3.253v-8.37l9.726-1.39v5.327a3.232 3.232 0 00-1.631-.441 3.257 3.257 0 00-3.254 3.253 3.257 3.257 0 003.254 3.253 3.257 3.257 0 003.253-3.253V15.81a.81.81 0 00-.28-.613z"/></g></svg></div>
          <div class="price-description">
            <p class="accent-text">Annual Plan</p>
            <p class="body-text">$59.99/year</p>
          </div>

          <div id="link"><a href="#">Change</a></div>
        
        </div>

        <Buttons>
        <button type="button" id = "payment-button">Proceed to Payment</button><br />
        <button type="button" id = "cancel-button">Cancel Order</button>
        </Buttons>

      </Card>
      
    </Container>
  );
}
const Container=styled.div`
background-color: hsl(225, 100%, 94%);
width:100vw;
height: 100vh;
background-image: url(${bg});
background-repeat: no-repeat;
background-size: contain;
display:flex;
flex-direction:column;
align-items: center;
justify-content: center;
padding: 20px;

`

const Card = styled.div`
 width: 60%;
 marging: auto;
 max-width: 28em;
 line-height:2.1em;
 display:flex;
 flex-direction: column;
 text-align:center;
 justify-content: center;
 background-color: white;
 border-radius: 1.5em;
 margin:1.5em;
`
const Buttons = styled.div`
 display:flex;
 flex-direction: column;
 align-items:center;
 justify-content: center;
`
const Image = styled.div`
width: 100%;
height: 13rem;
background-size: cover;
background-image: url(${hero});
border-radius: 1.5em 1.5em 0 0;
margin : 0;
`

const Content = styled.div`
padding : 0.5rem;
font-family: 'Red Hat Display', sans-serif;
background-color: white;
h1{
  font-size: 28px;
  font-weight: 800;
}

p{
    padding:20px 40px;
    font-weight: 600;
    color: #BCBCC4;
}
padding-top: 40px;


`

export default App;
