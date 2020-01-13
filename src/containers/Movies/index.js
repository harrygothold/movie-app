import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTrendingMovies } from "../../actions";
import MoviesList from "../MoviesList";

const Movies = ({ getTrendingMovies }) => {
  useEffect(() => {
    getTrendingMovies();
  }, []);
  return <div>{<MoviesList />}</div>;
};

export default connect(null, { getTrendingMovies })(Movies);
