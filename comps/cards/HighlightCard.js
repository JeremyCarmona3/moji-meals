import styled from 'styled-components'
import React from 'react'


const MainCont = styled.div`
    display: flex;
    flex-direction: column;
    width:30%;
    min-height: 400px;
    background: #e8f9d5;
    border-radius: 22px;
    overflow-wrap: break-word;
`

const Header = styled.text`
    font-size: 2em;
    margin-top: 5%;
    margin-left: 5%;
`
const FactText = styled.text`
    font-size: 1.3em;
    margin-left: 5%;
    margin-top: 5%;
    
`
const FactCont = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 5%;
    margin-top: 5%;
    align-items: center;
    overflow-wrap: break-word;
    word-break: break-all;
`
const Bullet = styled.div`
    display: flex;
    border-radius: 50%;
    height: 13px;
    width: 13px;
    background: #0a0a0a;
    margin-left: 5%;
    margin-top: 5%;
`

const HighlightCard = ({
    facttext="default",
  })=>{
    return<MainCont>
        <Header>Hightlights</Header>
        <FactCont>
            <Bullet/>
            <FactText>{facttext}</FactText>
        </FactCont>

        <FactCont>
            <Bullet/>
            <FactText>{facttext}</FactText>
        </FactCont>

        <FactCont>
            <Bullet/>
            <FactText>{facttext}</FactText>
        </FactCont>
    </MainCont>
  }
  
  export default HighlightCard;