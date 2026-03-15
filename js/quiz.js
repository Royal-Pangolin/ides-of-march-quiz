async function initGame() {
  const questionsResponse = await fetch("/data/questions.json");
  const questionsData = await questionsResponse.json();

  console.log(
    "Preguntas cargadas:",
    questionsData.questions.length,
    questionsData.questions,
  );

  const teamsResponse = await fetch("/data/teams.json");
  const teamsData = await teamsResponse.json();

  console.log(
    "Equipos cargados:",
    teamsData.teamNames.length,
    teamsData.teamNames,
  );

  const engine = new GameEngine(teamsData.teamNames, questionsData);

  const sm = new StateMachine(engine);

  new GameController(engine, sm);

  sm.set(States.GET_READY);
}

document.addEventListener("DOMContentLoaded", initGame);
