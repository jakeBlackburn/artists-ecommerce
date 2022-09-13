# e-commerce-demo


This is a mock e-commerce application made primarily with vuejs. The project uses Vue Router to handle routes, and Vuex state management to handle the shopping cart and user data. It is served with Express and its data is retireved from a NoSQL database hosted on mongoDB Atlas. On the site you can bid on or buy paintings from famous artists throughout history. Obviously you cannot actually buy these paintings, the checkout is handled with Stripe in testing mode. Bidding on a painting currently does nothing, but I plan to add post requests to the backend very soon, allowing people to post their own bids. 


Eventually I plan to add a user dashboard, and allow users to add comments on artworks and artists.
## Project setup

to run this site locally, first run:

npm install

this will download all the needed dependencies to get started.
you can then view the site using the vue.js live reload server by running:

npm run serve

alternitively, you can serve the app from an express server with:

npm start

to run this properly, you first must build the app with 

npm run build

this will bundle the vue app into a /dist folder, which the express server will send to the browser. 

note - "npm start" will start the server with nodemon, meaning you wont have to restart the server any time changes are made, you only need to re-build with "npm run build"

# testing 

I plan to add basic unit testing with jest and e2e testing with cypress in the future. 


