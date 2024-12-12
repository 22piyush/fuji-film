import React from "react";
import "./FilmCard.css";
import Button from "../Button/Button";
import axios from "axios";

function FilmCard({
  title,
  shortDescription,
  director,
  poster,
  releaseYear,
  category,
  language,
  rating,
  _id,
}) {
  const deleteFilm = async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/films/${_id}`
      );
      console.log("Film deleted successfully:", response.data);
    } catch (error) {
      console.error("Error deleting the film:", error);
    }

    window.location.reload();
  };

  return (
    <div className="film-card">
      <div>
        <img
          src={poster}
          alt={`Poster of ${title}`}
          className="film-card-poster"
        />
      </div>

      <div className="film-card-info">
        <h1>{title}</h1>
        <p>
          {releaseYear} , {language}
        </p>
        <p>{category}</p>
        <b>{director}</b>
        <p>{shortDescription}</p>
      </div>

      <div className="delete-btn">
        <Button title={"Delete"} onClick={deleteFilm} />
      </div>
    </div>
  );
}

export default FilmCard;
