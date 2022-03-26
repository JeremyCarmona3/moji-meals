import React, { useState } from 'react'
import { useRouter } from 'next/router';

import Image from 'next/image';
import styled from 'styled-components'

import SignCard from '../comps/cards/SignCard';

import { useTheme } from "../utils/provider";
import {bgcolor} from '../comps/variable';
import axios from 'axios';
import CreateProfileCard from '../comps/cards/CreateProfileCard';

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
  const router = useRouter();

  const [login, setLogin] = useState()

  const SignIn = () => {
    setLogin(true)
  }

  const SignUp = () => {
    setLogin(false)
  }

  const [userFName, setUserFname] = useState(null)
  const [userLName, setUserLname] = useState(null)
  const [userEmail, setUserEmail] = useState(null)
  const [userPassword, setUserPassword] = useState(null)

  const HandleFName = (value) => {
    console.log(value)
    setUserFname(value)
  }

  const HandleLName = (value) => {
    console.log(value)
    setUserLname(value)
  }

  const HandleEmail = (value) => {
    console.log(value)
    setUserEmail(value)
  }

  const HandlePassword = (value) => {
    console.log(value)
    setUserPassword(value)
  }

  const CreateProfile = () => {
    const newUser = {
      firstname: userFName,
      lastname: userLName,
      email: userEmail,
      password: userPassword
    }

    axios.post('https://emoji-meal-backend.herokuapp.com/signup', newUser)
    .then((res) => {
      if (res) {
        localStorage.setItem('firstname', res.data.firstname)
        localStorage.setItem('lastname', res.data.lastname)
        localStorage.setItem('email', res.data.email)

        setUserFname(res.data.firstname)
        setUserLname(res.data.lastname)
        setUserEmail(res.data.email)
        setUserPassword(res.data.password)

        router.push('/mojilibrary')
      }
    }).catch((e) => {
      console.log(e)
      alert('Profile not created')
    })
  }

  const UserSignin = () => {
    const newUser = {
      firstname: userFName,
      lastname: userLName,
      email: userEmail,
      password: userPassword
    }

    axios.post('https://emoji-meal-backend.herokuapp.com/login', newUser)
    .then((res) => {
      if (res) {
        localStorage.setItem('firstname', res.data.firstname)
        localStorage.setItem('lastname', res.data.lastname)
        localStorage.setItem('email', res.data.email)

        setUserFname(res.data.firstname)
        setUserLname(res.data.lastname)
        setUserEmail(res.data.email)
        setUserPassword(res.data.password)

        router.push('/mojilibrary')
      }
    }).catch((e) => {
      console.log(e)
      alert('Not signed in')
    })
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
            <CreateProfileCard 
              spanOnClick={SignIn}
              btnOnClick={CreateProfile}
              fnameInput={(e)=>{HandleFName(e.target.value)}}
              lnameInput={(e)=>{HandleLName(e.target.value)}}
              emailInput={(e)=>{HandleEmail(e.target.value)}}
              passwordInput={(e)=>{HandlePassword(e.target.value)}}
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
              btnOnClick={UserSignin}
              headingtext='Sign In'
              endlabeltext="Don't have an account?"
              textspantext='Sign Up'
              btntext='Sign In'
              emailInput={(e)=>{HandleEmail(e.target.value)}}
              passwordInput={(e)=>{HandlePassword(e.target.value)}}
            />
          </ColCont>
        </RowCont>
      </Cont>
    )
  }
}