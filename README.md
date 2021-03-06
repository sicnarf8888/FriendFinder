# FriendFinder

### Try the working app

https://still-taiga-48088.herokuapp.com/

### Overview
This is a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

### Instructions

1. There are 10 survey questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a
question.

2. server.js file require the basic npm packages we've used in class: express and path.

3. htmlRoutes.js file include two routes:

- A GET Route to /survey which should display the survey page.

- A default, catch-all route that leads to home.html which displays the home page.

4. apiRoutes.js file contain two routes:

- A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
- A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

5. Save the application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below. { "name":"Ahmed", "photo":"https://secureservercdn.net/198.71.233.129/d24.097.myftpupload.com/wp-content/uploads/2019/09/normal-guy-1024x683.jpg", "scores":[ 5, 1, 4, 4, 5, 1, 2, 5, 4, 1 ] }

6. Determine the user's most compatible friend using the following as a guide:

7. Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.

8. Remember to use the absolute value of the differences. Put another way: no negative solutions! the app should calculate both 5-3 and 3-5 as 2, and so on.

9. The closest match will be the user with the least amount of difference.

10. Once you've found the current user's most compatible friend, display the result as a modal pop-up.
The modal should display both the name and picture of the closest match.

### Tools/Languages Used:

- HTML
- CSS/Bootstrap
- Javascript
- jQuery
- NodeJS
- Express
- JSON
- Heroku
- Postman

### NPM Packages:
- Express
- Body Parser
- Path

### Helpful Link
- Express.js
- Postman
- Heroku
