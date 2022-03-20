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

const IngCont = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const IngContRow = styled.div`
  display: flex;
  flex-direction: Row;
  flex: 1;
  border: 2px solid ${props=>props.color};
  border-radius: 10px;
  padding: 10px;
`;

const IngRow = styled.div`
  display: flex;
  flex-direction: Row;
  flex: 1;
  align-items: center;
`;

const HeaderText = styled.p`
  font-size: 2rem ;
  color:${props=>props.color};
`;

const Text = styled.p`
  color:${props=>props.color};
`;

const Emoji = styled.p`
  font-size: 1.5rem;
  padding-right: 5px;
`;

export default function IngredientsCard({
  color = textcolor,
  emoji1 = "🍉",
  emoji2 = "🍉",
  emoji3 = "🍉",
  emoji4 = "🍉",
  emoji5 = "🍉",
  emoji6 = "🍉",
}) {
  const {theme} =useTheme();
return (
    <Cont>
      <HeaderText color ={color[theme]}>Ingredients</HeaderText>
      <IngContRow color ={color[theme]}>
        <IngCont>
          <IngRow>
            <Emoji>{emoji1}</Emoji>
            <Text color ={color[theme]}>Ingredients</Text>
          </IngRow>
          <IngRow>
            <Emoji>{emoji2}</Emoji>
            <Text color ={color[theme]}>Ingredients</Text>
          </IngRow>
          <IngRow>
            <Emoji>{emoji3}</Emoji>
            <Text color ={color[theme]}>Ingredients</Text>
          </IngRow>
        </IngCont>
        <IngCont>
          <IngRow>
            <Emoji>{emoji4}</Emoji>
            <Text color ={color[theme]}>Ingredients</Text>
          </IngRow>
          <IngRow>
            <Emoji>{emoji5}</Emoji>
            <Text color ={color[theme]}>Ingredients</Text>
          </IngRow>
          <IngRow>
            <Emoji>{emoji6}</Emoji>
            <Text color ={color[theme]}>Ingredients</Text>
          </IngRow>
        </IngCont>
      </IngContRow>
    </Cont>
  )
}