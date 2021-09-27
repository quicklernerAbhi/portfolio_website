import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AboutMe from "./components/AboutMe";
import AddProject from "./components/AddProject";
import AllProjects from "./components/AllProjects";
import AllBlogs from "./components/AllBlogs";
import Blog from "./components/BlogSection";
import BlogsPage from "./components/BlogsPage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Project from "./components/Project";
import ProjectSection from "./components/ProjectSection";
import RecommendationSection from "./components/RecommendationSection";
import ScrollToTop from "./components/ScrollToTop";
import SkillSection from "./components/SkillSection";
import Title from "./components/Title";
import WriteRecommendation from "./components/WriteRecommendation";
import { Provider } from "./context";
function App() {
  return (
    <Provider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Title />
            <AboutMe />
            <RecommendationSection />
            <SkillSection />
            <ProjectSection />
            <Blog />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/write-recommendation">
            <WriteRecommendation />
          </Route>
          <Route exact path="/project/add">
            <AddProject />
          </Route>
          <Route exact path="/allprojects">
            <AllProjects />
          </Route>
          <Route exact path="/allblogs">
            <AllBlogs />
          </Route>
          <Route exact path="/project/:id" component={Project} />
          <Route exact path="/blog/:id" component={BlogsPage} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );

  // ----with pure javascript---
  // return React.createElement(
  //   "div", //element want to create
  //   { className: "App" }, //its attributes
  //   React.createElement("h1", null, "Portfolio-website")  //its child or any text want to written
  // );
}

// functional component
// function App() {
//   return (
//     <div className="App">
//       <h1>Portfolio Website</h1>
//     </div>
//   );

// class based component

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Portfolio Website</h1>
//       </div>
//     );
//   }
// }

export default App;
