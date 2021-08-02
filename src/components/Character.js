import styled from "styled-components";
import Stats from "./Stats";
// Write your Character component here

const StyledDiv = styled.div`
color: ${props => props.theme.PrimaryColor};
background-color: ${props => props.theme.bgColor};
width: 75%;
padding: 3% 2%;
margin: 0 auto;
margin-bottom: 30px;
text-align: center;
border-radius: 20px;
`
const Styledh2 = styled.h2`
    margin-top: 30px;
`

export default function Character({ characters }) {

    return (
        <StyledDiv>
            {characters.map((eachChar) =>
                <div>
                    <Styledh2>{eachChar.name}</Styledh2>
                    <Stats eachChar={eachChar}></Stats>
                </div>
            )}
        </StyledDiv>
    )
}
