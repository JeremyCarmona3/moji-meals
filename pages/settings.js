import Head from 'next/head'
import Image from 'next/image'

import Button from '../comps/buttons/Button'
import NavBar from '../comps/global/Navbar'
import EmojiCard from '../comps/cards/EmojiCard'
import EmojiCardBig from '../comps/cards/EmojiCardBig'
import HighlightCard from '../comps/cards/HighlightCard'
import NutritionCard from '../comps/cards/NutritionCard'
import AmountBar from '../comps/global/AmountBar'
import Toggle from '../comps/buttons/Toggle'

import { useTheme } from "../utils/provider";
import {bgcolor,textcolor} from '../comps/variable'

import styled from 'styled-components'
import styles from '../styles/Home.module.css'


const Cont = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100vw;
  padding: 0 3%;
  justify-content: space-between;
  background-color:${props=>props.background}
`;


const BtnRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 5px;
`;

const Headers = styled.p`
  font-size: 24px;
  color:${props=>props.color}
`;


export default function Settings({
  bg = bgcolor,
  color = textcolor
}) {
  const {theme} =useTheme();
  const {setTheme} = useTheme();
  return (<div style ={styles}>
  
  <Cont background ={bg[theme]}>
      <NavBar title='Settings'/>
        <Headers color ={color[theme]}>Popular Data Preferences</Headers>
        <BtnRow>
          <Button text="Calories"/>
          <Button text="Carbohydrates"/>
          <Button text="Total Sugar"/>
          <Button text="Protein"/>
          <Button text="Total Fat"/>
        </BtnRow>
        <BtnRow>
          <Button text="Total Fiber"/>
          <Button text="Cholesterol"/>
          <Button text="Calcium"/>
          <Button text="Sodium"/>
          <Button text="Potassium"/>
        </BtnRow>

        <Headers color ={color[theme]}>Additional Vitamins</Headers>
        <BtnRow> 
          <Button text="Vitamin A"/>
          <Button text="Vitamin B6"/>
          <Button text="Vitamin B12"/>
          <Button text="Vitamin C"/>
          <Button text="Vitamin D"/>
        </BtnRow>
        <BtnRow>
          <Button text="Vitamin E"/>
          <Button text="Vitamin K"/>
          <Button text="Thiamin"/>
          <Button text="Riboflavin"/>
          <Button text="Niacin"/>
        </BtnRow>
        <BtnRow>
          <Button text="Folate"/>
          <Button text="Pantothenic Acid"/>
          <Button text="Choline"/>
          
        </BtnRow>

        <Headers color ={color[theme]}>Additional Minerals</Headers>
        <BtnRow>
          <Button text="Copper"/>
          <Button text="Iron"/>
          <Button text="Magnesium"/>
          <Button text="Manganese"/>
          <Button text="Phosphorus"/>
        </BtnRow>

        <BtnRow>
          <Button text="Selenium"/>
          <Button text="Sodium"/>
          <Button text="Zinc"/>
        </BtnRow>

        <Headers color ={color[theme]}>Specific Fats</Headers>
        <BtnRow>
          <Button text="Saturated Fat"/>
          <Button text="Monounsaturated Fat"/>
          <Button text="Polyunsaturated Fat"/>
        </BtnRow>

        <Toggle text={"DARK Mode"} Click={()=>setTheme('dark')}></Toggle>
        <Toggle text={"Light Mode"} Click={()=>setTheme('light')}></Toggle>

      </Cont>

      </div>


  )
}
