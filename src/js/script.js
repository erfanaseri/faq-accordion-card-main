import { func } from "assert-plus";
import "core-js/stable";
import "regenerator-runtime/runtime";

const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");

questions.forEach((questionEl) => {
  questionEl.addEventListener("click", function (e) {
    const sibling = questionEl.nextElementSibling;

    // Changing the orientation of the arrow
    this.classList.toggle("arrow-transform");

    // Toggle the answer upon each click
    sibling.classList.toggle("content-hide");

    // Removing the divider line when there is the answer class
    if (!sibling.classList.contains("content-hide"))
      this.style.setProperty("border-bottom", "initial");
    else
      this.style.setProperty("border-bottom", "1px solid var(--clr-primary-7)");
  });
});
