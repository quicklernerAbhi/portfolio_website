import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  handler = (action, newObject) => {
    switch (action) {
      case "ADD_PROJECT":
        this.setState({
          projects: [newObject, ...this.state.projects],
        });
        break;
      case "ADD_BLOGS":
        this.setState({
          blogs: [newObject, ...this.state.blogs],
        });
        break;
      case "ADD_RECOMMENDATION":
        this.setState({
          recommendations: [newObject, ...this.state.recommendations],
        });
        break;

      default:
        break;
    }
  };
  state = {
    handler: this.handler,
    projects: [
      {
        id: 1,
        title: "Project 1",
        excerpt: "This is my project about...",
        imgUrl:
          "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=935&q=80",
        body: "body1",
      },
      {
        id: 2,
        title: "Project 2",
        excerpt: "This is my project about...",
        imgUrl:
          "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        body: "body2",
      },
      {
        id: 3,
        title: "Project 3",
        excerpt: "This is my project about...",
        imgUrl:
          "https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80",
        body: "body3",
      },
      {
        id: 4,
        title: "Project 4",
        excerpt: "This is my project about...",
        imgUrl:
          "https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80",
        body: "body4",
      },
    ],
    recommendations: [
      {
        id: 1,
        name: "Random guy 1",
        company: "ABC company",
        designation: "CEO",
        message: "He is a good engineer",
      },
      {
        id: 2,
        name: "Random guy 2",
        company: "ABC company",
        designation: "Director",
        message: "He is a lazy person",
      },
      {
        id: 3,
        name: "Random guy 3",
        company: "ABC company",
        designation: "Manager",
        message: "He is an excellent developer",
      },
      {
        id: 4,
        name: "Random guy 4",
        company: "ABC company",
        designation: "SDE",
        message: "He gets things done so quickly",
      },
    ],
    skills: [
      {
        id: 1,
        name: "HTML5",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/html5.png",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 2,
        name: "CSS3",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/css3.png",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 3,
        name: "Javascript",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/javascript.png",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 4,
        name: "Bootstrap 4",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/bootstrap4.png",
        starsTotal: 3,
        starsActive: 1,
      },
      {
        id: 5,
        name: "React",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/react.png",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 6,
        name: "MySQL",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/mysql.png",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 7,
        name: "Python",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/python.png",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 8,
        name: "Flask",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/flask.png",
        starsTotal: 3,
        starsActive: 2,
      },
    ],
    blogs: [
      {
        id: 0,
        title: "Blog 1",
        excerpt: "This is Blog 1",
        imgUrl:
          "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      },
      {
        id: 1,
        title: "Blog 2",
        excerpt: "This is Blog 2",
        imgUrl:
          "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=393&q=80",
      },
      {
        id: 2,
        title: "Blog 3",
        excerpt: "This is Blog 3",
        imgUrl:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80",
      },
    ],
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
