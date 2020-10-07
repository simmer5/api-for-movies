require("dotenv").config();
const cors = require("cors");
const axios = require("axios");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());

app.get("/api/movies", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2020&year=2020&with_genres=878`
    );
    res.json(response.data.results);
  } catch (err) {
    console.log("=========ERRORR===========", err);
    res.send({ message: "something went wrong" });
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
