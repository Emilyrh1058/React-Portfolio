import React from "react";
import Footer from "../Footer";

import Angelfish from "../../assets/images/angelfish.JPG";

const Projects = () => {
  const projects = [
    {
      name: "Angelfish",
      image: Angelfish,
      description: "",
      githubLink: "",
      deploymentLink: "",
    },
    {
      name: "",
      image: "",
      description: "",
      githubLink: "",
      deploymentLink: "",
    },
    {
      name: "",
      image: "",
      description: "",
      githubLink: "",
      deploymentLink: "",
    },
    {
      name: "",
      image: "",
      description: "",
      githubLink: "",
      deploymentLink: "",
    },
    {
      name: "",
      image: "",
      description: "",
      githubLink: "",
      deploymentLink: "",
    },
    {
      name: "",
      image: "",
      description: "",
      githubLink: "",
      deploymentLink: "",
    },
  ];

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            {projects.map((project) => (
              <div
                className="card-group col col-sm-12 col-md-6 col-lg-6 mt-3 mb-3 mx-auto align-self-center"
                key={project.name}
              >
                <div
                  className="card results-card col-sm-4 py-2 border-secondary"
                  style={{ width: "26rem", height: "70rem" }}
                >
                  <a
                    href={project.deploymentLink}
                    className="card-link"
                    target="blank"
                  >
                    <img
                      src={project.image}
                      alt="screenshot of application"
                      className="img-thumbnail card-img-top"
                    />
                  </a>
                  <div className="card-body">
                    <h2 className="card-title mb-4">{project.name}</h2>
                    <p className="card-text fw-light">{project.description}</p>
                    <ul className="list-group list-group-flush mb-4">
                      <li className="list-group-item fs-6 borderless border-0 p-1 pt-3">
                        Technologies used:
                      </li>
                    </ul>
                    <a
                      href={project.deploymentLink}
                      className="card-link"
                      target="blank"
                    >
                      deployed
                    </a>{" "}
                    <a
                      href={project.githubLink}
                      className="card-link"
                      target="blank"
                    >
                      github
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projects;
