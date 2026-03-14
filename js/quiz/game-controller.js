class GameController {
  constructor(engine, stateMachine) {
    this.engine = engine;
    this.sm = stateMachine;

    this.bindEvents();
  }

  bindEvents() {
    document
      .getElementById("team-ready-btn")
      .addEventListener("click",
        () => this.sm.dispatch("teamReady"));

    document
      .querySelectorAll("#answers button")
      .forEach(btn => {
        btn.addEventListener("click",
          () => this.sm.dispatch("answer", btn.textContent));
      });

    document
      .getElementById("pass-turn-btn")
      .addEventListener("click",
        () => this.sm.dispatch("passTurn"));
  }
}
