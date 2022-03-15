import styled from 'styled-components'
import React, { useState } from 'react'

import { useTheme } from "../../utils/provider";
import {bgcolor,textcolor} from '../../comps/variable'

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  padding: 40px 0;
  background-color: #FFFFFF;
`;

const Heading = styled.h1`
  font-size: 50px;
  color: #FFA722;
`;

const InputCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  padding: 20px;
`;

const LabelText = styled.label`
  padding-top: 10px;
`;

const Input = styled.input`
  height: 48px;
  border-radius: 100px;
  font-size: 16px;
  padding: 10px;
  margin: 5px 0;
`;

const EndLabel = styled.label`
  align-self: flex-end;
  padding-bottom: 20px;
`;

const Btn = styled.button`
  width: 227px;
  height: 64px;
  align-self: flex-end;
  border-radius: 20px;
  background-color: #FFA722;
  color: #FFFFFF;
  font-size: 24px;
`;

const TextSpan = styled.span`
  color: #3F59E4;
  cursor: pointer;
`;

export default function SignCard({
  spanOnClick=()=>{},
  btnOnClick=()=>{},
  headingtext='Create Profile',
  endlabeltext='Already a member?',
  textspantext='Sign In',
  btntext='Sign Up'
}) {
  return (
    <Cont>
      <InputCont>
      <Heading>{headingtext}</Heading>
        <LabelText>Email:</LabelText>
        <Input type='text' />

        <LabelText>Password:</LabelText>
        <Input type='password' />
        <EndLabel>{endlabeltext}<TextSpan onClick={spanOnClick}>{textspantext}</TextSpan></EndLabel>

        <Btn onClick={btnOnClick}>{btntext}</Btn>
      </InputCont>
    </Cont>
  )
}