import React from "react";
import styled from "styled-components";
import skillsData from "../data/skillsdata";

const SCDiv1 = styled.div`
  display: flex;
  justify-content: flex-start; 
  width: 120px;
  height: 120px;
  margin-right: 400px;

`;

const SCP=styled.p`
font-size: 24px;
font-weight: 500;
color: #777777;
font-style: normal;
line-height: 150%;
width: 146px;
height: 36px;
margin-top: 180px;
`


const SCDiv2=styled.div`
display: flex;
width: 960px;
height: 430px;
justify-content: space-between;
align-items: flex-start;
margin-left: 239px;
margin-top: 84px;
margin-bottom: 96px;
`
const SCH2=styled.h2`
font-size: 48px;
font-weight: 700;
line-height: 58px;
font-style: normal;
width: 128px;
height: 58px;
color:#4832D3;
letter-spacing: 0.01em;
margin-top: 42px;
`


function Skills() {
  const skillsItem = skillsData.map((item, index) => {
    return (
      <SCDiv1 key={index}>
        <img src={item.img} alt="" style={{marginTop:"84px",width:"250px",height:"250px" }}/>
        <SCP>{item.text}</SCP>
      </SCDiv1>
    );
  });

  return (
    <div style={{width:"1440px", backgroundColor:"white", margin:"0 auto 0 auto"}}>
      <SCDiv2>
      <SCH2>Skills</SCH2>
      <div>{skillsItem}</div>
      <div>{skillsItem}</div>
    </SCDiv2>
    </div>
    
  );
}

export default Skills;
