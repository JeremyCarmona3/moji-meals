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

const IngContRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  border: 2px solid ${props=>props.color};
  border-radius: 10px;
  padding: 10px;
`;

const DirCont = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const HeaderText = styled.p`
  font-size: 2rem ;
  color:${props=>props.color};
`;

const Text = styled.p`
  color:${props=>props.color};
`;

export default function DirectionsCard({
  color = textcolor,
  direction1 = ["direction1"],
  direction2 = "direction2",
  direction3 = "direction3",
  direction4 = "direction4",
  direction5 = "direction5"

}) {
  const {theme} =useTheme();
return (
    <Cont>
      <HeaderText color ={color[theme]}>Directions</HeaderText>
      <IngContRow color ={color[theme]}>
        <DirCont>
          <Text color ={color[theme]}>Preps</Text>
          <Text color ={color[theme]}>{direction1}</Text>
          <Text color ={color[theme]}>{direction2}</Text>
          <Text color ={color[theme]}>{direction3}</Text>
          <Text color ={color[theme]}>{direction4}</Text>
        </DirCont>
        <DirCont>
          <Text color ={color[theme]}>Steps</Text>
          <Text color ={color[theme]}>Directions here</Text>
          <Text color ={color[theme]}>Directions here</Text>
          <Text color ={color[theme]}>Directions here</Text>
          <Text color ={color[theme]}>Directions here</Text>
        </DirCont>
      </IngContRow>
    </Cont>
  )
}