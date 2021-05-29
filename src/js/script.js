import { func } from "assert-plus";
import "core-js/stable";
import "regenerator-runtime/runtime";

const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");

questions.forEach((questionEl) => {
  questionEl.addEventListener("click", function (e) {
    const sibling = questionEl.nextElementSibling;
    this.classList.toggle("arrow-transform");
    sibling.classList.toggle("content-hide");
  });
  //   if (sibling.classList.contains("content-hide")) {
  //     questionEl.classList.add("divider");
  //     //   questionEl.classList.remove("divider");
  //   } else sibling.classList.add("divider");
});
