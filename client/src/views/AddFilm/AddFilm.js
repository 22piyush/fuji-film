import React, { useState } from "react";
import "./AddFilm.css";
import Input from "../../components/Inputs/Inputs";

function AddFilm() {
  const [film, setFilm] = useState({
    title: "",
    shortDescription: "",
    director: "",
    poster: "",
    releaseYear: "",
    category: "",
    language: "",
    rating: "",
  });

  return (
    <div>
      <h1>Add Film</h1>

      <div className="add-film-form">
        <Input
          label="Title"
          value={film.title}
          onChange={(val) => {
            setFilm({ ...film, title: val });
          }}
          placeholder={"Enter The Title Of Your Film"}
        />

        <Input
          label="Short Description"
          value={film.shortDescription}
          onChange={(val) => {
            setFilm({ ...film, shortDescription: val });
          }}
          placeholder={"Enter Short Description"}
        />

        <Input
          label="Director"
          value={film.director}
          onChange={(val) => {
            setFilm({ ...film, director: val });
          }}
          placeholder={"Enter director of your film"}
        />

        <Input
          label="Poster"
          value={film.poster}
          onChange={(val) => {
            setFilm({ ...film, poster: val });
          }}
          placeholder={"Enter the URL of the poster"}
        />

        <Input
          label="Release Year"
          value={film.releaseYear}
          onChange={(val) => {
            setFilm({ ...film, releaseYear: val });
          }}
          placeholder={"Enter the release year of the film"}
        />

        <Input
          label="category"
          value={film.category}
          onChange={(val) => {
            setFilm({ ...film, category: val });
          }}
          placeholder={"Enter the category of the film"}
        />

        <Input
          label="language"
          value={film.language}
          onChange={(val) => {
            setFilm({ ...film, language: val });
          }}
          placeholder={"Enter the language"}
        />

        <Input
          label="Rating"
          value={film.rating}
          onChange={(val) => {
            setFilm({ ...film, rating: val });
          }}
          placeholder={"Enter The Rating"}
        />
      </div>
    </div>
  );
}

export default AddFilm;
