[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url-gabriel]
[![GNU License][license-shield]][license-url]


<br />
<p align="center">
  <a href="https://groovetube.herokuapp.com/">
    <img src="favicon.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Groovetube</h3>

  <p align="center">
     A social platform for sharing live music video performances.
    <br />
    <a href="https://github.com/gch910/groovetube"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/gch910/groovetube">View Demo</a>
    ·
    <a href="https://github.com/gch910/groovetube/issues">Report a Bug</a>
    ·
    <a href="https://github.com/gch910/groovetube/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<a href="https://groovetube.herokuapp.com/">
  <img src="https://i.gyazo.com/85f7d04f3fa411910bc9b325f9c3f992.jpg" alt="Logo" >
</a>

## Summary

Groovetube is a video sharing web application inspired by YouTube, built using Python / Flask and utilizing React.js/Redux architecture. Groovetube allows users to:

- Create an account / profile
- Log in / Log out
- Upload / share live music videos
- Watch videos
- View user profiles
- Follow / unfollow other users
- Search for videos
- View video pages and comment on videos
- Add a video to a user's collection


### Built With

- Javascript
- React
- Redux
- Python
- Flask
- SQLAlchemy
- PostgreSQL
- CSS

## Overall Structure

#### Back end
The app was built using Python / Flask on the back end with a postgreSQL database. Back end structure is RESTful and all the data requests use AJAX and are fulfilled with a JSON API. Associations are used to prefetch data in order to minimize SQL queries to the database.

#### Front end
The front end is built completely in React / JavaScript and utilizes Redux for global state management. React's virtual DOM allows for very fast rerendering without requiring new pages to be sent from the server.


<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Installations

- npm

  ```sh
  npm install npm@latest -g
  ```

- pipenv

  ```sh
  pipenv install
  ```

### Installation

1. Clone the repository

   ```sh
   git clone https://github.com/gch910/groovetube.git

   ```

2. Install Pipenv dependencies

   ```sh
   pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
   ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. Install NPM packages - cd into react-app

   ```sh
   npm install
   ```

7. While still in the react-app folder
   ```sh
   npm start
   ```

## Primary Components


#### User Authorization
The login page offers a simple but elegent display for entering user credentials. User authentication is handled in Flask using the flask_login package. The werkzeug.security package is used for password hashing. Passwords are not saved to the database, only password hashes. When users log in, the password they provide is rehashed and checked against the original encrypted password hash to verify credentials.

![signin]


#### Home Page

The Groovetube homepage features a responsive grid layout of the user's video collection if they are logged in, or a list of  videos to browse if they are not.  Each video thumbnail displays a static image which on hover will display a GIF of the video performance.  The video collection updates as a user adds more to their collection and videos can be removed from the collection via the user's profile page at any time.  The side navbar featured is present on all pages for easy navigation.

![homepage]

#### Video Page

On navigation to the video page, if the specified video is not already present in the redux store, a fetch request will be made to the backend which will respond with queried results of relevent video information.  Am YouTube iframe embed will be rendered for easy interaction with the player.  Using YouTube to host these videos cuts down on database storage and allows users to upload as many videos as they like.  A logged in user can interact with the video page by adding/un-adding the video to their collection, adding/deleting comments, following/unfollowing the posting user, and navigating the video player, with page updates happening instantly.  All of the updated video data is saved to the postgreSQL database where it can be retreived later on.

![videopage]

#### User Profile

At the top of the profile page, the user's profile image and username is displayed, with an option to upload/change the profile picture if they are logged in.  By default a grid layout of the profile user's collected videos is rendered on initial navigation.  On hover, if the logged in user matches the profile user, a button to remove an individual video is displayed, which displays a confirmation of removal once clicked.  A navbar is also presented with options to view the user's uploads, followers and the users they are following.  This navbar utilizes React state to only display information for the currently clicked link. Buttons to delete an uploaded video and unfollow users are only available if user auth has confirmed that this user is the owner of the profile.  Additionally, a follow/unfollow button is available on the profile page if it does not belong to the logged in user.

![profilepage]

#### Search Results
When a user enters something into the searchbar, a fetch request is sent to the backend where the data intensive task of querying for matching results is handled.  The backend responds with results for matching songs and artists, which is then rendered on the search results page with the appropriate images/navigation links. 

![search_results]

#### Collection
The music player is built with wavesurfer.js, the package handles loading music and controls related to playing the music. The music is loaded through redux state and the playing/pause buttons are also tied to the redux state so play buttons throughout the website can also manage currently played songs and play/pause status. 

![playbar]

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/gch910/groovetube/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the GNU License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Gabriel - gharris910@icloud.com 

Project Link: [https://groovetube.herokuapp.com/](https://groovetube.herokuapp.com/)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [App Academy](https://www.appacademy.io/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[signin]: ./login-page-groovetube.PNG
[homepage]: ./readme_images/home-page-groovetube.PNG
[videopage]: ./readme_images/video-page-groovetube.PNG
[profilepage]: ./readme_images/profile-page-groovetube.PNG
[search_results]: ./readme_images/search_results.PNG
[playbar]: ./readme_images/cloudify-playbar.PNG

[contributors-shield]: https://img.shields.io/github/contributors/gch910/groovetube.svg?style=for-the-badge
[contributors-url]: https://github.com/gch910/groovetube/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/gch910/groovetube.svg?style=for-the-badge
[forks-url]: https://github.com/gch910/groovetube/network/members
[stars-shield]: https://img.shields.io/github/stars/gch910/groovetube.svg?style=for-the-badge
[stars-url]: https://github.com/gch910/groovetube/stargazers
[issues-shield]: https://img.shields.io/github/issues/gch910/groovetube.svg?style=for-the-badge
[issues-url]: https://github.com/gch910/groovetube/issues
[license-shield]: https://img.shields.io/badge/License-GPL%20v3-blue.svg
[license-url]: https://github.com/gch910/groovetube/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url-gabriel]: https://www.linkedin.com/in/gabriel-harris-249231208/
[product-screenshot]: images/screenshot.png

