# git-issue-viewer
![Demo](./git-issue-viewer-demo.gif)
[Live](https://olenaageyeva.github.io/git-issue-viewer/)

## About
### Frontend
The Frontend is implemented using the following tech stack:
- React: The core JavaScript library for building the user interface.
- Vite: The build tool for faster development and optimized production builds.
- Tailwind CSS: The utility-first CSS framework for efficient styling.

It is deployed with GitHub Pages [Live](https://olenaageyeva.github.io/git-issue-viewer/)

### Backend
The Backend is developed with Node.js and hosted with [render.com Free Web Services](https://render.com/docs/free). 

**Note:** _Web Services on the free instance type are automatically spun down after 15 minutes of inactivity. When a new request for a free service comes in, Render spins it up again so it can process the request._

The server uses GitHub REST API [Search endpoint](https://docs.github.com/en/rest/search/search?apiVersion=2022-11-28) to fetch the github issue list from requested repository. 

Backend Request Example: user=facebook, repo=react, state=open [link](https://api-express-backend.onrender.com/api/express_backend?user=facebook&repo=react&state=open)


## Run Locally
To run the application locally, follow these steps:
1. Install the required dependencies by running  `npm i`
2. Navigate to the client directory `cd client` and  install frontend dependencies by running `npm i`. Then return to the project root by executing `cd ..`.
3. Start the application by running `npm start`. The command starts the server on port 5000 and the web app on port 5174. 
4. Open your web browser and navigate to http://localhost:5174/git-issue-viewer. Here you can enter the user and the repo of a GitHub repository and click the search button to view the first 30 issues.
5. You can select to view either open or closed issues to explore the repository's issues.

Feel free to contribute and enhance the application further. Happy coding!