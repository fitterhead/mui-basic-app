import * as React from "react";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import "../styles.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Chip } from "@mui/material";
import { Divider } from "@mui/material";
import jobs from "../jobs.json";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function DetailPage() {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  const location = useLocation();
  console.log("detail", location);
  return (
    <>
      {jobs.map((job) => {
        if (params.detailId === job.id) {
          return (
            <div>
              <Modal
                key={Math.random()}
                open={true}
                // onClose={handleClose}
                onClose={() => navigate(-1)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Card
                  sx={{
                    padding: "0.5rem",
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: 500,
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "#F0FAF0",
                    boxShadow: 24,
                    p: 4,
                  }}
                >
                  <CardContent
                    sx={{
                      padding: "1em",
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: 1,
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ flexBasis: "20%", minHeight: "5rem" }}
                    >
                      {job.title}
                    </Typography>
                    <CardActions sx={{ alignContent: "center" }}>
                      {job.skills.slice(0, 3).map((skill) => {
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
                      City:{job.city}{" "}
                    </Typography>
                  </CardContent>
                </Card>
              </Modal>
            </div>
          );
        }
      })}
    </>
  );
}
