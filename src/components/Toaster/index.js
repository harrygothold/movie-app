import React from "react";
import styled from "styled-components";

const ToasterContainer = styled.div`
  background: limegreen;
  width: 30%;
  margin: 0 auto;
  position: fixed;
  bottom: 40px;
  left: 50%;
  padding: 20px;
  text-align: center;
  font-size: 20px;
  transform: translateY(${props => (props.showToaster ? "0px" : "100px")})
    translate(-50%, -50%);
  transition: transform 0.5s ease-in;
  z-index: 10000;
`;

const Toaster = ({ children, showToaster }) => (
  <ToasterContainer showToaster={showToaster}>{children}</ToasterContainer>
);

export default Toaster;
