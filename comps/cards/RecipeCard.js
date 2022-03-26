import styled from 'styled-components'
import React from 'react'

import { useTheme } from "../../utils/provider";
import {bgcolor,textcolor} from '../../comps/variable'

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1%;
  cursor: pointer;
  align-items: ${props=>props.alignItems};
`;

const Text = styled.p`
  width: ${props=>props.textWidth};
  color:${props=>props.color};
`;

const RecipeImg = styled.img`
  max-width: 100%;
  height: ${props=>props.imgHeight};
  object-fit: cover;
  border-radius: 10px;
`;

export default function RecipeCard({
  recipeImg='/RecipeOne.png',
  recipe=null,
  color = textcolor,
  alignItems='flex-start',
  textWidth='70%',
  click =()=>{},
  imgWidth='240',
  imgHeight='240'
}) {
  const {theme} =useTheme();
return (
    <Cont alignItems={alignItems}>
      <RecipeImg
        src={recipeImg} 
        alt='Recipe Image'
        width={imgWidth}
        height={imgHeight}
        onClick={click}
      />
      <Text color={color[theme]} textWidth={textWidth}>{recipe}</Text>
    </Cont>
  )
}
