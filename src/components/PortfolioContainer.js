import React, { useState } from "react";
import NavTabs from "./header/NavTabs";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/ContactForm";
//import Footer from "./components/Footer";

function Portfolio() {
  // Using useState, set the default value for currentPage to 'About'
  const [currentPage, handlePageChange] = useState("About");

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case "Resume":
        return <Resume />;
      case "Project":
        return <Project />;
      case "Contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      {/* Pass the state value and the setter as props to NavTabs */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Call the renderPage function passing in the currentPage */}
      <div>{renderPage(currentPage)}</div>
    </div>
  );
}

export default Portfolio;
