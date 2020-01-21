import React from "react";
import styled from "styled-components";

const CastMemberContainer = styled.div`
  border: 1px solid black;
  height: 450px;
  margin: 10px;
  transition: opacity 0.4s;
  position: relative;
  cursor: pointer;
  &:hover {
    p {
      opacity: 0.7;
      background: #fff;
    }
  }
`;

const CastMemberName = styled.p`
  position: absolute;
  opacity: 0;
  bottom: 0;
  height: 100%;
  z-index: 1000;
  font-size: 25px;
  text-align: center;
  width: 100%;
  padding-top: 50%;
  transition: all 0.4s ease-in;
`;

const CastMemberImage = styled.img`
  width: 100%;
  height: 100%;
  z-index: -1000;
`;

const CastMember = ({ castMember }) => {
  return (
    <CastMemberContainer>
      <CastMemberImage
        src={`${process.env.REACT_APP_SECURE_FILM_URL}${castMember.profile_path}`}
        alt={castMember.name}
      />
      <CastMemberName>{castMember.name}</CastMemberName>
    </CastMemberContainer>
  );
};

export default CastMember;
