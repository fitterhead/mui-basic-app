import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import NavBar from "../components/NavBar";
import JobCard from "../components/JobCard";
import Grid from "@mui/material/Grid";
import JobPagination from "../components/JobPagination";
import jobs from "../jobs.json";
import theme from "../contexts/Theme";
import { useState } from "react";
import LoginModal from "../components/LoginModal";
import Router from "../routes/Router";
import DetailPage from "./DetailPage";
import { useLocation } from "react-router-dom";

function HomePage() {
  const location = useLocation();
  console.log("homepage Location", location);
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(5);
  const handleChange = (event, value) => {
    setPage(value);
    setCurrentPage(value * 5);
    console.log({ page });
  };

  return (
    <>
      <CssBaseline sx={{ height: "100vh", width: "100vw" }} />
      <Box>
        <DetailPage />
        <Grid
          direction="row"
          justifyContent="flex-start"
          sx={{
            maxWidth: "1280px",
            padding: "1em",
          }}
          container
          spacing={3}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {jobs.slice(currentPage - 5, currentPage).map((job, index) => {
            return (
              <Grid key={Math.random()} item xs={4}>
                <JobCard
                  skills={job.skills}
                  title={job.title}
                  description={job.description}
                  id={job.id}
                />
              </Grid>
            );
          })}
        </Grid>
        <JobPagination handleChange={handleChange} page={page} />
      </Box>
    </>
  );
}

export default HomePage;
