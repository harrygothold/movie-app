import React from "react";
import styled from "styled-components";
import moment from "moment";
import Rating from "../Rating";

const MovieItemWrapper = styled.div`
  box-shadow: 0rem 2rem 5rem rgba(0, 0, 0, 0.25);
  border-radius: 10%;
  width: 25%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  height: 550px;
  transition: all 0.7s;
  &:hover {
    transform: scale(1.1);
  }
`;

const MovieItemImageWrapper = styled.div`
  width: 100%;
  height: 400px;
`;

const MovieItemImage = styled.img`
  width: 100%;
  height: 100%;
  padding-top: 10px;
  border-radius: 30px;
  object-fit: cover;
`;

const MovieTextContainer = styled.div`
  margin-top: 35px;
  width: 100%;
  text-align: center;
`;

const MovieItemTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;
const MovieItemDate = styled.p`
  font-size: 12px;
  margin-top: 7px;
  margin-bottom: 20px;
`;

const MovieItem = ({ movie }) => {
  return (
    <MovieItemWrapper>
      <MovieItemImageWrapper>
        <MovieItemImage
          src={`${process.env.REACT_APP_SECURE_FILM_URL}/${movie.poster_path}`}
          alt={movie.title}
        />
      </MovieItemImageWrapper>
      <MovieTextContainer>
        <MovieItemTitle>{movie.title}</MovieItemTitle>
        <MovieItemDate>
          {moment(movie.release_date).format("dddd, MMMM do YYYY")}
        </MovieItemDate>
        <Rating number={movie.vote_average / 2} />
      </MovieTextContainer>
    </MovieItemWrapper>
  );
};

export default MovieItem;
