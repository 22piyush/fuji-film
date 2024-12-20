import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import FilmCard from "../../components/FilmCard/FilmCard";
import imgAddFilm from "./../../assets/plus.png";
import {Link} from "react-router-dom"

function Home() {
  const [films, setFilms] = useState([]);

  const loadFilms = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/films`);
      setFilms(response.data.data);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message || error?.message);
    }
  };

  useEffect(() => {
    loadFilms();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {films.map((film, index) => {
        const {
          title,
          shortDescription,
          director,
          poster,
          releaseYear,
          category,
          language,
          rating,
          _id,
        } = film;
        return <FilmCard 
        key={index} 
        title={title}
        shortDescription={shortDescription}
        director={director}
        poster={poster}
        releaseYear={releaseYear}
        category={category}
        language={language}
        rating={rating}
        _id={_id}
        />;
      })}

      <Toaster />

   <Link to="/add-film">
      <img src={imgAddFilm} className="img-add-film" alt="add-info"/>
    </Link>

    </div>
  );
}

export default Home;
