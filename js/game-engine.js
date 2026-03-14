function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

class GameEngine {
  constructor(teams, questionsData) {
    this.teams = teams.map((name) => ({ name, score: 0 }));
    this.currentTeamIndex = 0;

    this.questions = [...questionsData.questions];
    this.categories = questionsData.categories;

    this.ensureQuestionsMultipleOfTeams();

    this.currentQuestion = null;
    this.answers = [];
    this.selectedAnswer = null;
  }

  get currentTeam() {
    return this.teams[this.currentTeamIndex];
  }

  nextTeam() {
    this.currentTeamIndex = (this.currentTeamIndex + 1) % this.teams.length;
  }

  hasQuestions() {
    return this.questions.length > 0;
  }

  ensureQuestionsMultipleOfTeams() {
    const totalTeams = this.teams.length;
    const remainder = this.questions.length % totalTeams;

    if (remainder !== 0) {
      console.warn(
        `Recortando ${remainder} preguntas para que sean múltiplo de equipos`,
      );
      this.questions.splice(-remainder, remainder);
    }
  }

  loadRandomQuestion() {
    const index = Math.floor(Math.random() * this.questions.length);
    this.currentQuestion = this.questions.splice(index, 1)[0];

    this.answers = shuffle([
      this.currentQuestion.correctAnswer,
      ...this.currentQuestion.wrongAnswers,
    ]);
  }

  submitAnswer(answer) {
    this.selectedAnswer = answer;

    if (answer === this.currentQuestion.correctAnswer) {
      this.currentTeam.score++;
      return true;
    }

    return false;
  }
}
