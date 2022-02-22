import react, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { IoMenu, IoArrowBackOutline, IoClose } from "react-icons/io5";
import { useRouter } from 'next/router';

const NavCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 120px;
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
  padding-top: 5%;
  padding-right: 10%;
`;

const LinksCont = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
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
  cursor: pointer;
`;

const NavBar = ({
  title='Discover eMoj',
  logo='/Logo.png',
  showBackBtn='none',
  showLogo=''
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
            display={showLogo}
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
      return(
        <LinksCont>
          <CloseCont>
            <IoClose
              size={60} 
              onClick={showNav}
              style={{cursor: 'pointer'}}
            />
          </CloseCont>
          <LinksCol>
            <Image src={logo} alt="Moji Meals Logo" width={243} height={122} layout='fixed'/>
            <Link onClick={() => router.push('/')}>Moji Library</Link>
            <Link onClick={() => router.push('/findRecipe')}>Find Recipe</Link>
            <Link onClick={() => router.push('/settings')}>Settings</Link>
          </LinksCol>
        </LinksCont>
      );
  }
}

export default NavBar;