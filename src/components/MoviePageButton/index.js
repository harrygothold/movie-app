import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border: 1px solid black;
  background: white;
  padding: 10px 10px;
  width: 150px;
  transition: all 0.3s;
  cursor: pointer;
  font-size: 18px;
  svg {
    margin-left: 10px;
  }
  &:hover {
    color: white;
    background: #1c2833;
    transform: translateY(-5px) rotate(5deg);
  }
`;

const MoviePageButton = ({ children }) => <Button>{children}</Button>;

export default MoviePageButton;
