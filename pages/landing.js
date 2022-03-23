import React, { useState } from 'react'

import Image from 'next/image';
import styled from 'styled-components'

import SignCard from '../comps/cards/SignCard';

import { useTheme } from "../utils/provider";
import {bgcolor} from '../comps/variable';

const Cont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #DDF4C3;
`;

const RowCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
`;

const ColCont = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const ImgCont = styled.div`
  display: flex;
  flex: 1;
`;

const Heading = styled.h1`
  color: #7FC236;
  font-size: 50px;
`;

export default function Landing({
  
}) { 

  const [login, setLogin] = useState()

  const SignIn = () => {
    setLogin(true)
  }

  const SignUp = () => {
    setLogin(false)
  }
  if (login === false) {
    return (
      <Cont>
        <RowCont>
          <ColCont>
            <Heading>Welcome To</Heading>
            <ImgCont>
              <Image src='/logo.PNG' alt="Moji Meals Logo" width={484} height={243} />
            </ImgCont>
          </ColCont>
          <ColCont>
            <SignCard 
              spanOnClick={SignIn}
              btnOnClick={()=>{}}
            />
          </ColCont>
        </RowCont>
      </Cont>
    )
  } else {
    return (
      <Cont>
        <RowCont>
          <ColCont>
            <Heading>Welcome To</Heading>
            <ImgCont>
              <Image src='/logo.PNG' alt="Moji Meals Logo" width={484} height={243} />
            </ImgCont>
          </ColCont>
          <ColCont>
            <SignCard 
              spanOnClick={SignUp}
              btnOnClick={()=>{}}
              headingtext='Sign In'
              endlabeltext="Don't have an account?"
              textspantext='Sign Up'
              btntext='Sign In'
            />
          </ColCont>
        </RowCont>
      </Cont>
    )
  }
}