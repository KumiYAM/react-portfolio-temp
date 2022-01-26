import React from "react";
import "../../index.css";
// const Resume = () => (
//   <section>
//     <h1 class="FullName">Kumiko Yamagata</h1>
//     <div>
//       <h2>Resume</h2>

//       <h5>Objective:  </h5>
//       <p>
//         Inibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris,
//         ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Namhiqw.
//       </p>
//       <h5>Qualifications:   </h5>
//       <p>
//         Quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
//         imperdiet. Praesent euismod mi justo.
//       </p>
//       <h5>Education:   </h5>
//       <p>
//         Faucibus scelerisque risus cursus in. Sed rhoncus mollis
//         diam, sit amet facilisis lectus blandit at. Yincidunt fermentum. Suspendisse aliquet orci porta.
//       </p>
//     </div>
//   </section>
// );

function Resume() {
  return (
    <section ClassName="my-5">
      <h1 class="FullName">Kumiko Yamagata</h1>
      <div className="my-2">
        <p>
          Download my
          <a className="download" href="XXhttps://www.linkedin.com/">
            resume
          </a>
        </p>
        <section className="fe-container">
          <h3 className="frontend">Front-end Proficiencies</h3>
          <ul className="fe-skilles">
            <li>HTML</li>
            <li>CSS</li>
            <li>javaScript</li>
            <li>jQuery</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </section>
        <section className="be-container">
          <h3 className="backend">Back-end Proficiencies</h3>
          <ul className="be-skills">
            <li>Node</li>
            <li>MangoDB, Mongoose</li>
            <li>MySQL, Sequelize</li>
            <li>REST</li>
            <li>APIs</li>
            <li>GraphQL</li>
            <li>Express</li>
            <li></li>
          </ul>
        </section>
      </div>
    </section>
  );
}

export default Resume;
