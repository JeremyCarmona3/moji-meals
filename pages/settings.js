import Head from 'next/head'
import Image from 'next/image'

import Button from '../comps/buttons/Button'
import NavBar from '../comps/global/Navbar'
import EmojiCard from '../comps/cards/EmojiCard'
import EmojiCardBig from '../comps/cards/EmojiCardBig'
import HighlightCard from '../comps/cards/HighlightCard'
import NutritionCard from '../comps/cards/NutritionCard'
import AmountBar from '../comps/global/AmountBar'
import Bar from '../comps/global/Bar'
import styled from 'styled-components'

import styles from '../styles/Home.module.css'


const HomeCont = styled.div`
width:100%;
height:100%;
display:flex;
flex-wrap:wrap;
background-color:white;
flex-direction:column;
justify-content:center;
`
const ButtonCont = styled.div`
width:100%;
height:100%;
display:flex;
flex-wrap:wrap;
background-color:white;
flex-direction:row;
margin:30px;
justify-content:center;
`






export default function Settings() {
  return (
    <div className={styles.container}>
      <HomeCont>
        <NavBar title='Settings' />
          
          <ButtonCont>
            <p>Default Preference</p>
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
          </ButtonCont>
          
          <ButtonCont>
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
          </ButtonCont>
          
          <ButtonCont>
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
          </ButtonCont>
          
          <ButtonCont>
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
          </ButtonCont>
         
          <ButtonCont>
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
          </ButtonCont>

      </HomeCont>
     
    </div>
  )
}
