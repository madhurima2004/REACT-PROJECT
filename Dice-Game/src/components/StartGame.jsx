import styled from "styled-components";
// import { Button } from "./styled/button";
const StartGame = ({toggle}) => {
  return (
    <Container>
        <img src="/images/dices.png"/>
        <div className="content">
            <h1>
            DICE GAME
            </h1>
            <Button
            onClick={toggle}
            >Play Now</Button>
        </div>
    </Container>
    
  )
}

export default StartGame;

const Container = styled.div`
max-width:1188px;
display: flex;
margin:0 auto;
align-items: center;
height: 100vh;

.content h1{
    font-size: 96px;
    white-space: nowrap;
    height: 90px;
}



`;

const Button= styled.button`
min-width: 228px;
border: none;
padding: 10px 18px;
background-color: black;
color: white;
border: 1px solid transparent;
font-size: 16px;
transition: 0.4s background ease-in;
cursor: pointer;

&:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
}
`;
