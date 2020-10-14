let level = 3;
let checkBagCard = 1;
let arrayCard = [];
let bag = "/img/bagcard.png";
let noBag = "/img/gameover.png";
let easy = document.getElementById('easy');
let medium = document.getElementById('medium');
let hard = document.getElementById('hard');
let clickButtom = document.getElementById('startGame')
let game = document.getElementById('game')
let containerGame = document.getElementById('cotainerGame');
 
function gameEasyLevel() {
  level = 3;
  easy.classList.add('menu-list-romb');
  medium.classList.remove('menu-list-romb');
  hard.classList.remove('menu-list-romb');
}

function gameMediumLevel() {
  level = 6;
  easy.classList.remove('menu-list-romb');
  medium.classList.add('menu-list-romb');
  hard.classList.remove('menu-list-romb');
}

function gameHardLevel() {
  level = 10;
  easy.classList.remove('menu-list-romb');
  medium.classList.remove('menu-list-romb');
  hard.classList.add('menu-list-romb');
}

function newGame() {
  menu.classList.add('hidden');
  containerGame.classList.add('container-game');
  game.classList.add('game');
  if (level < 10) {
    let main = document.getElementById('main');
    main.classList.add('small-card');
    game.classList.add('width-small');
  }
 
  do {
    for (i=0; i < level; i++){
      createCard();
    }
  } while (!arrayCard.includes(bag)); 
}

function createCard(){
  let containerCard = document.createElement('div');
  containerCard.classList.add('container-card');
  containerCard.id = 'oneCard';

  let innerCard = document.createElement('div');
  innerCard.classList.add('inner-card');
  innerCard.id = 'twoCard';

  let card = document.createElement("div");
  card.classList.add('card-shirt');

  let image = document.createElement('img');
  image.classList.add('card-shirt__image')
  image.src = "/img/card.png"
  image.id = 'card';

  let cardBack = document.createElement("div");
  cardBack.classList.add('card-bag');

  let bagCard = createBagCard();

  game.appendChild(containerCard);
  containerCard.appendChild(innerCard)
  innerCard.appendChild(card);
  innerCard.appendChild(cardBack);
  card.appendChild(image);
  cardBack.appendChild(bagCard);
  card.onmouseover = function(event) {
    card.classList.add('active');
  }
}

function createBagCard() {
  let bagCard = document.createElement("img");
  let cards = [bag,noBag];
  let randomIndex = Math.floor(Math.random() * 2);
  let card = cards[randomIndex];
  if ((card == bag) & (checkBagCard == 1)) {
    bagCard.src = bag;
    arrayCard.push(bag);
    checkBagCard = 0;
  } else {
    bagCard.src = noBag;
    arrayCard.push(noBag);
  }
  bagCard.id = 'backcard';
  return bagCard
}

function clickCard (card) {
  let click = card.parentNode.parentNode;
    if (click.id == 'twoCard'){
      click.classList.add ('click-button');
      click.addEventListener('click', goToMenu);
  }
  function goToMenu (){
    location.reload();
  }
}

gameEasyLevel();
game.addEventListener('click',e => clickCard (e.target));
easy.addEventListener('click',gameEasyLevel);
medium.addEventListener('click',gameMediumLevel);
hard.addEventListener('click',gameHardLevel);
startGame.addEventListener('click',newGame);
