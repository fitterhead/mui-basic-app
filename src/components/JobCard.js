import * as React from "react";
import "../styles.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function JobCard({ skills, description, title, id }) {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;

  console.log("job location", location);
  return (
    <Card
      elevation={5}
      sx={{
        padding: "0.5rem",
        display: "flex",
        flexDirection: "column",
        maxWidth: 345,
        minHeight: "35vh",
        backgroundColor: "#F0FAF0",
      }}
    >
      <CardContent
        sx={{
          padding: "1em",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{ flexBasis: "20%", minHeight: "5rem" }}
        >
          {title}
        </Typography>
        <CardActions sx={{ alignContent: "center", flexWrap: "wrap" }}>
          {skills.slice(0, 3).map((skill) => {
            return (
              <Chip
                key={Math.random()}
                label={`${skill}`}
                size="small"
                color="warning"
              />
            );
          })}
        </CardActions>
        <Divider />
        <Typography
          sx={{ padding: "1em 0em 0em 0em" }}
          variant="body2"
          color="text.secondary"
        >
          {description}
        </Typography>
      </CardContent>

      <CardActions sx={{ flexBasis: "5vh", justifyContent: "center" }}>
        <Button
          sx={{ backgroundColor: "#EA526F" }}
          variant="contained"
          size="small"
          component={Link}
          state={{ backgroundLocation: location }}
          to={`/${id}`}
          // onClick={() => {
          //   navigate(`/${id}`);
          // }}
        >
          LEARN MORE
        </Button>
      </CardActions>
    </Card>
  );
}
