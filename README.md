# Social Network API

A RESTful API built for the backend of a social network, with Node.js, Express, and Mongoose that provides CRUD operations for users, friends, thoughts and reactions. Built to be easily integrated with the front end of a social network website.

<img src="assets\postmanSocialNetworkAPI.PNG" width="640px">

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Walkthrough Video](#walkthrough-video)
- [Routes](#routes)
- [Thoughts](#thoughts)
- [Reactions](#reactions)
- [Contribute](#contribute)
- [Author](#author)
- [License](#license)

## Features

- Add, update, and delete thoughts.
- Add reactions to thoughts.
- Fetch all thoughts or a single thought.
- Modularized routes and controller logic.

## Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/rikilega/thoughts-reactions-api.git
    ```

2. Navigate to the project directory:
    ```bash
    cd thoughts-reactions-api
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the server:
    ```bash
    npm start
    ```

## Usage

Once the server is running, you can use API testing tools like Postman to test out the various routes and operations described in the [Routes](#routes) section.

## Walkthrough Video

For a detailed walkthrough, watch the video [here](https://drive.google.com/file/d/1WFiyIEXBDNy_JNsC5BYZjn-Q2KWdQvYR/view).

## Sample Routes

### Thoughts

1. **Get All Thoughts**
    - Method: `GET`
    - URL: `/api/thoughts/`

2. **Create a New Thought**
    - Method: `POST`
    - URL: `/api/thoughts/`
    - Body:
      ```json
      {
        "thoughtText": "Your thought text here",
        "username": "your_username_here"
      }
      ```

3. **Get a Single Thought by ID**
    - Method: `GET`
    - URL: `/api/thoughts/:id`

4. **Update a Thought by ID**
    - Method: `PUT`
    - URL: `/api/thoughts/:id`
    - Body:
      ```json
      {
        "thoughtText": "Your updated thought text here"
      }
      ```

5. **Delete a Thought by ID**
    - Method: `DELETE`
    - URL: `/api/thoughts/:id`

### Reactions

1. **Add a Reaction to a Thought**
    - Method: `POST`
    - URL: `/api/thoughts/:thoughtId/reactions`
    - Body:
      ```json
      {
        "reactionBody": "Your reaction text here",
        "username": "your_username_here"
      }
      ```

2. **Update a Reaction**
    - Method: `PUT`
    - URL: `/api/thoughts/:thoughtId/reactions/:reactionId`
    - Body:
      ```json
      {
        "reactionBody": "Your updated reaction text here"
      }
      ```

3. **Delete a Reaction**
    - Method: `DELETE`
    - URL: `/api/thoughts/:thoughtId/reactions/:reactionId`

**You can see all routes including get, put, post users and post and delete friends etc in the walkthrough video linked above**
## Contribute

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Author

Richard Aspinall. See github [@rikilega](https://github.com/rikilega). To view code see project repo [here](https://github.com/rikilega/SocialNetworkAPI).

