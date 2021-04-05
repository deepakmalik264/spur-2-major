import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./Feedback.css";
import Button from "@material-ui/core/Button";
import Form from "react-bootstrap/Form";

import firebase from "firebase/app";
import "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    width: 200,
    display: "flex",
    alignItems: "center",
  },
}));


export default function Feedback() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
   const [hover, setHover] = React.useState(-1);

  const [feedbackData, setFeedback] = React.useState('');
  const [rating, setRating] = React.useState(3);



  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  const handleSubmit = (e) => {
 
    
    e.preventDefault();
     firebase
       .firestore()
       .collection("FeedBackFromUser")
       .add({
         feedback: feedbackData,
         rating: rating
       })
       .then(() => {
         toast.success("Thanks for feedback !", {
           position: "top-center",
           autoClose: 5000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
         });
         window.history.go(0);
       })
       .catch((error) => {
         alert(error.message);
       });

  }
  
  return (
    <div>
      <span onClick={handleOpen}>Feedback</span>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="makeStyles-paper-5">
            <Form onSubmit={handleSubmit}>
              <h2 id="feedback-form-title"> Rate Our Website !</h2>

              <div className="feedback-text">
                <textarea
                  className="feedback-text-area"
                  placeholder="Feedback here....."
                  cols="40"
                  rows="10"
                  value={feedbackData}
                  onChange={(e) => {
                    setFeedback(e.target.value);
                  }}
                ></textarea>
              </div>

              <div className="rating">
                <div className={classes.root}>
                  <Rating
                    name="hover-feedback"
                    value={rating}
                    precision={0.5}
                    onChange={(event, newValue) => {
                      setRating(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                  />
                  {rating !== null && (
                    <Box ml={2}>{labels[hover !== -1 ? hover : rating]}</Box>
                  )}
                </div>
              </div>

              <div className="submit-btn-feedback-form">
                <Button variant="primary" type="submit">
                  <strong>Submit</strong>
                </Button>
                <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
              </div>
            </Form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
