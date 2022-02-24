import styled from 'styled-components'
import React from 'react'

import { useTheme } from "../../utils/provider";
import {bgcolor,textcolor} from '../../comps/variable'

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1%;
  cursor: pointer;
`;

const Text = styled.p`
  width: 70%;
  color:${props=>props.color};
`;

const RecipeImg = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
`;

export default function RecipeCard({
  recipeImg='/RecipeOne.PNG',
  recipe='Honey Drizzled Berry Banana Toast',
  color = textcolor
}) {
  const {theme} =useTheme();
return (
    <Cont onClick={() => {}}>
      <RecipeImg
        src={recipeImg} 
        alt='Recipe Image'
        width='240'
        height='240'
      />
      <Text color={color[theme]}>{recipe}</Text>
    </Cont>
  )
} 