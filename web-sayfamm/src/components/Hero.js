import React from "react";
import styled from "styled-components";
import { SiGithub, SiLinkedin } from "react-icons/si";
import heroPng from "../img/hero-right (1).png"

const SCHero = styled.div`
  width: 1440px;
  height: 671px;
  background-color: #4731d3;
  margin: 0 auto 0 auto;
`;
const SCHeaderAlti = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 239px;
  padding-top: 37px;
  width: 960px;
  text-align: left;
`;

const SCInfoImg = styled.div`
  display: flex;
  width: 960px;
  height: 375px;
`;

const SCInfo = styled.div`
  width: 528.88px;
  height: 375.89px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const SCInfo1 = styled.div`
  height: 118px;
  font-style: normal;
  font-weight: 700;
  font-size: 54px;
  line-height: 110%;
  color: #cbf281;
`;
const SCInfo2 = styled.div`
  font-size: 24px;
  line-height: 29px;
  line-height: 100%;
  text-align: left;
  vertical-align: top;
  margin-top: 36px;
  color: #ffff;
`;

const SCLinkler = styled.div`
  display: flex;
  width: 278px;
  height: 52px;
  margin-top: 36px;  
  gap: 12px;
  border-radius: 6px;
`;

const SCA=styled.a`
display: flex;
column-gap: 2.5rem;
background-color: white;
padding:12px;
border-radius: 6px;
width: 127px;
height: 52px;
border: 1px solid #3730A3;
align-items: center;
`
const SCP=styled.p`
column-gap: 2.5rem;
background-color: white;
color:#3730A3;
font-style: normal;
font-size: 18px;
font-weight: 500;
margin-top: auto;
margin-bottom: auto;

`

const SCImg=styled.div`
border-radius: 18px;
 width: 350;

`

function Hero() {
  return (
    <SCHero className="hero">
      <SCHeaderAlti className="headerAlti">
        <div className="header">
          
          <p style={{ fontSize: "32px", color: "#CBF281" }}>sümeyye</p>
        </div>
        <SCInfoImg className="infoImg">
          <SCInfo className="info">
            <SCInfo1>I am a Frontend Developer...</SCInfo1>
            <SCInfo2>
              ...who likes to craft solid and scalable frontend products with
              great user experiences.
            </SCInfo2>
            <SCLinkler className="linkler">

              <SCA href="https://github.com/sumeyyetuzuner17" target={"_blank"} >
                
                <SiGithub size={30} />
                <SCP >GitHub</SCP>
              </SCA>
              <SCA href="https://www.linkedin.com/in/s%C3%BCmeyyet%C3%BCz%C3%BCner17/" target={"_blank"} >
                
                <SiLinkedin size={30} />
                <SCP >Linkedln</SCP>
              </SCA>
            </SCLinkler>
          </SCInfo>
            <SCImg>
            <img src={heroPng} alt=""/>
            </SCImg>
            
          
        </SCInfoImg>
      </SCHeaderAlti>
    </SCHero>
  );
}

export default Hero;
