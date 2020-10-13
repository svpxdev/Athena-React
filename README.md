# Athena - React Demo 

Athena is a single page application for a bookstore designed completely on React. The page at the moment is not connected to backend only exists to demo the React front end. The app uses react functional components and Context API as global store manager for keeping track of Basket item and creating the checout page. 

# Technology Stack

The project has fairly simple stack, since it is just the front end.

- React 
- Routing using React Router DOM
- HTMl
- Javascript
- CSS

# Web Screens

I plan to deploy the webstore on Heroku for a live demo, in the mean time the screen can be seen here. 

<img src="https://i.ibb.co/vVxSNnw/Screenshot-2020-10-13-at-07-41-56.png">

- Login and Sign Up page for Athena. (For demo, no username or password is needed, click on either sign in or sign up to get in.)

<img src="https://i.ibb.co/Prv0Xt1/Screenshot-2020-10-13-at-07-42-13.png">

- Home page of the store has a Header component and Home component which is shows the product component. 

<img src="https://i.ibb.co/HrmTVsr/Screenshot-2020-10-13-at-07-42-41.png">

- The basket gets populated on clicking **add to basket** (function are passed via Dispatch in Reducer) and maintains the state through out the website and can be accessed by any component. 

<img src="https://i.ibb.co/dgY7WBc/Screenshot-2020-10-13-at-07-42-55.png">

- The order page is populated using the checkout item component and uses the Global store of accessing the data.

<img src="https://i.ibb.co/0DJWpvC/Screenshot-2020-10-13-at-07-43-08.png">

- The checkout page invokes two components, the summary head and checkout items. Shows reusability within the app.

# Current Status

This project will be on continous development and I will be adding new features as we go. Coming up..
- [ ] Live Deployment on Heroku
- [ ] Development of Server
- [ ] Database Connection

# Future Updates

The future updates will be limited on this project as this is just a demo. I dont plan to keep updating this in the future after this year.

# Get in Touch

If you want to know more about the project or want to enquire about anything else related to the project, please feel free to write me an email at sp@suryaveerpatnaik.com
