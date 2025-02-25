
import styled from "styled-components"
const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
    <h1>{score}</h1>
    <p>TOTAL SCORE</p>
    </ScoreContainer>
  )
}

export default TotalScore

const ScoreContainer = styled.div`

max-width: 200px;
text-align: center;
h1{
    font-size: 100px;
    line-height: 40px;
}
p{
    font-size: 24px;
    font-weight: 700px;
    line-height: 4px;
}
`;