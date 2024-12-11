import React, { useState } from "react";
import "./AddFilm.css";
import Input from "../../components/Inputs/Inputs";
import Button from "../../components/Button/Button";
import axios from 'axios';
import toast,{Toaster} from "react-hot-toast";

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

  const addFilms = async() => {
    const response =  await axios.post(`${process.env.REACT_APP_API_URL}/films`,{
      title: film.title,
      shortDescription:film.shortDescription,
      director:film.director,
      poster:film.poster,
      releaseYear:film.releaseYear,
      category:film.category,
      language:film.language,
      rating:film.rating,
    });
    toast.success(response.data.message);

    setFilm({
      title: "",
      shortDescription: "",
      director: "",
      poster: "",
      releaseYear: "",
      category: "",
      language: "",
      rating: "",
    });
};
  
  return (
    <div>
      <h1>Add Film</h1>

      <div className="add-film-form">
        <Input
          label="Title"
          value={film.title}
          setValue={(val) => {
            setFilm({ ...film, title: val });
          }}
          placeholder={"Enter The Title Of Your Film"}
        />

        <Input
          label="Short Description"
          value={film.shortDescription}
          setValue={(val) => {
            setFilm({ ...film, shortDescription: val });
          }}
          placeholder={"Enter Short Description"}
        />

        <Input
          label="Director"
          value={film.director}
          setValue={(val) => {
            setFilm({ ...film, director: val });
          }}
          placeholder={"Enter director of your film"}
        />

        <Input
          label="Poster"
          value={film.poster}
          setValue={(val) => {
            setFilm({ ...film, poster: val });
          }}
          placeholder={"Enter the URL of the poster"}
        />

        <Input
          label="Release Year"
          value={film.releaseYear}
          setValue={(val) => {
            setFilm({ ...film, releaseYear: val });
          }}
          placeholder={"Enter the release year of the film"}
        />

        <Input
          label="category"
          value={film.category}
          setValue={(val) => {
            setFilm({ ...film, category: val });
          }}
          placeholder={"Enter the category of the film"}
        />

        <Input
          label="language"
          value={film.language}
          setValue={(val) => {
            setFilm({ ...film, language: val });
          }}
          placeholder={"Enter the language"}
        />

        <Input
          label="Rating"
          value={film.rating}
          setValue={(val) => {
            setFilm({ ...film, rating: val });
          }}
          placeholder={"Enter The Rating"}
        />
                   
              <Button 
              title="Add Film"
              onClick={()=>{addFilms()}}
              variant="primary"
              />
      </div>
    </div>
  );
}

export default AddFilm;
