class StateMachine {
  constructor(engine) {
    this.engine = engine;
    this.state = null;
  }

  set(state) {
    this.state = state;
    state.enter(this);
  }

  dispatch(action, payload) {
    const fn = this.state[action];
    if (fn) fn(this, payload);
  }
}
