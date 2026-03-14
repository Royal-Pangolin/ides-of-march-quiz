document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  const teams = [];
  let i = 1;
  while (params.has(`team${i}`) && params.has(`score${i}`)) {
    teams.push({
      name: params.get(`team${i}`),
      score: parseInt(params.get(`score${i}`), 10) || 0,
    });
    i++;
  }

  teams.sort((a, b) => b.score - a.score);

  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";

  teams.forEach((team, index) => {
    const card = document.createElement("div");
    card.className = "result-card";

    card.innerHTML = `
      <span class="position">#${index + 1}</span>
      <span class="team">${team.name}</span>
      <span class="score">${team.score}</span>
    `;

    resultsContainer.appendChild(card);
  });

  const restartBtn = document.getElementById("restart-btn");
  restartBtn.addEventListener("click", () => {
    window.location.href = "/quiz.html";
  });
});
