import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Nav(props) {
  const {
    projects = [],
    setCurrentproject,
    contactSelected,
    currentproject,
    setContactSelected,
  } = props;


  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span></span> Emily Salinas
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              Portfolio
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              Resume
            </a>
          </li>
          {projects.map((project) => (
            <li
              className={`mx-1 ${
                currentproject.name === project.name && !contactSelected && 'navActive'
                }`}
              key={project.name}
            >
              <span
                onClick={() => {
                  setCurrentproject(project);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(project.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;