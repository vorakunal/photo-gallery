# Getting Started with Photo Gallery App

This app demonstrates the use of microservice architecture. Two diferent services are created, admin & main, used docker-sql image seperately for both the service. Both the services are communicating with each other using Rabbit-MQ, they will get notified if either service performs any operations(CRUD) to the database, following the REST API protocol, and update the interface accordingly. 

Follow the steps to execute the project:

First, you need to spin up the admin and main/user database, to do so first you need to [install](https://docs.docker.com/get-docker/) docker, then run this command:
`docker-compose up --build`

The `build` keyword is used because this is your first time building this image.

After the image is built you'll run `docker-compose up`.

If you make any changes to the code then you have to build the image again.

Once both the services are live then you can run the scripts.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Reference

[scalablescripts](https://scalablescripts.com/)