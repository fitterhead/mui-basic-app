import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import "../styles.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Chip } from "@mui/material";
import { Divider } from "@mui/material";
import jobs from "../jobs.json";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "#F0FAF0",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function DetailPage() {
  const params = useParams();
  console.log(params);
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const location = useLocation();

  return (
    <>
      {jobs.map((job) => {
        if (params.detailId === job.id) {
          return (
            <div>
              <Modal
                key={Math.random()}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                {/* <Box sx={style}> */}
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
                {/* </Box> */}
              </Modal>
            </div>
          );
        }
      })}
    </>
  );
}
