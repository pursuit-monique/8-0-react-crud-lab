import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getOneMovie, updateMovie } from "../api/fetch";

import "./MoviesForm.css";

export default function MoviesForm() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [movie, setMovie] = useState({
    type: "",
    title: "",
    country: "",
    dateAdded: "",
    description: "",
    duration: "",
    listedIn: "",
    rating: "",
    releaseYear: "",
  });

  useEffect(() => {
    getOneMovie(id)
      .then((response) => {
        setMovie(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  function handleSubmit(event) {
    event.preventDefault();

    updateMovie(id, movie)
      .then(() => {
        navigate(`/movies/${id}`);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function handleTextChange(event) {
    setMovie({
      ...movie,
      [event.target.id]: event.target.value,
    });
  }

  useEffect(() => {
    getOneMovie(id)
      .then((response) => {
        setMovie(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={movie.title}
        onChange={handleTextChange}
      />

      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        value={movie.description}
        onChange={handleTextChange}
      />

      <label htmlFor="type">Type</label>
      <input
        type="text"
        id="type"
        value={movie.type}
        onChange={handleTextChange}
      />

      <label htmlFor="rating">Rating:</label>
      <input
        type="text"
        id="rating"
        value={movie.rating}
        onChange={handleTextChange}
      />

      <label htmlFor="listedIn">Listed in</label>
      <input
        type="text"
        id="listedIn"
        value={movie.listedIn}
        onChange={handleTextChange}
      />

      <label htmlFor="duration">Duration</label>
      <input
        type="text"
        id="duration"
        value={movie.duration}
        onChange={handleTextChange}
      />

      <label htmlFor="releaseYear">Release Year</label>
      <input
        type="text"
        id="releaseYear"
        value={movie.releaseYear}
        onChange={handleTextChange}
      />

      <label htmlFor="country">Country</label>
      <input
        type="text"
        id="country"
        value={movie.country}
        onChange={handleTextChange}
      />

      <label htmlFor="dateAdded">Date added:</label>
      <input
        type="text"
        id="dateAdded"
        value={movie.dateAdded}
        onChange={handleTextChange}
      />

      <br />

      <input type="submit" />
    </form>
  );
}