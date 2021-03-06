import React from "react";
import "./Projects.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Projects = () => {
  const dogDaysImages = [
    {
      original: "Images/dd1.png",
      description: "Week Calendar View",
      originalAlt: "Week Calendar View",
    },
    {
      original: "Images/dd2.png",
      description: "Month Calendar View",
      originalAlt: "Month Calendar View",
    },
    {
      original: "Images/dd3.png",
      description: "Year Calendar View",
      originalAlt: "Year Calendar View",
    },
    {
      original: "Images/dd4.png",
      description: "Add Activities Form Type",
      originalAlt: "Add Activities Form Type",
    },
    {
      original: "Images/dd5.png",
      description: "Add Activities Form Quality",
      originalAlt: "Add Activities Form Quality",
    },
    {
      original: "Images/dd6.png",
      description: "Activities Details List",
      originalAlt: "Activities Details List",
    },
    {
      original: "Images/dd7.png",
      description: "Dog Details",
      originalAlt: "Dog Details",
    },
    {
      original: "Images/dd8.png",
      description: "Edit Dog Details",
      originalAlt: "Edit Dog Details",
    },
    {
      original: "Images/dd9.png",
      description: "Delete Dog",
      originalAlt: "Delete Dog",
    },
    {
      original: "Images/dd10.png",
      description: "Add Dog Form",
      originalAlt: "Add Dog Form",
    },
    {
      original: "Images/dd11.png",
      description: "Select Dog List",
      originalAlt: "Select Dog List",
    },
  ];
  const sprackImages = [
    {
      original: "Images/sprackDashboard.png",
      description: "Spice Dashboard",
      originalAlt: "Sprack User Dashboard",
    },
    {
      original: "Images/sprackAddSpice.png",
      description: "Adding Spice Form",
      originalAlt: "Adding Spice",
    },
    {
      original: "Images/sprackFilter.png",
      description: "Filtering Spice Rack",
      originalAlt: "Filtering Spice Rack",
    },
    {
      original: "Images/sprackUpdateLevels.png",
      description: "Changing Spice Levels",
      originalAlt: "Changing Spice Levels",
    },
  ];
  const bpImages = [
    {
      original: "Images/bp1.png",
      description: "Landing Page for New Users",
      originalAlt: "Landing Page",
    },
    {
      original: "Images/bp2.png",
      description: "Information Page",
      originalAlt: "Information Page",
    },
    {
      original: "Images/bp3.png",
      description: "Registration Page",
      originalAlt: "Registration Page",
    },
    {
      original: "Images/bp4.png",
      description: "Landing Page for Returning Users",
      originalAlt: "Landing Page for returning users",
    },
    {
      original: "Images/bp5.png",
      description: "Letter Writing Page",
      originalAlt: "Letter Writing Page",
    },
    {
      original: "Images/bp6.png",
      description: "First Letter Description Page",
      originalAlt: "First Letter Description Page",
    },
    {
      original: "Images/bp7.png",
      description: "User Dashboard",
      originalAlt: "User Dashboard",
    },
    {
      original: "Images/bp8.png",
      description: "Conversation Page",
      originalAlt: "Conversation Page",
    },
    {
      original: "Images/bp9.png",
      description: "Conversation Details Page",
      originalAlt: "Conversation Details Page",
    },
    {
      original: "Images/bp10.png",
      description: "Letter Page",
      originalAlt: "Letter Page",
    },
    {
      original: "Images/bp11.png",
      description: "Received Letter Page",
      originalAlt: "Received Letter Page",
    },
    {
      original: "Images/bp12.png",
      description: "Conversation History Page",
      originalAlt: "Conversation History Page",
    },
  ];
  const mlImages = [
    {
      original: "Images/ml1.png",
      description: "Landing Page",
      originalAlt: "Landing Page",
    },
    {
      original: "Images/ml2.png",
      description: "Registration Page",
      originalAlt: "Registration Page",
    },
    {
      original: "Images/ml3.png",
      description: "Login Page",
      originalAlt: "Login Page",
    },
    {
      original: "Images/ml4.png",
      description: "User Dashboard",
      originalAlt: "User Dashboard",
    },
    {
      original: "Images/ml5.png",
      description: "Employee Profile Page",
      originalAlt: "Employee Profile Page",
    },
    {
      original: "Images/ml6.png",
      description: "Create Project Page",
      originalAlt: "Create Project Page",
    },
    {
      original: "Images/ml7.png",
      description: "Project Page",
      originalAlt: "Project Page",
    },
    {
      original: "Images/ml8.png",
      description: "Add Job Form",
      originalAlt: "Add Job Form",
    },
    {
      original: "Images/ml9.png",
      description: "Edit Project Form",
      originalAlt: "Edit Project Form",
    },
    {
      original: "Images/ml10.png",
      description: "Edit Job Form",
      originalAlt: "Edit Job Form",
    },
    {
      original: "Images/ml11.png",
      description: "Log Hours Form",
      originalAlt: "Log Hours Form",
    },
    {
      original: "Images/ml12.png",
      description: "Catch-All Page for Errors",
      originalAlt: "Catch-All Page for Errors",
    },
  ];
  const tbImages = [
    {
      original: "Images/tb2.png",
      description: "Main Screen",
      originalAlt: "Main Screen",
    },
    {
      original: "Images/tb1.png",
      description: "First Search Results",
      originalAlt: "First Search Results",
    },
    {
      original: "Images/tb3.png",
      description: "Empty Search Results",
      originalAlt: "Empty Search Results",
    },
    {
      original: "Images/tb4.png",
      description: "Search Results for Chaucer",
      originalAlt: "Search Results for Chaucer",
    },
  ];
  const tsImages = [
    {
      original: "Images/toescissorsmain.png",
      description: "Game Board",
      originalAlt: "Game Board",
    },
    {
      original: "Images/toescissorsfirstmove.png",
      description: "The user makes a move",
      originalAlt: "The user makes a move",
    },
    {
      original: "Images/toescissorscomputermove.png",
      description: "The computer makes a move",
      originalAlt: "The computer makes a move",
    },
    {
      original: "Images/toescissorscontestingtile.png",
      description: "Challenging a tile",
      originalAlt: "Challenging a tile",
    },
    {
      original: "Images/toescissorstie.png",
      description: "Tie Showdown!",
      originalAlt: "Tie Showdown!",
    },
    {
      original: "Images/toescissorstieagain.png",
      description: "Tie Showdown Continues!",
      originalAlt: "Tie Showdown Continues!",
    },
    {
      original: "Images/toescissorstiewinner.png",
      description: "A Winner Emerges!",
      originalAlt: "A Winner Emerges!",
    },
    {
      original: "Images/toescissorsgamewinner.png",
      description: "Game Over!",
      originalAlt: "Game Over!",
    },
  ];

  return (
    <div className="projects__main_div" id="projects__top">
      <h2 className="projects__title">Projects</h2>
      <ul className="projects__project_list">
        <li className="projects__list_item">
          <h3 className="projects__project_title">TOE SCISSORS</h3>
          <div className="projects__project_description">
            <p>
              TOE SCISSORS is a blend of Rock Paper Scissors and Tic-Tac-Toe,
              wrapped in a retro 8-bit style. Relatively simple from a front end
              perspective, the meat of this project is in the AI. Featuring
              three different computer difficulties, from completely random, to
              an aggressive approach, the bulk of development was spent writing
              thorough checks in the AI service object. The goal was to create a
              clean interface with a complex system running in the background.
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
          </div>
          <div className="projects__project_screenshots">
            <ImageGallery items={tsImages} showThumbnails={false} />
          </div>
          <div className="projects__project_links">
            <a href="https://github.com/rbannal86/toeScissors" target="blank">
              GitHub Repo
            </a>
            <a href="https://toescissors.vercel.app/" target="blank">
              Live App
            </a>
          </div>
        </li>
        <li className="projects__list_item">
          <h3 className="projects__project_title">dogDays</h3>
          <div className="projects__project_description">
            <p>
              DogDays is a dog "mood" tracking app, inspired by the current
              trend of visually-appealing mood tracking apps. The main function
              of dogDays is to allow a user to rate various activities
              undertaken with their dog and takes the average rating for all
              activities of each day and displays the ratings in a calendar
              view. The different levels of ratings determines the color of the
              day on the calendar, allowing the user to see, via the color
              gradient, any trends for the dog's activities. This app is mainly
              designed with people who are training their dog, or having trouble
              with the dog's behavior. Seeing improvemnt or trends should help
              with morale for the user.
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
            <ImageGallery items={dogDaysImages} showThumbnails={false} />
          </div>
          <div className="projects__project_links">
            <a href="https://github.com/rbannal86/dogDays" target="blank">
              GitHub Repo
            </a>
            <a href="https://dogdays.vercel.app/" target="blank">
              Live App
            </a>
          </div>
        </li>
        <li className="projects__list_item">
          <h3 className="projects__project_title">sprack</h3>
          <div className="projects__project_description">
            <p>
              Sprack is a simple-to-use spice rack app designed with the simple
              upkeep of the user's data in mind. Each spice display is easy to
              use, with the main focus on being able to manipulate the spice
              displays on mobile devices. This app also utilizes icons from
              Material-UI for quickly-identified options and actions, as well as
              ReactTooltip for unobtrusive explanations of the various icons.
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
            <ImageGallery items={sprackImages} showThumbnails={false} />
          </div>
          <div className="projects__project_links">
            <a href="https://github.com/rbannal86/sprack" target="blank">
              GitHub Repo
            </a>
            <a href="https://sprack.vercel.app/" target="blank">
              Live App
            </a>
          </div>
        </li>
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
          <h3 className="projects__project_title">10Books</h3>
          <div className="projects__project_description">
            <p>
              10Books is a simple book search app that utilizes the GoogleBooks
              API and a custom-made Firebase database as a cache. The app will
              return up to ten books that match the search query and present the
              results with all of the relevant and available information.
            </p>
            <p>
              This app was my first attempt at a FERN stack and building a
              cache. The styling was also driven by accessibility standards like
              color contrast and text size.
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
            <img
              src="https://img.shields.io/badge/Node.js-lightgreen"
              alt="node shield"
            />
          </div>
          <div className="projects__project_screenshots">
            <ImageGallery items={tbImages} showThumbnails={false} />
          </div>
          <div className="projects__project_links">
            <a href="https://github.com/rbannal86/10BooksClient" target="blank">
              Client GitHub Repo
            </a>
            <a href="https://github.com/rbannal86/10BooksServer" target="blank">
              Server GitHub Repo
            </a>
            <a href="https://10books.vercel.app/" target="blank">
              Live App
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
