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
  margin: 20px;
  flex: 1;
`;

const IngContRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  border: 2px solid ${props=>props.color};
  border-radius: 10px;
  padding: 10px;
`;

const IngRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HeaderText = styled.p`
  font-size: 2rem ;
  text-align: center;
  line-height: 0;
  color:${props=>props.color};
`;

const Text = styled.p`
  color:${props=>props.color};
`;

const Emoji = styled.p`
  font-size: 2rem;
  line-height: 0.2;
`;

export default function IngredientsCard({
  color = textcolor,
  emoji1 = "🍉",
  emoji2 = "🍉",
  emoji3 = "🍉",
  emoji4 = "🍉",
  title = "",
  Ingredients1="",
  Ingredients2="",
  Ingredients3="",
  Ingredients4="",
}) {
  const {theme} =useTheme();
return (
    <Cont>
      <HeaderText color ={color[theme]}>{title}</HeaderText>
      <IngContRow color ={color[theme]}>
        <IngCont>
          <IngRow>
            <Emoji>{emoji1}</Emoji>
            <Text color ={color[theme]}>{Ingredients1}</Text>
          </IngRow>
          <IngRow>
            <Emoji>{emoji2}</Emoji>
            <Text color ={color[theme]}>{Ingredients2}</Text>
          </IngRow>
        </IngCont>
        <IngCont>
          <IngRow>
            <Emoji>{emoji3}</Emoji>
            <Text color ={color[theme]}>{Ingredients3}</Text>
          </IngRow>
          <IngRow>
            <Emoji>{emoji4}</Emoji>
            <Text color ={color[theme]}>{Ingredients4}</Text>
          </IngRow>
        </IngCont>
      </IngContRow>
    </Cont>
  )
}