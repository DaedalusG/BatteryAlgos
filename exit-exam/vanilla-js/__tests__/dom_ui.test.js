import { main } from "../src/index";
import { waitFor, getByTestId, queryByTestId } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import fetch from "node-fetch";
import { indexHTML } from "../__mocks__/indexContent";
global.fetch = fetch;

describe("DOM and UI", () => {
  let userSection, userSectionChildren, postSectionChildren;
  beforeAll(() => {
    document.body.innerHTML = indexHTML;
    userSection = queryByTestId(document, "_test-user-section_");
    userSectionChildren = userSection.children;
    postSectionChildren = queryByTestId(document, "_test-post-section_")
      .children;
  });
  describe("Users", () => {
    it("should render each user inside of `section#user`", async () => {
      const preRenderCount = userSectionChildren.length;
      expect(preRenderCount).toBeLessThan(10);
      main();
      await waitFor(() => {
        expect(userSectionChildren.length).toBe(preRenderCount + 10);
      });
    });
    it("should list each user alphabetically by username", async () => {
      await waitFor(() => {
        expect(userSectionChildren[0]).toHaveTextContent("Antonette");
        expect(document.querySelector("#users div")).toHaveTextContent(
          "Wisokyburgh"
        );
      });
    });
    it("should list each user's username and city", async () => {
      await waitFor(() => {
        expect(userSectionChildren[0]).toHaveTextContent("Wisokyburgh");
      });
    });
  });
  describe("Posts", () => {
    it("should render a user's posts when a user is clicked", async () => {
      userEvent.click(userSectionChildren[0]);
      await waitFor(() => {
        expect(postSectionChildren.length).toBeGreaterThan(1);
        expect(postSectionChildren[0]).toHaveTextContent(
          "et ea vero quia laudantium autem"
        );
      });
    });
    it("should render the correct user's posts and only the correct user's posts", async () => {
      userEvent.click(document.querySelector("#users div"));
      await waitFor(() => {
        expect(document.querySelector("#posts div")).toHaveTextContent(
          "et ea vero quia laudantium autem"
        );
      });
      userEvent.click(document.querySelectorAll("#users div")[2]);
      await waitFor(() => {
        expect(document.querySelector("#posts div")).toHaveTextContent(
          "tempora rem veritatis voluptas quo dolores vero"
        );
      });
    });
  });
  describe("Comments", () => {
    it("should render a comments modal on clicking a post", async () => {
      expect(document.querySelector(".modal-background")).toHaveClass("hidden");
      userEvent.click(document.querySelector("#posts div"));
      await waitFor(() => {
        expect(document.querySelector(".modal-background")).not.toHaveClass(
          "hidden"
        );
      });
    });
    it("should display a post's comments in the modal", async () => {
      expect(
        document.querySelector(".comments").children.length
      ).toBeGreaterThan(0);
    });
    it("should display the appropriate comments for the post clicked", () => {
      expect(document.querySelector(".comments").children[0]).toHaveTextContent(
        "cum voluptate sint voluptas veritatis"
      );
    });
    it("should close the modal when a user clicks outside of the element", async () => {
      // userEvent.click(document.querySelectorAll("#posts div")[0]);
      await waitFor(() => {
        expect(document.querySelector(".modal-background")).not.toHaveClass(
          "hidden"
        );
      });
      userEvent.click(document.querySelector(".modal-background"));
      await waitFor(() => {
        expect(document.querySelector(".modal-background")).toHaveClass(
          "modal-background hidden"
        );
      });
    });
  });
});
