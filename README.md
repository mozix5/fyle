# GitHub Repository Viewer

Welcome to the GitHub Repository Viewer application! You can access the hosted application [here](https://fyle-five.vercel.app/).

## Overview

This application allows you to explore GitHub repositories for a specific user, currently set to the user "mozix5." The main features of the application include:

- **User Profile Section:**
  - Displays the user's avatar, name, login, GitHub link, and bio.
  
- **Repositories Section:**
  - Presents a list of repositories with a responsive design.
  - Provides a dropdown to select the number of repositories per page.
  - Supports pagination to navigate through the user's repositories.
  - Clicking on a repository card opens the respective GitHub repository page.

- **Search Functionality:**
  - Utilizes the search bar to filter repositories based on user input.
  - Pressing the "Enter" key in the search bar initiates the search.

## How to Use

1. **Navigation:**
   - Explore the user's profile details on the left side of the screen.
   - Use the pagination buttons ("Previous" and "Next") to navigate through the repositories.

2. **Search:**
   - Enter a search query in the search bar.
   - Press the "Enter" key to search for repositories containing the specified query.

3. **Repository Cards:**
   - Each repository is displayed as a card, featuring the repository name, description, programming language, star count, and last update date.
   - Clicking on a card redirects you to the respective GitHub repository page.

## Optimization Features

- **Responsive Design:**
  - The application is designed to be responsive and accessible on various devices, ensuring a seamless user experience.

- **Pagination:**
  - Implements pagination to efficiently display a subset of repositories per page, improving load times and user experience.

- **Search Optimization:**
  - Utilizes the GitHub API's search functionality to efficiently fetch repositories based on user queries.

- **Loading Indicator:**
  - Incorporates a loading indicator to inform users when data is being fetched, enhancing user experience.

## Customize

To explore repositories for a different user, you can modify the `const [user,setUser] = "mozix5";` line in the `DataContext` located in `src/context/DataContext.jsx`. Change the value of `user` to the GitHub username you want to explore.

## Technologies Used

- React.js
- React Router
- Axios
- Tailwind CSS

## Local Development

1. Clone the repository:

   ```bash
   git clone https://github.com/<your-username>/github-repo-viewer.git
   ```

2. Navigate to the project directory:

   ```bash
   cd github-repo-viewer
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   The application will be accessible at [http://localhost:3000](http://localhost:3000).

Feel free to explore and enjoy using the GitHub Repository Viewer! If you have any questions or feedback, please don't hesitate to reach out.