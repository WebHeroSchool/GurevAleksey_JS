let level = 'easy';
let easy = document.getElementById('easy');
let medium = document.getElementById('medium');
let hard = document.getElementById('hard');
let clickButtom = document.getElementById('startGame')
let game = document.getElementById('game')
 
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
  switch (level) {
    case 'easy' : 
      for (i=0; i< 3; i++){
        createCard();
      }
      break;
    case 'medium' : 
      for (i=0; i< 6; i++){
        createCard();
      }
      break;
    case 'hard' : 
      for (i=0; i< 9; i++){
        createCard();
      }
      break;    
  } 
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
  }
}

gameEasyLevel();
game.addEventListener('click',e => clickCard (e.target));
easy.addEventListener('click',gameEasyLevel);
medium.addEventListener('click',gameMediumLevel);
hard.addEventListener('click',gameHardLevel);
startGame.addEventListener('click',newGame);
