import React, { Component } from "react";

import { EditorState, convertToRaw } from "draft-js";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

import "./Share.css";

import "suneditor/dist/css/suneditor.min.css";
import ShareForm from "./ShareForm";

export default class StoryShare extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty(),
      story: " ",
      image:null ,
    };
  }

  setStory = (e) => {
    this.setState({
      story: e.target.value,
    });
  };

  
  setImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: img,
      });
    }
  };
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };
  
  ImageAlert = () => {
    alert("please add image");
  }
  render() {
    const { editorState } = this.state;
    const { story } = this.state;

    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    return (
      <div className="share">
        <div className="post-img">
          <img
       
            className="share-img"
            alt="update"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLlQ9DL2jP_heI_mtZXdw8cxNdGunsejk7FQ&usqp=CAU"
          />
          <div className="img-upload-button">
            <input
              className="img-upload"
              type="file"
              onChange={this.setImage}
            
            />
          </div>
        </div>
        <div className="text-editor">
          <textarea
            className="text-area"
            placeholder="Welcome to SPUR, Share your success story here"
            cols="50"
            rows="25"
          ></textarea>
        </div>

        <div className="story-post">
          
          {<ShareForm story={story} image={this.state.image} />}
        </div>  
      </div>
    );
  }
}
