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
  color = textcolor
}) {
  const {theme} =useTheme();
return (
    <Cont>
      <HeaderText color ={color[theme]}>Directions</HeaderText>
      <IngContRow color ={color[theme]}>
        <DirCont>
          <Text color ={color[theme]}>Preps</Text>
          <Text color ={color[theme]}>Directions here</Text>
          <Text color ={color[theme]}>Directions here</Text>
          <Text color ={color[theme]}>Directions here</Text>
          <Text color ={color[theme]}>Directions here</Text>
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