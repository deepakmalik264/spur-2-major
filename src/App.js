import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import firebase from "firebase/app";
import "firebase/firestore";
import CardCollection from "./components/Card/CardCollection";
import Sidebar from "./components/Drawer/Sidebar";
import "./App.css";
import StoryShare from "./components/Share/Share.js";
import ShareHeader from "./components/Share/ShareHeader";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import CardCollectionEng from "./components/Card/CardCollectionEng";
import CardCollectionExam from "./components/Card/CardCollectionExam";
import CardCollectionMed from "./components/Card/CardCollectionMed";
import CardCollectionGov from "./components/Card/CardCollectionGov";
import About from "./components/Drawer/About"
import UnderCon from "./components/Dummy/UnderCon";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topStories: [],
      topStoriesGovt: [],
      topStoriesEng: [],
      topStoriesExam: [],
      topStoriesMed:[],

      
      storiesEngCse: [],
      storiesEngEce: [],

    
      storiesStateGovt: [],
      storiesCentralGovt: [],

      storiesMed: [],
      storiesAyur: [],
      storiesMedProfession: [],

      storiesExamUpsc: [],
      storiesExamNEET: [],
      storiesExamJEE: [],
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
    firebase
      .firestore()
      .collection("storiesEng")
      .onSnapshot((snapshot) => {
        const storiesEng = snapshot.docs.map((story) => {
          const data = story.data();
          data["id"] = story.id;
          return data;
        });

        this.setState({
          storiesEng: storiesEng,
        });
      });
    firebase
      .firestore()
      .collection("storiesEng")
      .onSnapshot((snapshot) => {
        const storiesEngCse = snapshot.docs.map((story) => {
          const data = story.data();
          data["id"] = story.id;
          return data;
        });

        this.setState({
          storiesEngCse: storiesEngCse,
        });
      });
    firebase
      .firestore()
      .collection("storiesEngEce")
      .onSnapshot((snapshot) => {
        const storiesEngEce = snapshot.docs.map((story) => {
          const data = story.data();
          data["id"] = story.id;
          return data;
        });

        this.setState({
          storiesEngEce: storiesEngEce,
        });
      });
    firebase
      .firestore()
      .collection("storiesGovt")
      .onSnapshot((snapshot) => {
        const storiesGovt = snapshot.docs.map((story) => {
          const data = story.data();
          data["id"] = story.id;
          return data;
        });

        this.setState({
          storiesGovt: storiesGovt,
        });
      });
    firebase
      .firestore()
      .collection("storiesStateGovt")
      .onSnapshot((snapshot) => {
        const storiesStateGovt = snapshot.docs.map((story) => {
          const data = story.data();
          data["id"] = story.id;
          return data;
        });

        this.setState({
          storiesStateGovt: storiesStateGovt,
        });
      });
    firebase
      .firestore()
      .collection("storiesCentralGovt")
      .onSnapshot((snapshot) => {
        const storiesCentralGovt = snapshot.docs.map((story) => {
          const data = story.data();
          data["id"] = story.id;
          return data;
        });

        this.setState({
          storiesCentralGovt: storiesCentralGovt,
        });
      });
    firebase
      .firestore()
      .collection("storiesMed")
      .onSnapshot((snapshot) => {
        const storiesMed = snapshot.docs.map((story) => {
          const data = story.data();
          data["id"] = story.id;
          return data;
        });

        this.setState({
          storiesMed: storiesMed,
        });
      });
    firebase
      .firestore()
      .collection("storiesAyur")
      .onSnapshot((snapshot) => {
        const storiesAyur = snapshot.docs.map((story) => {
          const data = story.data();
          data["id"] = story.id;
          return data;
        });

        this.setState({
          storiesAyur: storiesAyur,
        });
      });
    firebase
      .firestore()
      .collection("storiesAyur")
      .onSnapshot((snapshot) => {
        const storiesAyur = snapshot.docs.map((story) => {
          const data = story.data();
          data["id"] = story.id;
          return data;
        });

        this.setState({
          storiesAyur: storiesAyur,
        });
      });
    firebase
      .firestore()
      .collection("storiesAyur")
      .onSnapshot((snapshot) => {
        const storiesAyur = snapshot.docs.map((story) => {
          const data = story.data();
          data["id"] = story.id;
          return data;
        });

        this.setState({
          storiesAyur: storiesAyur,
        });
      });
    firebase
      .firestore()
      .collection("storiesMedProf")
      .onSnapshot((snapshot) => {
        const storiesMedProf = snapshot.docs.map((story) => {
          const data = story.data();
          data["id"] = story.id;
          return data;
        });

        this.setState({
          storiesMedProf: storiesMedProf,
        });
      });
    firebase
      .firestore()
      .collection("storiesExamUpsc")
      .onSnapshot((snapshot) => {
        const storiesExamUpsc = snapshot.docs.map((story) => {
          const data = story.data();
          data["id"] = story.id;
          return data;
        });

        this.setState({
          storiesExamUpsc: storiesExamUpsc,
        });
      });
    firebase
      .firestore()
      .collection("storiesExamCat")
      .onSnapshot((snapshot) => {
        const storiesExamCat = snapshot.docs.map((story) => {
          const data = story.data();
          data["id"] = story.id;
          return data;
        });

        this.setState({
          storiesExamCat: storiesExamCat,
        });
      });
    firebase
      .firestore()
      .collection("storiesExamCompititive")
      .onSnapshot((snapshot) => {
        const storiesExamCompititive = snapshot.docs.map((story) => {
          const data = story.data();
          data["id"] = story.id;
          return data;
        });

        this.setState({
          storiesExamCompititive: storiesExamCompititive,
        });
      });
  }

  render() {
    const { topStories } = this.state;
    const { topStoriesGovt } = this.state;
    const { topStoriesExam } = this.state;
    const { topStoriesEng } = this.state;
    const { topStoriesMed } = this.state;


    
    const { storiesEngCse } = this.state;
    const { storiesEngEce } = this.state;

    const { storiesStateGovt } = this.state;
    const { storiesCentralGovt } = this.state;

    const { storiesAyur } = this.state;
    const { storiesMedProfession } = this.state;

    const { storiesExamUpsc } = this.state;
    const { storiesExamNEET } = this.state;
    const { storiesExamJEE } = this.state;


    


   

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/eng">
              <Sidebar />
              <CardCollectionEng
                topStoriesEng={topStoriesEng}
                storiesEngCse={storiesEngCse}
                storiesEngEce={storiesEngEce}
              />
              <Footer />
            </Route>

            <Route path="/exam">
              <Sidebar />
              <CardCollectionExam
                topStoriesExam={topStoriesExam}
                storiesExamNEET={storiesExamNEET}
                storiesExamUpsc={storiesExamUpsc}
                storiesExamJEE={storiesExamJEE}
              />
              <Footer />
            </Route>

            <Route path="/med">
              <Sidebar />
              <CardCollectionMed
                topStoriesMed={topStoriesMed}
                storiesAyur={storiesAyur}
                storiesMedProfession={storiesMedProfession}
              />
              <Footer />
            </Route>

            <Route path="/gov">
              <Sidebar />
              <CardCollectionGov
                topStoriesGovt={topStoriesGovt}
                storiesStateGovt={storiesStateGovt}
                storiesCentralGovt={storiesCentralGovt}
              />
              <Footer />
            </Route>
            <Route path="/about">
              <Sidebar />
              <About />
              <Footer />
            </Route>
            <Route path="/dummy">
              <UnderCon />
            </Route>

            <Route path="/">
              <Sidebar />
              <Header />
              <CardCollection
                topStories={topStories}
                topStoriesEng={topStoriesEng}
                topStoriesExam={topStoriesExam}
                topStoriesGovt={topStoriesGovt}
                topStoriesMed={topStoriesMed}
              />
              <ShareHeader />
              <StoryShare />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
