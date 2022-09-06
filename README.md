# QA Cinemas
## Developed by Team 1

### Introduction
QA Cinemas is a full-stack application which utilises the MERN technology stack. It was developed Faizaan Basit, Frederick Clay, Daniel Cornell, Kiran Evans and Mohamed Issa. It was developed as the Final Project for **Team 1**'s training as employees of **QA, ltd**.

### Purpose
QA Cinemas is an example of a typical web application for a cinema. It includes listings of current & upcoming movies, booking & payment functionality, information about the cinema, and a searchbar to find movies that the cinema shows.

### About the Development
The application was developed in two four-day sprints using the Scrum methodology. Jira was used to manage the tasks and track the project's development progress. [Click here to view the Jira project](https://kiran-evans.atlassian.net/jira/software/projects/QC/boards/7/roadmap).

### About the Source Code
The application's repository contains two directories: the `/api/` and the `/client/`. They contain Express and React apps, respectively. They are able to run independent of each other, but with limited functionality. Both the API and the Client must be running for the full application to work.

All packages used in the development of the app were managed by **npm**. Packages for the API and Client must be installed separately in accordance with their respective `package.json` files.

Comments have been left in the source code where necessary.
#### API
The API is a typical CRUD API, developed with Express, which connects to a cloud-based MongoDB database. It includes full CRUD functionality for **movies**, **discussion posts**, and **bookings**.
In addition to this, the API includes functionality to submit a message to the site owner via a contact form.

The API requires a `config.env` file with the relevant environment variables setup correctly. This has been omitted from the GitHub repository for security. The `config.env` file must be included in the `/config/` directory and must include: `PORT=`, `NODE_ENV=` and `MONGO_URI=`.
#### Client
The Client was developed with React. It is a typical example of a commercial cinema website. It includes full navigation and search functionality, relevant information, and sensible and clear styling.

- Users can view all the movies available in the database, which are displayed as a gallery. The movies are automatically separated into **Now Showing** and **New Releases** tabs, based on the value of `releaseDate` of the movie in the database.
- Users can book a viewing of a movie on the **Bookings** page.
- Users can pay for pre-booked tickets.
- Users can submit messages to the site owner via the **Contact** form.
- Users can comment and join in discussions using the **Discussion Board**.