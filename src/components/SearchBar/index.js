import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { searchMovies, toggleSearch } from "../../actions";

const SearchBarWrapper = styled.div`
  position: absolute;
  left: 35%;
  transform: translateY(
    ${({ showSearch }) => (showSearch ? "87px" : "-180px")}
  );
  transition: 0.5s ease-in;
  background: #1c2833;
  width: 450px;
  margin: 0 auto;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  z-index: 1;
  @media (max-width: 699px) {
    left: 0;
  }
`;

const SearchInput = styled.input`
  width: 50%;
  border: none;
  height: 25px;
  padding: 5px;
`;

const SearchTitle = styled.h3`
  color: white;
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  background: white;
  border: 1px solid black;
  padding: 5px 5px;
  width: 25%;
  margin-top: 5px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: black;
    color: white;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SearchBar = ({ showSearch, searchMovies, toggleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = e => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    searchMovies(searchTerm);
    toggleSearch(false);
  };

  return (
    <SearchBarWrapper showSearch={showSearch}>
      <SearchTitle>Search A Movie Here!</SearchTitle>
      <Form onSubmit={handleSearchSubmit}>
        <SearchInput
          onChange={handleSearch}
          type="search"
          value={searchTerm}
          placeholder="Search For a Movie...."
        />
        <SubmitButton type="submit">Search</SubmitButton>
      </Form>
    </SearchBarWrapper>
  );
};

export default connect(null, { searchMovies, toggleSearch })(SearchBar);
