import {
  getAllUsers,
  getUserPosts,
  getPostComments,
} from "../src/scripts/api_util.js";
import fetch from "node-fetch";
import jquery from "jquery";
import axios from "axios";

global.fetch = fetch;
global.axios = axios;
global.get = axios.get;
global.jquery = jquery;
global.$ = jquery;
global.ajax = jquery.ajax;

describe("APIUtil.js", () => {
  it("should export a function called getAllUsers", () => {
    expect(getAllUsers).toBeDefined();
  });
  it("should export a function called getUserPosts", () => {
    expect(getUserPosts).toBeDefined();
  });
  it("should export a function called getPostComments", () => {
    expect(getPostComments).toBeDefined();
  });
});

describe("API Calls", () => {
  it("fetches all users", async () => {
    const users = await getAllUsers(); // Run the function
    expect(users.map((user) => user.email)).toEqual([
      "Sincere@april.biz",
      "Shanna@melissa.tv",
      "Nathan@yesenia.net",
      "Julianne.OConner@kory.org",
      "Lucio_Hettinger@annie.ca",
      "Karley_Dach@jasper.info",
      "Telly.Hoeger@billy.biz",
      "Sherwood@rosamond.me",
      "Chaim_McDermott@dana.io",
      "Rey.Padberg@karina.biz",
    ]);
  });

  it("fetches a user's posts", async () => {
    const posts = await getUserPosts(1);
    expect(posts.map((post) => post.title)).toEqual([
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "qui est esse",
      "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "eum et est occaecati",
      "nesciunt quas odio",
      "dolorem eum magni eos aperiam quia",
      "magnam facilis autem",
      "dolorem dolore est ipsam",
      "nesciunt iure omnis dolorem tempora et accusantium",
      "optio molestias id quia eum",
    ]);
  });

  it("fetches a post's comments", async () => {
    const comments = await getPostComments(1);
    expect(comments.map((comment) => comment.name)).toEqual([
      "id labore ex et quam laborum",
      "quo vero reiciendis velit similique earum",
      "odio adipisci rerum aut animi",
      "alias odio sit",
      "vero eaque aliquid doloribus et culpa",
    ]);
  });
});
