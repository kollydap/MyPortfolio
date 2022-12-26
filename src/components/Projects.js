import React from "react";
import { PROJECTS } from "../data/projects";
import "../styles/Projects.css";

const Project = (props) => {
  const { title, image, description, link, github } = props.Project;
  return (
    // <div className='grow' style={{boxShadow: "0px 0px 1.8rem 0px rgb(0 0 0 / 10%)",maxWidth: "350px",margin: "10px 15px", padding:"10px"}} >
    <div className="grow">
      <strong
        style={{ fontSize: "18px", display: "block", paddingBottom: "25px" }}
      >
        {title}
      </strong>
      <img src={image} alt=" " />
      <p style={{ letterSpacing: "0.5px" }} className="description">
        {description}
      </p>
      <br />
      <a style={{ wordWrap: "break-word" }} href={link}>
        {link}
      </a>
      <a style={{ wordWrap: "break-word" }} href={github}>
        {github}
      </a>
    </div>
  );
};

function Projects() {
  return (
    <div style={{ textAlign: "center" }}>
      <strong
        style={{ fontSize: "24px", display: "block", paddingBottom: "5px" }}
      >
        Projects
      </strong>
      <div className="project">
        {PROJECTS.map((PROJECT) => {
          return <Project key={PROJECT.id} Project={PROJECT} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
