const States = {
  GET_READY: {
    enter(sm) {
      UI.showTeamTurn(sm.engine.currentTeam);
    },

    teamReady(sm) {
      if (!sm.engine.hasQuestions()) {
        sm.set(States.GAME_OVER);
        return;
      }

      sm.engine.loadRandomQuestion();
      sm.set(States.QUIZ);
    },
  },

  QUIZ: {
    enter(sm) {
      const engine = sm.engine;
      const q = engine.currentQuestion;

      const category = engine.categories.find((c) => c.id === q.categoryId);

      UI.showQuestion(q, category, engine.answers);
    },

    answer(sm, answer) {
      const correct = sm.engine.submitAnswer(answer);
      sm.correct = correct;

      sm.set(States.CHECK_ANSWER);
    },
  },

  CHECK_ANSWER: {
    enter(sm) {
      const engine = sm.engine;

      UI.showAnswerResult(sm.correct, engine.currentQuestion.correctAnswer);
    },

    passTurn(sm) {
      sm.engine.nextTeam();

      if (!sm.engine.hasQuestions()) {
        sm.set(States.GAME_OVER);
      } else {
        sm.set(States.GET_READY);
      }
    },
  },

  GAME_OVER: {
    enter(sm) {
      UI.redirectToResults(sm.engine.teams);
    },
  },
};
