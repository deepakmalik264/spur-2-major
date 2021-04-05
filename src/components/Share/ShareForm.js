import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./ShareForm.css";
import Button from "@material-ui/core/Button";
import Form from "react-bootstrap/Form";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";


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
}));

export default function ShareForm(props) {


  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [designation, setDesignation] = React.useState('');
  const [progress, setProgress] = React.useState(0);
  const [category, setCatogory] = React.useState('select');
 

  const handleSubmit = (e) => {

    e.preventDefault();
  
    const storage = firebase.storage();
    
    if (props.image == null) {
         toast.error("🦄 Plese Upload Your Image", {
           position: "top-center",
           autoClose: 5000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
         });
    }
    else {
      const uploadTask = storage.ref(`images/${props.image.name}`).put(props.image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
    
        },
        (error) => {
          console.log(error);
        },
      
        () => {
       
          storage
            .ref("images")
            .child(props.image.name)
            .getDownloadURL()
            .then((url) => {
              firebase
                .firestore()
                .collection("storiesExamUpsc")
                .add({
                  name: name,
                  email: email,
                  position: designation,
                  story: props.story,
                  source: url,
                  category: category,
                })
                .then(() => {
                  toast.success("🦄 Successfully Uploaded!", {
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
            });
        }
      );
    }
   
    

    
  
  }
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className="stpry-post"
        onClick={handleOpen}
      >
        Post Story
      </Button>

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
          <div className="makeStyles-paper-4">
            <Form onSubmit={handleSubmit}>
              <h2 id="story-form-title"> One Last Step !</h2>

              <progress className="progress" value={progress} max="100" />

              <div className="name-div">
                <Form.Group controlId="formBasicName">
                  <Form.Label className="email-label">Name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="enter name"
                    className="name-text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
              </div>
              <div className="pos-div">
                <Form.Group controlId="formBasicName">
                  <Form.Label className="pos-label">Designation</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="enter designation"
                    className="pos-text"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                  />
                </Form.Group>
              </div>

              <div className="email-div">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="email-label">e-mail</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="enter email"
                    className="email-text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <br></br>
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
              </div>
              <div className="cat-select">
                {" "}
                {/*<CatSelect /> */}
                <select
                  value={category}
                  onChange={(e) => setCatogory(e.target.value)}
                >
                  <option value="0">Choose your option</option>
                  <option value="engineering">Engineering</option>
                  <option value="government">Government</option>
                  <option value="exams">Exams</option>
                  <option value="medicine">Medicine</option>
                </select>
              </div>
              <div className="submit-btn-story-form">
                <Button variant="primary" type="submit">
                  Submit
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
