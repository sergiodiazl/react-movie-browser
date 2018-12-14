import React from "react";
import "./Movies.css";
import MovieListItem from "./MovieListItem";
import Button from "./Button";
const Movies = ({movies, page,totalPages,
  onPageIncrease,
  onPageDecrease}) => (
  <section>
    <ul className="movies">
      {movies.map( movie => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </ul>
    <div className="pagination">
    {page>1 ? <Button onClick={onPageDecrease}>Previous</Button> :<Button disabled>Previous</Button>}
    
      <span>{`Page ${page} of ${totalPages}`}</span>
      {page<=totalPages ?
      <Button onClick={onPageIncrease}>Next</Button>
      :<Button disabled>Next</Button>}
    </div>
  </section>
)

export default Movies;