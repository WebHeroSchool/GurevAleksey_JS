let level = 'easy';
let easy = document.getElementById('easy');
let medium = document.getElementById('medium');
let hard = document.getElementById('hard');
let clickButtom = document.getElementById('startGame')
let contanerGame = document.getElementById('containerGame');
let game = document.getElementById('game')
let clickCheck = 0;
 
function gameEasyLevel() {
  level = 'easy';
  easy.classList.add('menu-list-romb');
  medium.classList.remove('menu-list-romb');
  hard.classList.remove('menu-list-romb');
}

function gameMediumLevel() {
  level = 'medium';
  easy.classList.remove('menu-list-romb');
  medium.classList.add('menu-list-romb');
  hard.classList.remove('menu-list-romb');
}

function gameHardLevel() {
  level = 'hard';
  easy.classList.remove('menu-list-romb');
  medium.classList.remove('menu-list-romb');
  hard.classList.add('menu-list-romb');
}

function newGame() {
  menu.classList.add('hidden');
  cotainerGame.classList.add('cotainer-game');
  game.addEventListener('click',e => clickCard (e.target)); 
  game.classList.add('game');
  switch (level) {
    case 'easy' : 
      for (i=0; i< 3; i++){
        createCard(level);
      }
      break;
    case 'medium' : 
      for (i=0; i< 6; i++){
        createCard(level);
      }
      break;
    case 'hard' : 
      for (i=0; i< 10; i++){
        createCard(level);
      }
      break;    
  }
}

function createCard(level){
  if (level == 'hard'){
    game.classList.add('game-hard');
  }
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
}

function createBagCard() {
  let bagCard = document.createElement("img");
  switch (level) {
    case 'easy' : 
      bagCard.src = Math.random() > .7 ?  "/img/gameover.png": "/img/bagcard.png";
      break;
    case 'medium' : 
      bagCard.src = Math.random() > .5 ?  "/img/gameover.png": "/img/bagcard.png";
      break;
    case 'hard' : 
      bagCard.src = Math.random() > .3 ?  "/img/gameover.png": "/img/bagcard.png";
      break;    
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
}

function goToMenu (){
  location.reload();
}

gameEasyLevel();
easy.addEventListener('click',gameEasyLevel);
medium.addEventListener('click',gameMediumLevel);
hard.addEventListener('click',gameHardLevel);
startGame.addEventListener('click',newGame);
