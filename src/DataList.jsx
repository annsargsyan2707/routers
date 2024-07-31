import React from "react";
import { useState, useEffect } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { Box, IconButton, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
//import { BrowserRouter, Route } from "react-router-dom";

const DataList = () => {
  const [breeds, setBreeds] = useState([]);
  const [open, setOpen] = useState({});

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((data) => {
        const res = Object.entries(data.message);
        const arrayOfDogs = res.map(([key, value]) => ({
          breed: key,
          subBreeds: value,
        }));

        setBreeds(arrayOfDogs);
      });
  }, []);

  const onToggleClick = (breed) => {
    setOpen({
      ...open,
      [breed]: !open[breed],
    });
  };

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <Typography
              variant="h4"
              sx={{ color: "#523F3F", fontWeight: "bold" }}
            >
              Breeds
            </Typography>
          </ListSubheader>
        }
      >
        {breeds.map((item) => (
          <React.Fragment key={item.breed}>
            <ListItem>
              <ListItemText sx={{ color: "#654831" }}>
                <Link
                  key={item.breed}
                  to={`/dataList/breeds/${item.breed}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {item.breed}
                </Link>
                {!!item.subBreeds.length && (
                  <>
                    {open[item.breed] ? (
                      <IconButton onClick={() => onToggleClick(item.breed)}>
                        <ExpandLess />
                      </IconButton>
                    ) : (
                      <IconButton onClick={() => onToggleClick(item.breed)}>
                        <ExpandMore />
                      </IconButton>
                    )}
                  </>
                )}
              </ListItemText>
            </ListItem>
            {!!item.subBreeds.length && (
              <Collapse in={open[item.breed]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subBreeds.map((subBreed) => (
                    <ListItem sx={{ pl: 4 }}>
                      <ListItemText>
                        <Link
                          to={`/dataList/breeds/${item.breed}/${subBreed}`}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          {subBreed}
                        </Link>
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default DataList;
