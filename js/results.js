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
    card.className = "result-card row container-fluid m-2";

    card.innerHTML = `
      <span class="position col-2 m-2">#${index + 1}</span>
      <span class="team col-8 m-2">${team.name}</span>
      <span class="score col-2 m-2">${team.score}</span>
    `;

    resultsContainer.appendChild(card);
  });

  const restartBtn = document.getElementById("restart-btn");
  restartBtn.addEventListener("click", () => {
    window.location.href = "/quiz.html";
  });
});
