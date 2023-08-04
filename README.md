# git-issue-viewer
![Demo](./git-issue-viewer-demo.gif)
[Live](https://olenaageyeva.github.io/git-issue-viewer/)

## About
### Frontend
Frontend is implemented on React+Vite+Tailwind and deployed with GitHub Pages.

### Backend
Backend is implemented on Node.js and deployed with [render.com Free Web Services](https://render.com/docs/free). 

**Note:** _Web Services on the free instance type are automatically spun down after 15 minutes of inactivity. When a new request for a free service comes in, Render spins it up again so it can process the request._

Example: user=facebook, repo=react, state=open [link](https://api-express-backend.onrender.com/api/express_backend?user=facebook&repo=react&state=open)
The server uses GitHub REST API [Search endpoint](https://docs.github.com/en/rest/search/search?apiVersion=2022-11-28) 

## Run Locally
1. Run `npm i`
2. Run `cd client` and `npm i`. Return `cd ..`
3. Run `npm start`. The command starts server on port 5000 & webapp on port 5174. 
4. Go to http://localhost:5174/git-issue-viewer. Enter user & repo and click on a search button to see 30 first issues.
5. Select to see open or closed issues. 