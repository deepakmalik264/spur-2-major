import React, { Component } from "react";

import { EditorState, convertToRaw } from "draft-js";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

import "./Share.css";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import ShareForm from "./ShareForm";

export default class StoryShare extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty(),
      story:" "
    
    };

  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  }

  render(){
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
            <input className="img-upload" type="file" />
          </div>
        </div>
        <div className="text-editor">
          <SunEditor/>
        </div>

        <div className="story-post">
          <ShareForm
           
            story ="story"

          />
        </div>
      </div>
    );
  }
}
