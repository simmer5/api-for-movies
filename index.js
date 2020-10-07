require("dotenv").config();
const axios = require("axios");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

app.get("/api/movies", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2020&year=2020&with_genres=878`
    );
    res.send(response.data.results);
  } catch (err) {
    console.log("=========ERRORR===========", err);
    res.send({ message: "something went wrong" });
  }
});
app.get("/api/movies/", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=8cd009597749ca7c4f139d1147b23f9e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2020&year=2020&with_genres=878`
    );
    res.send(response.data.results);
  } catch (err) {
    res.send({ message: "something went wrong" });
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
