import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import jobs from "../jobs.json";

export default function JobPagination({ handleChange, page }) {
  let JobPage = [];
  for (let x = jobs.length - 1; x >= 0; x--) {
    if (x % 5 === 0) {
      JobPage.push(x);
    }
  }

  return (
    <Stack
      sx={{ padding: "2em" }}
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Pagination
        count={JobPage.length}
        page={page}
        onChange={handleChange}
        color="warning"
      />
    </Stack>
  );
}
