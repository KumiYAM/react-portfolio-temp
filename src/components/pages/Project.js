import React from "react";
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
const Project = () => (
  <section>
    <div>
      <h1 class="FullName">Kumiko Yamagata</h1>
    </div>
    <div>
      <h2>Awesome Organic</h2>
      <img id="my-1st" alt="API" />
      <br/>API<br/>Git
    </div>
  </section>
);

export default Project;