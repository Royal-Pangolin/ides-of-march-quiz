class UI {
  static showScreen(id) {
    document
      .querySelectorAll("article")
      .forEach((a) => a.classList.remove("active"));
    document.getElementById(id).classList.add("active");
  }

  static showTeamTurn(team) {
    UI.showScreen("get-ready");
    document.getElementById("team-name").textContent = team.name;
  }

  static showQuestion(question, category, answers) {
    UI.showScreen("quiz");
    document.querySelector("#category").textContent =
      category?.displayText ?? "";
    document.querySelector("#question").textContent = question.question;
    const ids = ["option-a", "option-b", "option-c", "option-d"];
    ids.forEach((id, i) => {
      document.getElementById(id).textContent = answers[i];
    });
  }

  static showAnswerResult(correct, correctAnswer) {
    UI.showScreen("check-answer");

    const correctness = document.querySelector("#answer-correctness span");

    correctness.textContent = correct ? "Correcto" : "Incorrecto";

    correctness.classList.remove("answer-correct", "answer-wrong");

    correctness.classList.add(correct ? "answer-correct" : "answer-wrong");

    document.getElementById("correct-answer").textContent = correctAnswer;
  }

  static redirectToResults(teams) {
    const params = new URLSearchParams();

    teams.forEach((t, i) => {
      params.append(`team${i + 1}`, t.name);
      params.append(`score${i + 1}`, t.score);
    });

    window.location.href = `results.html?${params}`;
  }
}
