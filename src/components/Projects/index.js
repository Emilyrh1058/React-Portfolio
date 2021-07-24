import React from "react";
import Footer from "../Footer";
import Angelfish from "../../assets/images/project-images/angelfish.JPG";
import GlobalCuisine from "../../assets/images/project-images/global-cuisine.JPG";
import PizzaHunt from "../../assets/images/project-images/pizza-hunt.JPG"
import Horiseon from "../../assets/images/project-images/horiseon.JPG"
import BudgetTracker from "../../assets/images/project-images/budget-tracker.JPG"
import ZooKeepr from "../../assets/images/project-images/zookeepr.JPG"
import Tabs from "../../assets/images/project-images/tabs.JPG"

const Projects = () => {
  const projects = [
    {
      name: "Tabs",
      image: Tabs,
      githubLink: "https://github.com/Emilyrh1058/Tabs",
      deploymentLink: "https://emily-tech-blog.herokuapp.com/",
    },
    {
      name: "Angelfish",
      image: Angelfish,
      githubLink: "https://github.com/Emilyrh1058/Group-Project-2---Angelfish",
      deploymentLink: "https://angelfish-group.herokuapp.com/",
    },
    {
      name: "Global Cuisine",
      image: GlobalCuisine,
      githubLink: "https://github.com/Emilyrh1058/Group-Project-1---Global-Cuisine",
      deploymentLink: "https://emilyrh1058.github.io/Group-Project-1---Global-Cuisine/",
    },
    {
      name: "Pizza Hunt",
      image: PizzaHunt,
      githubLink: "https://github.com/Emilyrh1058/Pizza-Hunt",
      deploymentLink: "https://pizza-hunt-es.herokuapp.com/",
    },
    {
      name: "Horiseon",
      image: Horiseon,
      githubLink: "https://github.com/Emilyrh1058/Ch-1---Horiseon",
      deploymentLink: "https://emilyrh1058.github.io/Ch-1---Horiseon/",
    },
    {
      name: "Budget Tracker",
      image: BudgetTracker,
      githubLink: "https://github.com/Emilyrh1058/Budget-Tracker",
      deploymentLink: "https://emily-budget-tracker.herokuapp.com/",
    },
    {
      name: "Zoo Keepr",
      image: ZooKeepr,
      githubLink: "https://github.com/Emilyrh1058/Zookeepr",
      deploymentLink: "https://cryptic-wave-41926.herokuapp.com/",
    },
  ];

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            {projects.map((project) => (
              <div
                className="card-group col col-lg-auto col-md-auto col-lg-auto mt-3 mb-3 mx-auto align-self-center"
                key={project.name}
              >
                <div
                  className="card results-card col-sm-4 py-2 border-secondary"
                  style={{ width: "26rem", height: "25rem" }}
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
                    <ul className="list-group list-group-flush mb-4"></ul>
                    <a
                      href={project.deploymentLink}
                      className="card-link"
                      target="blank"
                    >
                      Deployed
                    </a>{" "}
                    <a
                      href={project.githubLink}
                      className="card-link"
                      target="blank"
                    >
                      
                      GitHub
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
