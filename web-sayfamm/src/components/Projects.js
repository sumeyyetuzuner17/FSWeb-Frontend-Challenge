import React from "react";
import styled from "styled-components";
import projectsData from "../data/projectData";

const SCSpan = styled.span`
  display: flex;
  background-color: #cbf281;
`;
const SCDisDiv = styled.div`
  display: flex;
  background-color: white;
  margin-bottom: 36px;
  border-radius: 12px;
`;
const SCImg = styled.img`
  width: 360px;
  height: 360px;
  border-radius: 12px 0px 0px 12px;
  object-fit: cover;
`;
// ---------------------------------------------------

const SCDisDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 960px;
  background-color: #cbf281;
  margin-left: 240px;
`;
const SCDiv3 = styled.div`
  display: flex;
  flex-direction: column;
`;

function Projects() {
  const projectItems = projectsData.map((item, index) => {
    const toolItems = item.tools.map((item, index) => (
      <SCSpan
        key={index}
        className="py-2 px-[18px] bg-[#4731D3] text-white rounded-[23px]"
      >
        {item}
      </SCSpan>
    ));
    return (
      <SCDisDiv
        className="disDiv"
        key={index}
        //   className="bg-white flex flex-col gap-x-4 lg:flex-row rounded-xl shadow-2xl"
      >
        <SCImg
          src={item.img}
          alt=""
          className="img"
          // className="rounded-t-xl object-cover lg:w-[360px] lg:rounded-none lg:rounded-l-xl"
        />
        <div className="py-8 px-8 gap-6 flex flex-col lg:py-[56.5px]">
          <h4 className="text-[32px] text-[#4338CA] font-bold">
            {item.project}
          </h4>
          <p className="text-[16px] text-[#383838] leading-tight">
            {item.body}
          </p>
          <div className="flex flex-wrap gap-[6px]">{toolItems}</div>
          <div className="flex gap-x-9">
            <a
              href={item.link}
              target="_blank"
              className="text-[16px] text-[#120B39] font-medium underline"
            >
              View Site
            </a>
            <a
              href={item.github}
              target="_blank"
              className="text-[16px] text-[#120B39] font-medium underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </SCDisDiv>
    );
  });
  return (
    <div
      style={{
        backgroundColor: "#CBF281",
        width: "1440px",
        margin: "0 auto 0 auto",
      }}
    >
      <SCDisDiv2>
        <h2
          style={{
            marginTop: "84px",
            color: "#4731D3",
            width: "198px",
            height: "48px",
            marginLeft:"240px",
            textAlignLast:"start",
            fontSize:"48px"
          }}
        >
          Projects
        </h2>
        <SCDiv3>{projectItems}</SCDiv3>
      </SCDisDiv2>
    </div>
  );
}

export default Projects;
