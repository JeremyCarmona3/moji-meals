import React, { useState } from 'react';
import styled from 'styled-components';

import { useTheme } from "../../utils/provider";
import {bgcolor,textcolor} from '../../comps/variable'

const Cont = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const IngCont = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 2px solid ${props=>props.color};
  border-radius: 10px;
  padding: 10px;
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
      <Text color ={color[theme]}>Directions</Text>
      <IngCont color ={color[theme]}>
        <Text color ={color[theme]}>Directions here</Text>
      </IngCont>
    </Cont>
  )
}