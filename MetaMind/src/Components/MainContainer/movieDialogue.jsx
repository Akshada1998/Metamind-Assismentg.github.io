import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useSelector } from "@mui/base";
import { useDispatch } from "react-redux";
import VedioBackground from "./vedioBackground";

export default function MovieDialogBox() {
  const { open, id } = useSelector((store) => store.movie);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setOpen);
  };
  return (
    <React.Fragment>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <VedioBackground movieID={id} bool={true} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose}> Cancle</button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
