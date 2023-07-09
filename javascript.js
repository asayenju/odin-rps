const array = ["rock", "paper", "scissors"];
let computerChoice;

function PlayAround(Choice) {
  computerChoice = array[Math.floor(Math.random() * 3)];

  if (Choice === computerChoice) {
    return "It's a draw!";
  } else if (
    (Choice === "rock" && computerChoice === "scissors") ||
    (Choice === "paper" && computerChoice === "rock") ||
    (Choice === "scissors" && computerChoice === "paper")
  ) {
    return "You won!";
  } else {
    return "You lost!";
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const Startbtn = document.querySelector('.Startbtn');
  const container = document.querySelector('.container');

  Startbtn.addEventListener('click', function() {
    const Start = document.querySelector('.Start');
    const Startdiv = document.querySelector('.Startdiv');

    if (Start && Startdiv && container) {
      Start.style.display = 'none';
      Startdiv.style.display = 'none';

      const h1 = document.createElement('h1');
      h1.textContent = 'Choose Your Weapon';
      h1.classList.add('Start');
      h1.style.color = 'whitesmoke';
      h1.style.textAlign = 'center';
      h1.style.marginTop = '360px';
      h1.style.fontSize = '72px';
      container.appendChild(h1);

      const div = document.createElement('div');
      div.classList.add('choice');

      const buttonScissors = document.createElement('button');
      buttonScissors.type = 'button';
      buttonScissors.classList.add('choices');
      const imgScissors = document.createElement('img');
      imgScissors.src = 'images/scissors.jpg';
      imgScissors.alt = 'scissors';
      buttonScissors.appendChild(imgScissors);
      buttonScissors.addEventListener('click', function() {
        const result = PlayAround('scissors');
        div.style.display = 'none';
        h1.textContent = result;
      });
      div.appendChild(buttonScissors);

      const buttonPaper = document.createElement('button');
      buttonPaper.type = 'button';
      buttonPaper.classList.add('choices');
      const imgPaper = document.createElement('img');
      imgPaper.src = 'images/paper.png';
      imgPaper.alt = 'paper';
      buttonPaper.appendChild(imgPaper);
      buttonPaper.addEventListener('click', function() {
        const result = PlayAround('paper');
        div.style.display = 'none';
        h1.textContent = result;
      });
      div.appendChild(buttonPaper);

      const buttonRock = document.createElement('button');
      buttonRock.type = 'button';
      buttonRock.classList.add('choices');
      const imgRock = document.createElement('img');
      imgRock.src = 'images/rock.jpeg';
      imgRock.alt = 'rock';
      buttonRock.appendChild(imgRock);
      buttonRock.addEventListener('click', function() {
        const result = PlayAround('rock');
        div.style.display = 'none';
        h1.textContent = result;
      });
      div.appendChild(buttonRock);

      container.appendChild(div);
    }
  });
});
