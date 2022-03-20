import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { IoMenu, IoArrowBackOutline, IoClose } from "react-icons/io5";
import { useRouter } from 'next/router';

const NavCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 120px;
  padding: 5%;
`;

const HeaderText = styled.p`
  font-size: 50px;
  color: #FFA722;
`;

const RowCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CloseCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 2.5%;
  padding-right: 5%;
`;

const LinksCont = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Overlay = styled.div`
  display: block;
  position: fixed;
  background: #E3F2D3;
  height: 100vh;
  width: 100vw;
  opacity: 90%;
`;

const LinksCol = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 10%;
`;

const Link = styled.a`
  font-size: 40px;
  color: #FFA722;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    text-decoration: underline; 
  }
`;

const ImageCont = styled.div`
  z-index: ${props=>props.z};
`

const NavBar = ({
  title='Discover eMoj',
  logo='/Logo.png',
  showBackBtn='none',
  backOnClick=''
}) => {
  const [links, setLinks] = useState(false);

  const showLinks = () => {
    setLinks(true);
  }

  const showNav = () => {
    setLinks(false);
  }

  const router = useRouter();

  if (links === false) {
    return (
      <NavCont>
        <RowCont>
          <IoArrowBackOutline 
            size={60} 
            style={{cursor: 'pointer'}}
            display={showBackBtn}
            onClick={backOnClick}
          />
          <HeaderText>
            {title}
          </HeaderText>
        </RowCont>
        <RowCont>
          <Image 
            src={logo} 
            alt="Moji Meals Logo" 
            width={243} 
            height={122}
          />
          <IoMenu 
            size={60} 
            onClick={showLinks}
            style={{cursor: 'pointer'}}
          />
        </RowCont>
      </NavCont>
    );
  } else {
      return( <>
        <Overlay></Overlay>
        <LinksCont>
          <CloseCont>
            <IoClose
              size={60} 
              onClick={showNav}
              style={{cursor: 'pointer'}}
              />
          </CloseCont>
          <LinksCol>
            <Image src={logo} alt="Moji Meals Logo" width={243} height={122} />
            <Link onClick={() => router.push('/')}>Moji Library</Link>
            <Link onClick={() => router.push('/findRecipe')}>Find Recipe</Link>
            <Link onClick={() => router.push('/settings')}>Settings</Link>
            <Link onClick={() => router.push('/calc')}>calculator</Link>
          </LinksCol>
        </LinksCont>
        <NavCont>
          <RowCont>
            <IoArrowBackOutline 
              size={60} 
              style={{cursor: 'pointer'}}
              display={showBackBtn}
              onClick={backOnClick}
            />
            <HeaderText>
              {title}
            </HeaderText>
          </RowCont>
          <RowCont>
            <ImageCont z={links===true?-2:1}>
              <Image 
                src={logo} 
                alt="Moji Meals Logo" 
                width={243} 
                height={122}
              />
            </ImageCont>
            <IoMenu 
              size={60} 
              onClick={showLinks}
              style={{cursor: 'pointer'}}
            />
          </RowCont>
        </NavCont>
      </>
      );
    }
  }

export default NavBar;