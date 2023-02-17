import React from "react";
import styled from "styled-components";
import profileImg from "../img/image 2.png";

const SCEndis = styled.div`
  width: 1440px;
  height: 552px;
  background-color: #4731d3;
  margin: 0 auto 0 auto;
`;
const SCH2 = styled.div`
  color: #cbf281;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 100%;
  letter-spacing: 0.01em;
  width: 156px;
  height: 48px;
  margin-left: 235px;
  padding-top: 84px;
`;
const SCUclu = styled.div`
  display: flex;
  width: 960px;
  height: 291px;
  align-items: center;
  margin-left: 240px;
  margin-top: 33px;
`;

const SCInfo = styled.div`
  width: 300px;
  height: 291px;
  display: flex;
  flex-direction: column;
`;
const SCImg = styled.img`
width: 360px;
height: 360px;
`;

const SCBasic = styled.div`
  width: 300px;
  height: 28px;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 28px;
  color: #ffffff;
  text-align: left;
`;
const SCIkili = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  width: 300px;
  height: 222px;
`;

const SCSorular = styled.div`
  width: 101px;
  height: 222px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  /* or 24px */
  letter-spacing: 0.01em;
  color: #02051e;
  margin-top: 24px;
  text-align: left;
`;

const SCCevaplar = styled.div`
  width: 189px;
  height: 222px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  /* or 24px */
  margin-top: 24px;
  text-align: left;
  letter-spacing: 0.01em;

  color: #ffffff;
`;
const SCIkiliAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 300px;
  height: 290.68px;
  mix-blend-mode: normal;
`;
const SCAbout = styled.div`
  width: 300px;
  height: 25px;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 100%;
  /* or 30px */
  color: #ffffff;
  text-align: left;
`;

const SCLorem = styled.div`
  width: 300px;
  height: 241px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  /* or 27px */
  color: #ffffff;
  text-align: left;
`;
function Profile() {
  return (
    <SCEndis className="endis">
      <SCH2>Profile</SCH2>
      <SCUclu className="ucluFlex">
        <SCInfo className="info">
          <SCBasic className="basic">Basic Information</SCBasic>
          <SCIkili className="ikili">
            <SCSorular className="sorular">
              <p>Doğum tarihi</p>
              <p> İkamet Şehri</p>
              <p>Eğitim Durumu</p>
              <p> Tercih Ettiği Rol</p>
            </SCSorular>
            <SCCevaplar className="cevaplar">
              <p>24.03.1996</p>
              <p>Ankara </p>
              <p>Hacettepe Ünv. Biyoloji Lisans, 2016</p>
              <p>Frontend, UI</p>
            </SCCevaplar>
          </SCIkili>
        </SCInfo>
        <SCImg src={profileImg} alt="" />
        <SCIkiliAbout className="ikiliAbout">
          <SCAbout className="about">About Me</SCAbout>
          <SCLorem>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia. <br />
            Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
            deserunt quam temporibus cumque magnam!
          </SCLorem>
        </SCIkiliAbout>
      </SCUclu>
    </SCEndis>
  );
}

export default Profile;
