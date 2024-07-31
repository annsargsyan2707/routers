import { Box, Typography } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Random = () => {
  const { breed, subBreed } = useParams();
  const [breedData, setBreedData] = useState(null);
  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then((res) => res.json())
      .then((data) => setBreedData(data.message));
  }, [breed, subBreed]);

  return (
    <Box
      sx={{ m: 6, width: "100%", display: "flex", justifyContent: "center" }}
    >
      {breedData && (
        <div>
          <Typography sx={{ color: "#735344", fontWeight: "bold" }}>
            {breed.charAt(0).toUpperCase() + breed.slice(1)}
          </Typography>
          <img
            src={breedData}
            alt={`${breed} ${subBreed || ""}`}
            style={{ width: "400px", height: "400px" }}
          />
        </div>
      )}
    </Box>
  );
};

export default Random;
