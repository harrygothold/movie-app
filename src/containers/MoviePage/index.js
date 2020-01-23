import React, { useEffect } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { connect } from "react-redux";
import { getMovieById, getCast } from "../../actions";
import MoviePageButton from "../../components/MoviePageButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faLink } from "@fortawesome/free-solid-svg-icons";
import Cast from "../Cast";

const MoviePageContainer = styled.div`
  margin-top: 60px;
  height: 100vh;
  font-family: "Gelasio", serif;
`;

const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 767px) {
    flex-direction: column-reverse;
  }
`;

const MovieTitle = styled.h2`
  margin-left: 20px;
`;

const MovieImageContainer = styled.div`
  width: 400px;
  height: 450px;
`;

const MovieTextContainer = styled.div`
  width: 50%;
  @media (max-width: 767px) {
    width: 100%;
    margin: 50px;
    text-align: center;
  }
`;

const MovieText = styled.p`
  margin: 20px;
  span {
    font-weight: bold;
  }
`;

const SeeMoreLink = styled.a`
  text-decoration: none;
  color: black;
  margin-left: 20px;
  span {
    transition: all 0.3s;
  }
  &:hover {
    span {
      margin-left: 5px;
    }
  }
`;

const MovieImage = styled.img`
  width: 100%;
  max-height: 90%;
  border-radius: 40px;
  box-shadow: 0px 0px 12px 3px rgba(184, 180, 184, 1);
`;

const GenreItem = styled.div`
  svg {
    margin-right: 15px;
  }
`;

const GenreContainer = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border: 1px solid black;
  width: 70%;
  height: auto;
  padding: 20px;
  align-items: center;
  margin-bottom: 30px;
  margin-left: 20px;
  background: #1c2833;
  color: white;
  @media (max-width: 767px) {
    margin: 0 auto;
  }
`;

const MoviePage = ({ getMovieById, match, movie, getCast }) => {
  useEffect(() => {
    const getMovie = async () => {
      await getMovieById(match.params.id);
      await getCast(match.params.id);
    };
    getMovie();
  }, [getCast, getMovieById, match.params.id]);
  return (
    <>
      {movie && (
        <>
          <Helmet>
            <title>{movie.title}</title>
          </Helmet>
          <MoviePageContainer>
            <MovieDetailsContainer>
              <MovieTextContainer>
                <MovieTitle>{movie.title}</MovieTitle>
                <MovieText>{movie.overview}</MovieText>
                <MovieText>
                  <span>Budget:</span> ${movie.budget}
                </MovieText>
                <MovieText>
                  <span>Runtime:</span> {movie.runtime} Minutes
                </MovieText>
                <GenreContainer>
                  {movie.genres.map(genre => (
                    <li>
                      <GenreItem key={genre.id}>
                        <FontAwesomeIcon icon={faFilm} />
                        {genre.name}
                      </GenreItem>
                    </li>
                  ))}
                </GenreContainer>
                <SeeMoreLink href={movie.homepage} target="_blank">
                  <MoviePageButton>
                    See More
                    <FontAwesomeIcon icon={faLink} />
                  </MoviePageButton>
                </SeeMoreLink>
              </MovieTextContainer>
              <MovieImageContainer>
                <MovieImage
                  src={`${process.env.REACT_APP_SECURE_FILM_URL}/${movie.poster_path}`}
                  alt={movie.title}
                />
              </MovieImageContainer>
            </MovieDetailsContainer>
            <hr />
            <Cast movie={movie.title} />
          </MoviePageContainer>
        </>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  movie: state.movie.movie
});

export default connect(mapStateToProps, { getMovieById, getCast })(MoviePage);
