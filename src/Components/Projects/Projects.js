import React from "react";
import "./Projects.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Projects = () => {
  const bpImages = [
    {
      original: "Images/bp1.png",
      description: "Landing Page for New Users",
      originalAlt: "Landing Page"
    },
    {
      original: "Images/bp2.png",
      description: "Information Page",
      originalAlt: "Information Page"
    },
    {
      original: "Images/bp3.png",
      description: "Registration Page",
      originalAlt: "Registration Page"
    },
    {
      original: "Images/bp4.png",
      description: "Landing Page for Returning Users",
      originalAlt: "Landing Page for returning users"
    },
    {
      original: "Images/bp5.png",
      description: "Letter Writing Page",
      originalAlt: "Letter Writing Page"
    },
    {
      original: "Images/bp6.png",
      description: "First Letter Description Page",
      originalAlt: "First Letter Description Page"
    },
    {
      original: "Images/bp7.png",
      description: "User Dashboard",
      originalAlt: "User Dashboard"
    },
    {
      original: "Images/bp8.png",
      description: "Conversation Page",
      originalAlt: "Conversation Page"
    },
    {
      original: "Images/bp9.png",
      description: "Conversation Details Page",
      originalAlt: "Conversation Details Page"
    },
    {
      original: "Images/bp10.png",
      description: "Letter Page",
      originalAlt: "Letter Page"
    },
    {
      original: "Images/bp11.png",
      description: "Received Letter Page",
      originalAlt: "Received Letter Page"
    },
    {
      original: "Images/bp12.png",
      description: "Conversation History Page",
      originalAlt: "Conversation History Page"
    }
  ];

  const mlImages = [
    {
      original: "Images/ml1.png",
      description: "Landing Page",
      originalAlt: "Landing Page"
    },
    {
      original: "Images/ml2.png",
      description: "Registration Page",
      originalAlt: "Registration Page"
    },
    {
      original: "Images/ml3.png",
      description: "Login Page",
      originalAlt: "Login Page"
    },
    {
      original: "Images/ml4.png",
      description: "User Dashboard",
      originalAlt: "User Dashboard"
    },
    {
      original: "Images/ml5.png",
      description: "Employee Profile Page",
      originalAlt: "Employee Profile Page"
    },
    {
      original: "Images/ml6.png",
      description: "Create Project Page",
      originalAlt: "Create Project Page"
    },
    {
      original: "Images/ml7.png",
      description: "Project Page",
      originalAlt: "Project Page"
    },
    {
      original: "Images/ml8.png",
      description: "Add Job Form",
      originalAlt: "Add Job Form"
    },
    {
      original: "Images/ml9.png",
      description: "Edit Project Form",
      originalAlt: "Edit Project Form"
    },
    {
      original: "Images/ml10.png",
      description: "Edit Job Form",
      originalAlt: "Edit Job Form"
    },
    {
      original: "Images/ml11.png",
      description: "Log Hours Form",
      originalAlt: "Log Hours Form"
    },
    {
      original: "Images/ml12.png",
      description: "Catch-All Page for Errors",
      originalAlt: "Catch-All Page for Errors"
    }
  ];

  const petsImages = [
    {
      original: "Images/pet1.png",
      description: "Adoption Page",
      originalAlt: "Adoption Page"
    },
    {
      original: "Images/pet2.png",
      description: "Available Pets Page",
      originalAlt: "Available Pets Page"
    },
    {
      original: "Images/pet3.png",
      description: "Success Stories Page",
      originalAlt: "Success Stories Page"
    }
  ];

  const srImages = [
    {
      original: "Images/sr1.png",
      description: "Registration Page",
      originalAlt: "Registration Page"
    },
    {
      original: "Images/sr2.png",
      description: "Login Page",
      originalAlt: "Login Page"
    },
    {
      original: "Images/sr3.png",
      description: "User Dashboard",
      originalAlt: "User Dashboard"
    },
    {
      original: "Images/sr4.png",
      description: "Translation Page",
      originalAlt: "Translation Page"
    },
    {
      original: "Images/sr5.png",
      description: "Result Page for Correct Answer"
    },
    {
      original: "Images/sr6.png",
      description: "Result Page for Incorrect Answer"
    }
  ];

  return (
    <div className="projects__main_div" id="projects__top">
      <h2 className="projects__title">Projects</h2>
      <ul className="projects__project_list">
        <li className="projects__list_item">
          <h3 className="projects__project_title">briefPal</h3>
          <div className="projects__project_description">
            <p>
              I developed briefPal as an anonymous pen pal app that deviates
              from the typical social media approach of creating an image,
              cultivating followers, and weaving a narrative. Instead, users are
              limited by the number of interactions they can have when they send
              a letter. The recipient is a totally anonymous and random user.
              The interaction between the users is limited to only three
              letters. After the last letter is sent, the conversation between
              the users is over.
            </p>
            <p>
              This app was developed with people who are not as interested in
              maintaining a traditional social network profile but are
              interested in connecting with people.
            </p>
            <p>
              Beyond the concept of briefPal, I created this app as an exercise
              in bringing an idea to life and connecting a React App with a
              PostgreSQL database.
            </p>
          </div>
          <div className="projects__project_stack">
            <img
              src="https://img.shields.io/badge/JavaScript-yellow"
              alt="javascript shield"
            />
            <img src="https://img.shields.io/badge/CSS-blue" alt="css shield" />
            <img
              src="https://img.shields.io/badge/HTML-red"
              alt="html shield"
            />
            <img
              src="https://img.shields.io/badge/React-lightblue"
              alt="react shield"
            />
            <img
              src="https://img.shields.io/badge/PostgreSQL-purple"
              alt="postgres shield"
            />
            <img
              src="https://img.shields.io/badge/Node.js-lightgreen"
              alt="node shield"
            />
          </div>
          <div className="projects__project_screenshots">
            <ImageGallery items={bpImages} showThumbnails={false} />
          </div>
          <div className="projects__project_links">
            <a href="https://github.com/rbannal86/briefpal" target="blank">
              Client GitHub Repo
            </a>
            <a href="https://github.com/rbannal86/briefpal-api" target="blank">
              Server GitHub Repo
            </a>
            <a href="https://briefpal.now.sh/" target="blank">
              Live App
            </a>
          </div>
        </li>
        <li className="projects__list_item">
          <h3 className="projects__project_title">manageLazily</h3>
          <div className="projects__project_description">
            <p>
              A project management application built with small businesses in
              mind. Users can create, update, assign, track, and analyze their
              businesses projects securely on the cloud from any location with
              access to the web. ManageLazily enables company owners, project
              managers, and employees to have a one-stop project management hub
              where they can create projects, track project completion and due
              dates, add tasks to projects, log hours worked on project tasks,
              and more. Built with simplicity and usability in mind,
              ManageLazily is a great alternative to more complex (and
              expensive) project management software.
            </p>
            <p>
              This app was developed in a group of four other new developers. As
              our first group project, manageLazily was an exercise in putting
              to use all we had learned about creating web apps and learning
              what it's like to work as part of a team. We also had the
              opportunity to learn how to work with Firebase as our database.
            </p>
          </div>
          <div className="projects__project_stack">
            <img
              src="https://img.shields.io/badge/JavaScript-yellow"
              alt="javascript shield"
            />
            <img src="https://img.shields.io/badge/CSS-blue" alt="css shield" />
            <img
              src="https://img.shields.io/badge/HTML-red"
              alt="html shield"
            />
            <img
              src="https://img.shields.io/badge/React-lightblue"
              alt="react shield"
            />
            <img
              src="https://img.shields.io/badge/Firebase-orange"
              alt="firebase shield"
            />
          </div>
          <div className="projects__project_screenshots">
            <ImageGallery items={mlImages} showThumbnails={false} />
          </div>
          <div className="projects__project_links">
            <a
              href="https://github.com/balayaydemir/Capstone-Group3-Client"
              target="blank"
            >
              GitHub Repo
            </a>
            <a href="https://managelazily.com/demo" target="blank">
              Live App
            </a>
          </div>
        </li>
        <li className="projects__list_item">
          <h3 className="projects__project_title">Petful</h3>
          <div className="projects__project_description">
            <p>
              The Petful app is a first-in, first-out adoption site designed to
              shake up the pet adoption process. Users are promoted to join a
              queue for adoption. Once they move to the front of the line, they
              are then given the choice of adopting a cat, a dog, both, or none.
              If they choose to adopt neither, they are moved to the back of the
              line. This app is aimed at people who don't like the typical
              process of going to an animal shelter and want a little bit of
              chance added to the adoption experience.
            </p>
            <p>
              This app was an exercise in building off of an existing codebase,
              implementing all of the processes for the queue system, and
              tailoring the features to a very specific set of user stories.
              Beyond these challenges, the idea for the project was to implement
              all of the functionality and styling in a single day.
            </p>
          </div>
          <div className="projects__project_stack">
            <img
              src="https://img.shields.io/badge/JavaScript-yellow"
              alt="javascript shield"
            />
            <img src="https://img.shields.io/badge/CSS-blue" alt="css shield" />
            <img
              src="https://img.shields.io/badge/HTML-red"
              alt="html shield"
            />
            <img
              src="https://img.shields.io/badge/React-lightblue"
              alt="react shield"
            />
            <img
              src="https://img.shields.io/badge/PostgreSQL-purple"
              alt="postgres shield"
            />
            <img
              src="https://img.shields.io/badge/Node.js-lightgreen"
              alt="node shield"
            />
          </div>
          <div className="projects__project_screenshots">
            <ImageGallery items={petsImages} showThumbnails={false} />
          </div>
          <div className="projects__project_links">
            <a
              href="https://github.com/thinkful-ei-heron/petful_client_alex_shannon"
              target="blank"
            >
              Client GitHub Repo
            </a>
            <a
              href="https://github.com/thinkful-ei-heron/petful_server_alex_shannon"
              target="blank"
            >
              Server GitHub Repo
            </a>
            <a href="https://petful-client.rbannal.now.sh/" target="blank">
              Live App
            </a>
          </div>
        </li>
        <li className="projects__list_item">
          <h3 className="projects__project_title">Spaced Repetition</h3>
          <div className="projects__project_description">
            <p>
              The Spaced Repetition App is a language learning tool designed
              around the concept of using flashcards and an algorithm that helps
              improve the rate at which a person learns. The app is for people
              who want to learn language at their own pace on any available
              device.
            </p>
            <p>
              This app was developed as an exercise in building on top of an
              existing code base, design, and using data structure theory in a
              practical setting.
            </p>
          </div>
          <div className="projects__project_stack">
            <img
              src="https://img.shields.io/badge/JavaScript-yellow"
              alt="javascript shield"
            />
            <img src="https://img.shields.io/badge/CSS-blue" alt="css shield" />
            <img
              src="https://img.shields.io/badge/HTML-red"
              alt="html shield"
            />
            <img
              src="https://img.shields.io/badge/React-lightblue"
              alt="react shield"
            />
            <img
              src="https://img.shields.io/badge/PostgreSQL-purple"
              alt="postgres shield"
            />
            <img
              src="https://img.shields.io/badge/Node.js-lightgreen"
              alt="node shield"
            />
          </div>
          <div className="projects__project_screenshots">
            <ImageGallery items={srImages} showThumbnails={false} />
          </div>
          <div className="projects__project_links">
            <a
              href="https://github.com/thinkful-ei-heron/spaced-repetition-client-alex-sean"
              target="blank"
            >
              Client GitHub Repo
            </a>
            <a
              href="https://github.com/thinkful-ei-heron/spaced-repetition-api-alex-sean"
              target="blank"
            >
              Server GitHub Repo
            </a>
            <a
              href="https://spaced-repetition-client.rbannal.now.sh/"
              target="blank"
            >
              Live App
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
