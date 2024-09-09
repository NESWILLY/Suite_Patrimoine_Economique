
## Backend
git commit -m "feat: creation of the backend folder with initialization of the node.js project and installing the necessary dependencies"

git add  backend/server.js
git commit -m "feat: creating the server.js file in the backend folder"

git add backend/routes backend/controllers
git commit -m "feat: creating folders: routes and controllers in the backend folder to organize routes and controller logic"

git add backend/routes/possessionRoutes.js
git commit -m "feat: creating possessionRoutes.js file in the routes folder"

git add backend/routes/patrimoineRoutes.js
git commit -m "feat: creating patrimoineRoutes.js file in the routes folder"

git add backend/controllers/possessionController.js
git commit -m "feat: creating possessionController.js file in the controllers/ folder"

git add backend/controllers/patrimoineController.js
git commit -m "feat: creating patrimoineController.js file in the controllers/ folder"



## UI
git commit -m "feat: installing dependencies like date picker, chart"

git add ./UI/src/App.jsx
git commit -m "feat: configuring the router to navigate between different pages in ./UI/src/App.jsx"

git add UI/src/composants/Header.jsx
git commit -m "feat: creating the header.jsx file by creating a header with links to different pages"

git add UI/src/composants/PagePatrimoine.jsx
git commit -m "feat: creating the PagePatrimoine.jsx file to view and calculate the value of the heritage"

git add UI/src/composants/ListePossessions.jsx
git commit -m "feat: creating the ListePossessions.jsx to view and manage possessions"

git add  UI/src/composants/CreatePossession.jsx
git commit -m "feat: creating the CreatePossession.jsx file to add a new possession"

git add UI/src/composants/UpdatePossession.jsx
git commit -m "feat: creating the UpdatePossession.jsx to update an existing possession"