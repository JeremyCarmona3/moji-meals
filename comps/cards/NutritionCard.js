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
  margin:20px;
  padding: 30px;
  border-radius: 10px;
  background-color: #DDF4C3; 
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

const default_data = {
  "name": "grapes",
  "emoji": "🍇",
  "Calories": 0.69,
  "Carbohydrates": 0.181,
  "TotalSugar": 0.1548,
  "Protein": 0.0072,
  "TotalFat": 0.0016,
  "Saturated Fat g": 0.00054,
  "Monounsaturated Fat g": 0.00007,
  "Polyunsaturated Fat g": 0.00048,
  "Total Fiber g": 0.009,
  "Cholesterol mg": 0,
  "Vitamin B6 mg": 0.00086,
  "Vitamin A IU": 0.66,
  "Vitamin B12 ug": 0,
  "Vitamin C mg": 0.032,
  "Vitamin D IU": 0,
  "Vitamin E IU": 0.0019,
  "Vitamin K ug": 0.146,
  "Thiamin mg": 0.00069,
  "Riboflavin mg": 0.0007,
  "Niacin mg": 0.00188,
  "Folate ug": 0.02,
  "Pantothenic Acid mg": 0.0005,
  "Choline mg": 0.056,
  "Calcium g": 0.1,
  "Copper mg": 0.00127,
  "Iron mg": 0.0036,
  "Magnesium mg": 0.07,
  "Manganese mg": 0.00071,
  "Phosphorus g": 0.2,
  "Potassium g": 1.91,
  "Selenium ug": 0.001,
  "Sodium g": 0.02,
  "Zinc mg": 0.0007

}
export default function InfoCard({
    nutOne = default_data.Calories,
    nutTwo = default_data.Carbohydrates,
    nutThree = default_data.TotalSugar,
    nutFour = default_data.Protein,
    nutFive = default_data.TotalFat,
    nutNameOne = "",
    nutNameTwo = "",
    nutNameThree = "",
    nutNameFour = "",
    nutNameFive = "",
}) {

  //  const [nutrientOne, setNutrientOne] = useState("Nutrition 1");
  //  const [nutrientTwo, setNutrientTwo] = useState("Nutrition 2");
  //  const [nutrientThree, setNutrientThree] = useState("Nutrition 3");
  //  const [nutrientFour, setNutrientFour] = useState("Nutrition 4");
  //  const [nutrientFive, setNutrientFive] = useState("Nutrition 5");

  // const [valOne, setValOne] = useState(0);
  // const [valTwo, setValTwo] = useState(0);
  // const [valThree, setValThree] = useState(0);
  // const [valFour, setValFour] = useState(0);
  // const [valFive, setValFive] = useState(0);
  

  return (
    <div>
      <CardCont>
        <TopCont>
          <Title>Nutrition Insights (per 100 grams)</Title>
          <PrefLink>customize preferences</PrefLink>
        </TopCont>
        <DataCont>
          <AmountBar nutrient={nutNameOne} value={nutOne}/>
          <AmountBar nutrient={nutNameTwo} value={nutTwo}/>
          <AmountBar nutrient={nutNameThree} value={nutThree}/>
          <AmountBar nutrient={nutNameFour} value={nutFour}/>
          <AmountBar nutrient={nutNameFive} value={nutFive}/>
        </DataCont>
      </CardCont>
    </div>
  )
}