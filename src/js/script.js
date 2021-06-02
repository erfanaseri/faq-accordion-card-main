import { func } from "assert-plus";
import { reset } from "colorette";
import "core-js/stable";
import "regenerator-runtime/runtime";

const questions = document.querySelectorAll(".question");
const answersNode = document.querySelectorAll(".answer");

// Converting the nodeList to an array so that we can loop over it later
const answers = Array.from(answersNode);

// Assigning a click button on each question element
questions.forEach((question) => {
  question.addEventListener("click", function (e) {
    // Defining the sibling element each question clicked
    const sibling = this.nextElementSibling;

    if (sibling.classList.contains("content-hide")) {
      resetElAnswer();
      resetElQuestion();
    }

    sibling.classList.toggle("content-hide");
    this.classList.toggle("arrow-transform");
    this.classList.toggle("clicked-highlight");
    this.style.setProperty("border-bottom", "1px solid var(--clr-primary-7)");

    if (!sibling.classList.contains("content-hide")) {
      resetElQuestionDivider();

      this.style.setProperty("border-bottom", "initial");
      sibling.style.setProperty(
        "border-bottom",
        "1px solid var(--clr-primary-7)"
      );
    }
  });
});

const resetElAnswer = function () {
  answers.forEach((answer) => {
    answer.classList.add("content-hide");
  });
};

const resetElQuestion = function () {
  questions.forEach((question) => {
    question.classList.remove("arrow-transform");
    question.classList.remove("clicked-highlight");
  });
};

const resetElQuestionDivider = function () {
  questions.forEach((question) => {
    question.style.setProperty(
      "border-bottom",
      "1px solid var(--clr-primary-7)"
    );
  });
};
