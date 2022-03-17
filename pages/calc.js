import React, { useState } from 'react'
import ax from 'axios';
import Button from '../comps/buttons/Button'
import NavBar from '../comps/global/Navbar'
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
  background-color:${props=>props.background};
`;


export default function Settings({
  bg = bgcolor,
  color = textcolor
}) {
  const {theme} =useTheme();
  const {setTheme} = useTheme();



  return (<div style ={styles}>
  
  <Cont background ={bg[theme]}>
      <NavBar title='Calculate calories'/>


    </Cont>



</div>


  )
}
