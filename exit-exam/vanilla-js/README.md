## Running the Project

After installing dependencies, the following commands are available:

- To run the development environment (webpack and webpack-dev-server with live updates to JS and SCSS files), run `npm run start`
- To run webpack and watch for changes _without a live server_, run `npm run webpack:watch`, use the direct path for `index.html` in your browser to preview project (_make sure to refresh the page to see changes_)
- To run the tests once, run `npm run test`
- To run the tests and watch for changes, run `npm run test:watch`

### Restraints

- this assessment should be completed using **<u>ONLY</u>** Vanilla JavaScript.
- Please do not edit the HTML or SCSS files, you should only need to use JavaScript to complete the project

## Instructions

- make sure to review the HTML provided before starting the DOM manipulation portion of the project

### API Calls

- In the `/src/api_utils.js` file you should write and `export` 3 functions called `getAllUsers`, `getUserPosts` and `getPostComments`
  - `getAllUsers` should fetch all users from https://jsonplaceholder.typicode.com/users and return them as an array of user objects
  - `getUserPosts` should take a userId as a parameter, fetch all of that user's posts from [https://jsonplaceholder.typicode.com/posts?userId=\<userId\>](https://jsonplaceholder.typicode.com/posts?userId=), and return them as an array of post objects
  - `getPostComments` should take a postId as a parameter, fetch all of that post's comments from [https://jsonplaceholder.typicode.com/posts/\<postId\>/comments](https://jsonplaceholder.typicode.com/posts//comments) and return them as an array of comment objects

### Users, Posts, and Comments

- All JavaScript intended to edit the DOM or implement user interaction should be called from inside the `main()` function in the `/src/index.js` file.

- Once the DOM is loaded, the project should render each user inside of the `section#users` HTML element.
  - Each user should be rendered inside of their own `div` HTML element.
  - A user's `div` should contain two `p` elements for (1) the user's username and (2) the user's city
  - Users should be listed alphabetically by username

---

- Once a user is clicked, that user's posts should be rendered inside of the `section#posts` HTML element
  - Each post should be rendered inside of its own `div` HTML element.
  - A post's `div` should contain its title as an `h3` element its body inside of `p` element.
  - It should render the correct user's posts and only the correct user's posts

---

- Once a post is clicked, the `.hidden` class of the `div.modal-background` HTML element should be removed
  - When a user clicks outside of the `section.comments-modal` HTML element, the modal should be closed
- The post's comments should be rendered inside of the `section.comments` HTML element
  - Each comment should be rendered in its own `div` element containing the comment's name as an `h3` element, the associated email as a `p` element, and its body as a `p` element
