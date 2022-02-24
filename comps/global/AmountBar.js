/*
Colors
  Pitch: #000000
  Dark: #242424
  White: #FFFFFF
  Grey: #B2B3C6
  LightGreen: #DDF4C3
  BrightGreen: #8BE22D
  Orange: #FFA722
  LightBlue: #DEEDF2
  Blue: #498098
  Red: #C12E2E
*/

import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 8px 0;
`


const Name = styled.label`
  font-size: 16px;
  line-height: 0.5;
  margin-left: 5px;
  color: Black;
`

const BarCont = styled.div`
  height: 25px;
  borderRadius: 50;
  margin: 50;
  border-radius: 50px;
  box-shadow: 0px 3px 6px grey;
  overflow: hidden;
  background: #B2B3C6;
`

const Bar = styled.div`
  height: 100%;
  border-radius: 50px;
  display: flex;
  justify-content: left;
  align-items: center;
  
  background: #FFA722;
`

const BarText = styled.div`
  line-height: 0;
  text-shadow: 0 2px 1px #000;
  font-weight: 600;
  
  padding: 0 10px;
  color: #FFF;
`

const AmountBar = ({
  value = 0,
  nutrient = 'Nutrient',
})=>{

  let BuffVal = (value * 10)

  const BarWidth = {
    width: `${BuffVal}%`
  }

  return <Container>
    <Name>{nutrient}</Name>
    <BarCont>
      <Bar style={BarWidth}>
        <BarText>{value}</BarText>
      </Bar>
    </BarCont>
</Container>
}

export default AmountBar;