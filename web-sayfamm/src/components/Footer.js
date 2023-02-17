import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { FiTwitter } from "react-icons/fi";
import { CgInstagram } from "react-icons/cg";
import { DiCodepen } from "react-icons/di";

function Footer() {
  return (
    <div
      style={{
        width: "1440px",
        height: "454px",        
        margin:"0 auto 0 auto"
      }}
    >
      <div
        className="kucukKutu"
        style={{
          width: "483px",
          height: "290px",
          display: "flex",
          flexDirection: "column",
          margin:"auto auto",
          paddingTop:"84px"
        }}
      >
        <div
          style={{
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "48px",
            lineHeight: "72px",
            color: "#4731D3",
          }}
        >
          Send me a message!
        </div>
        <div
          style={{
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "24px",
            lineHeight: "150%",
            textAlign: "center",
            color: "#120B39",
          }}
        >
          Got a question or proposal, or just want to <br /> say hello? Go
          ahead.
        </div>
        <div
          style={{
            textDecoration: "underline",
            color: "#4731D3",
            marginTop: "24px",
          }}
        >
          almilasucode@gmail.com
        </div>
        <div style={{ textAlign: "center", marginTop: "36.4px" }}>
          <FiTwitter size={35} color={"#4731D3"} />
          <DiCodepen size={35} color={"#4731D3"} />
          <MdAlternateEmail size={35} color={"#4731D3"} />
          <CgInstagram size={35} color={"#4731D3"} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
