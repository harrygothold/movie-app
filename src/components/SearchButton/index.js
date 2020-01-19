import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchButtonWrapper = styled.div`
  background: #1c2833;
  padding: 10px;
  color: white;
  margin-right: 60px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

const SearchButton = ({ toggleSearch, showSearch }) => {
  return (
    <SearchButtonWrapper onClick={() => toggleSearch(!showSearch)}>
      <FontAwesomeIcon icon={faSearch} size="lg" />
    </SearchButtonWrapper>
  );
};

export default SearchButton;
