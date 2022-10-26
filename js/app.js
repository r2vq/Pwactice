let loadingDiv = document.getElementById("loading-main");
let errorDiv = document.getElementById("error-main");
let deckDiv = document.getElementById("deck");
let cardHolderDiv = document.getElementById("card-holder");

cardHolderDiv.addEventListener("click", () => {
  cardHolderDiv.classList.add("hidden");
});

fetch("js/deck.json")
  .then(response => {
    loadingDiv.classList.add("hidden");
    return response.json();
  }, error => {
    loadingDiv.classList.add("hidden");
    errorDiv.classList.remove("hidden");
  })
  .then(json => {
    return json.deck.map(card => {
      let cardDiv = document.createElement("div");
      cardDiv.classList.add("list-item");

      cardDiv.addEventListener("click", () => {
        let clicked = json.cards.find(it => {
          return it.name == card.card;
        });
        let title = cardHolderDiv.querySelector("#title");
        title.textContent = clicked.name;
        let category = cardHolderDiv.querySelector("#category");
        category.textContent = clicked.category;
        let definition = cardHolderDiv.querySelector("#definition");
        definition.textContent = clicked.definition;
        let conception = cardHolderDiv.querySelector("#conception");
        conception.textContent = clicked.conception;
        let planning = cardHolderDiv.querySelector("#planning");
        planning.textContent = clicked.planning;
        let execution = cardHolderDiv.querySelector("#execution");
        execution.textContent = clicked.execution;
        let msc = cardHolderDiv.querySelector("#msc");
        msc.textContent = clicked.msc;
        cardHolderDiv.classList.remove("hidden");
      });

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
