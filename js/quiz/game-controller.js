class GameController {
  constructor(engine, sm) {
    this.engine = engine;
    this.sm = sm;
    this.bindEvents();
  }

  bindEvents() {
    document
      .getElementById("team-ready-btn")
      .addEventListener("click", () => this.sm.dispatch("teamReady"));

    document.querySelectorAll("#answers button").forEach((btn) => {
      btn.addEventListener("click", () =>
        this.sm.dispatch("answer", btn.textContent),
      );
    });

    document
      .getElementById("pass-turn-btn")
      .addEventListener("click", () => this.sm.dispatch("passTurn"));
  }
}
