import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import firebase from "firebase/app";
import "firebase/firestore";
import CardCollection from "./components/Card/CardCollection";
import Sidebar from "./components/Drawer/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import StoryShare from "./components/Share/Share.js";
import ShareHeader from "./components/Share/ShareHeader"


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topStories: [],
      topStoriesGovt: [],
      topStoriesCode: [],
      topStoriesExam: [],
    };
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection("topStories")
      .onSnapshot((snapshot) => {
        const topStories = snapshot.docs.map((story) => {
          const data = story.data();
          data["id"] = story.id;
          return data;
        });

        this.setState({
          topStories: topStories,
        });
      });

    firebase
      .firestore()
      .collection("topStoriesCode")
      .onSnapshot((snapshot) => {
        const topStoriesCode = snapshot.docs.map((story) => {
          const data = story.data();
          data["id"] = story.id;
          return data;
        });
        this.setState({
          topStoriesCode: topStoriesCode,
        });
      });
    firebase
      .firestore()
      .collection("topStoriesGovt")
      .onSnapshot((snapshot) => {
        const topStoriesGovt = snapshot.docs.map((story) => {
          const data = story.data();
          data["id"] = story.id;
          return data;
        });
        this.setState({
          topStoriesGovt: topStoriesGovt,
        });
       
      });
    firebase
      .firestore()
      .collection("topStoriesExam")
      .onSnapshot((snapshot) => {
        const topStoriesExam = snapshot.docs.map((story) => {
          const data = story.data();
          data["id"] = story.id;
          return data;
        });

        this.setState({
          topStoriesExam: topStoriesExam,
        });
      });
  }

  render() {
    const { topStories } = this.state;
    const { topStoriesGovt } = this.state;
    const { topStoriesExam } = this.state;
    const { topStoriesCode } = this.state;

    return (
      <div className="App">
        <Router>
          <Sidebar />
        </Router>
        <Header />
        <CardCollection
          topStories={topStories}
          topStoriesCode={topStoriesCode}
          topStoriesExam={topStoriesExam}
          topStoriesGovt={topStoriesGovt}
        />
        <ShareHeader></ShareHeader>
        <StoryShare></StoryShare>
        <Footer />
      </div>
    );
  }
}
export default App;
