import React, { useState } from 'react';
import styled from 'styled-components';

import { useTheme } from "../../utils/provider";
import {bgcolor,textcolor} from '../../comps/variable'

const Cont = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: column;
`;

const DirCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  border: 2px solid ${props=>props.color};
  border-radius: 10px;
  padding: 10px;
`;

const DirSecCont = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0 2%;
  min-width: 280px;
`;

const HeaderText = styled.p`
  font-size: 2rem ;
  color:${props=>props.color};
`;

const SubTitle = styled.p`
  font-weight: bold;
  color:${props=>props.color};
`;

const Text = styled.p`
  color:${props=>props.color};
`;


export default function DirectionsCard({
  color = textcolor,
  direction1 = "direction1",
  direction2 = "direction2",
  direction3 = "direction3",
  direction4 = "direction4",
  direction5 = "direction5",
  direction6 = "direction6",
  direction7 = "direction7",
  direction8 = ""

}) {
  const {theme} =useTheme();
return (
    <Cont>
      <HeaderText color ={color[theme]}>Directions</HeaderText>
      <DirCont color ={color[theme]}>
        <DirSecCont>
          <SubTitle color ={color[theme]}>Preps</SubTitle>
          <Text color ={color[theme]}>{direction1}</Text>
          <Text color ={color[theme]}>{direction2}</Text>
          <Text color ={color[theme]}>{direction3}</Text>
          <Text color ={color[theme]}>{direction4}</Text>
        </DirSecCont>
        <DirSecCont>
          <SubTitle color ={color[theme]}>Steps</SubTitle>
          <Text color ={color[theme]}>{direction5}</Text>
          <Text color ={color[theme]}>{direction6}</Text>
          <Text color ={color[theme]}>{direction7}</Text>
          <Text color ={color[theme]}>{direction8}</Text>
        </DirSecCont>
      </DirCont>
    </Cont>
  )
}