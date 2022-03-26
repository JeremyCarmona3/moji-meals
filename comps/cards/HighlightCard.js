import styled from 'styled-components'
import React from 'react'


const MainCont = styled.div`
    display: flex;
    flex-direction: column;
    width:30%;
    min-height: 300px;
    min-width: 300px;
    margin:20px;
    padding:30px;
    background-color:#DDF4C3; 
    border-radius: 10px;
    box-shadow: 0px 4px 6px grey;
`

const Header = styled.label`
  font-weight: bold;
  font-size: 24px;
  color: black;
`

const FactCont = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10%;
    align-items: top;
`
const Bullet = styled.div`
    border-radius: 100px;
    min-height: 8px;
    min-width: 8px;
    max-height: 8px;
    max-width: 8px;
    margin: 10px;
    background: #0a0a0a;
`

const FactText = styled.text`
    font-size: 1.2em;
`

const HighlightCard = ({
    facttext="default",
    facttext2='',
    facttext3=''
  })=>{
    return<MainCont>
        <Header>eMoji Fact Highlights</Header>
        <FactCont>
            <Bullet/>
            <FactText>{facttext}</FactText>
        </FactCont>

        <FactCont>
            <Bullet/>
            <FactText>{facttext2}</FactText>
        </FactCont>

        <FactCont>
            <Bullet/>
            <FactText>{facttext3}</FactText>
        </FactCont>
    </MainCont>
  }
  
  export default HighlightCard;