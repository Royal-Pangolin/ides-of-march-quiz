const States = {
  GET_READY: {
    enter(sm) {
      UI.showTeamTurn(sm.engine.currentTeam);
    },

    teamReady(sm) {
      new Audio("/audio/click_003.ogg").play();

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
      if (sm.correct) {
        new Audio("/audio/confirmation_002.ogg").play();
      } else {
        new Audio("/audio/error_003.ogg").play();
      }

      sm.set(States.CHECK_ANSWER);
    },
  },

  CHECK_ANSWER: {
    enter(sm) {
      const engine = sm.engine;

      UI.showAnswerResult(sm.correct, engine.currentQuestion.correctAnswer);
    },

    passTurn(sm) {
      new Audio("/audio/click_003.ogg").play();
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
