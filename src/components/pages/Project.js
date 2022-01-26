import React from "react";
//import React, { useState } from "react";
//import Project from "../Project";
import "../../index.css";
/*
function Project(props) {

return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Title:</strong> {props.name}
          </li>
          <li>
            <strong>Tech:</strong> {props.tech}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeProject(props.id)} className="remove">
        x
      </span>
    </div>
  );
}
*/
// const Project = () => (
//   <section>
//     <div>
//       <h1 class="FullName">Kumiko Yamagata</h1>
//     </div>
//     {/* <div>
//       <h2>Awesome Organic</h2>
//       <img id="my-1st" alt="API" />
//       <br/>API<br/>Git
//     </div> */}
//   </section>
// );

// Replace links with deployed project and Github repos
// const projects = [
//   {
//     name: "Awsome Organic",
//     description: "MERN Stack",
//     link: "https://awsomeorganics.herokuapp.com",
//     repo: "https://github.com/KumiYAM/awsome-organics-gp2.git"
//   },
//   {
//     name: "GTX-Mobile-Detailing",
//     description: "MERN Stack",
//     link: "https://gtxdetailing.herokuapp.com/",
//     repo: "https://github.com/KumiYAM/GTX-Mobile-Detailing.git"
//   },
//   {
//     name: "Love My Book",
//     description: "MERN Stack",
//     link: "https://love-my-book.herokuapp.com/",
//     repo: "https://github.com/KumiYAM/book-search-engine-go1.git"
//   },
//   {
//     name: "Horiseon",
//     description: "html css",
//     link: "https://kumiyam.github.io/Horiseon-1/",
//     repo: "https://github.com/KumiYAM/Horiseon.git"
//   },
//   {
//     name: "TeamProG10",
//     description: "html css",
//     link: "",
//     repo: "https://github.com/KumiYAM/TeamProG10.git"
//   },
//   {
//     name: "Profile Template",
//     description: "React",
//     link: "https://kumiyam.github.io/react_portfolio1/",
//     repo: "https://github.com/KumiYAM/book-search-engine-go1.git/"
//   }
// ];

const Projects = () => (
  <section>
    <h1 class="FullName">Kumiko Yamagata</h1>
    <div>
      <h2>Projects</h2>
      <p></p>
    </div>
    <div className="card">
      <div className="img-container-1"></div>
      <div className="content">
        <ul>
          <li>
            <strong>GTX Mobile Detailing</strong>
          </li>
          <li>
            <strong>MERN</strong>
          </li>
          <li>
            <a href="https://github.com/HacAtac/GTX-Mobile-Detailing.git">
              Github Repo
            </a>
          </li>
          <li>
            <a
              href="https://gtxdetailing.herokuapp.com/"
              className="link-my-1st"
            >
              Site Link
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="card">
      <div className="img-container-2"></div>
      <div className="content">
        <ul>
          <li>
            <strong>Love My Book</strong>
          </li>
          <li>
            <strong>MERN</strong>
          </li>
          <li>
            <a href="https://github.com/KumiYAM/book-search-engine-go1.git">
              Github Repo
            </a>
          </li>
          <li>
            <a href="https://love-my-book.herokuapp.com/">Site Link</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
);
// retrn(
//   <div>
//     <div className="flex-row">
//       {projects.map((project, idx) => (
//         <Project project={project} key={"project" + idx} />
//       ))}
//     </div>
//   </div>
// );

//export default Portfolio;
export default Projects;
