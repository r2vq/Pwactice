let loadingDiv = document.getElementById("loading-main");
let errorDiv = document.getElementById("error-main");
let deckDiv = document.getElementById("deck");

fetch("/js/deck.json")
  .then(response => {
    loadingDiv.classList.add("hidden");
    return response.json();
  }, error => {
    loadingDiv.classList.add("hidden");
    errorDiv.classList.remove("hidden");
  })
  .then(json => {
    console.log(json);
    return json.deck.map(card => {
      let cardDiv = document.createElement("div");
      cardDiv.classList.add("list-item");

      let nameDiv = document.createElement("div");
      nameDiv.classList.add("list-item-name");
      nameDiv.textContent = card.card;
      cardDiv.appendChild(nameDiv);

      let playerDiv = document.createElement("div");
      playerDiv.textContent = card.player;
      cardDiv.appendChild(playerDiv);

      return cardDiv;
    });
  })
  .then(cardDivs => {
    cardDivs.forEach(cardDiv => {
      deck.appendChild(cardDiv);
    });
  });
