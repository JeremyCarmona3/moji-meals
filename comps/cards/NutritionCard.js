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
  Red: #C12E2E
*/


import { useEffect, useState } from 'react';
import {useRouter} from 'next/router';

import styled from "styled-components";
import AmountBar from "../global/AmountBar";


const CardCont = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
  min-height: 300px;
  padding: 30px;
  border-radius: 10px;
  backgroung: #DAF7A6; 
  box-shadow: 0px 4px 6px grey;
`

const TopCont = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 10px 0;
`

const Title = styled.label`
  font-weight: bold;
  font-size: 24px;
  color: black;
`
const PrefLink = styled.label`
  font-weight: light;
  font-size: 14px;
  color: blue;
`
const DataCont = styled.div`
  display: flex;
  flex-direction: column;
  space-between: 20px;
`
export default function InfoCard() {

  const [nutrientOne, setNutrientOne] = useState("Nutrition 1");
  const [nutrientTwo, setNutrientTwo] = useState("Nutrition 2");
  const [nutrientThree, setNutrientThree] = useState("Nutrition 3");
  const [nutrientFour, setNutrientFour] = useState("Nutrition 4");
  const [nutrientFive, setNutrientFive] = useState("Nutrition 5");

  const [valOne, setValOne] = useState(0);
  const [valTwo, setValTwo] = useState(0);
  const [valThree, setValThree] = useState(0);
  const [valFour, setValFour] = useState(0);
  const [valFive, setValFive] = useState(0);
  

  return (
    <div>
      <CardCont>
        <TopCont>
          <Title>Insights Based on Preferences</Title>
          <PrefLink>customize preferences</PrefLink>
        </TopCont>
        <DataCont>
          <AmountBar nutrient={nutrientOne} value={valOne}/>
          <AmountBar nutrient={nutrientTwo} value={valTwo}/>
          <AmountBar nutrient={nutrientThree} value={valThree}/>
          <AmountBar nutrient={nutrientFour} value={valFour}/>
          <AmountBar nutrient={nutrientFive} value={valFive}/>
        </DataCont>
      </CardCont>
    </div>
  )
}