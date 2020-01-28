import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border: 1px solid black;
  background: white;
  padding: 10px 10px;
  transition: all 0.3s;
  cursor: pointer;
  font-size: 18px;
  margin: 10px;
  @media (max-width: 767px) {
    margin-top: 25px;
  }
  svg {
    margin-left: 10px;
  }
  &:hover {
    color: white;
    background: #1c2833;
    transform: translateY(-5px) rotate(5deg);
  }
`;

const MoviePageButton = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);

export default MoviePageButton;
