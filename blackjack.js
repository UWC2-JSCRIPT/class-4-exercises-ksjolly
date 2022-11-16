const blackjackDeck = getDeck();

// /**
//  * Represents a card player (including dealer).
//  * @constructor
//  * @param {string} name - The name of the player
//  */
// class CardPlayer {}; //TODO

class CardPlayer {
    constructor(name, score)
    {
        this.name = name;
        this.hand = [];

    }
    drawCard() {
        const deck = getDeck();
        const randomCard = deck[Math.floor(Math.random() * 52)];
        this.hand.push(randomCard);

        // ...
    }
}

// // CREATE TWO NEW CardPlayers
// const dealer; // TODO
// const player; // TODO

const dealer = new CardPlayer('Karen', 0);
const player = new CardPlayer('Jonah', 0 );

// /**
//  * Calculates the score of a Blackjack hand
//  * @param {Array} hand - Array of card objects with val, displayVal, suit properties
//  * @returns {Object} blackJackScore
//  * @returns {number} blackJackScore.total
//  * @returns {boolean} blackJackScore.isSoft
//  */
const calcPoints = (hand) => {
  // CREATE FUNCTION HERE
  let blackJackScore = {
    total: 0,
    isSoft: true
  }

  hand.forEach(card =>
    {
        if(card.displayVal == 'Ace')
        {
            if(blackJackScore.total > 21)
            {
                blackJackScore.total += 1;
            }
            else
            {
                blackJackScore.total += 11;
                blackJackScore.isSoft = false;
            }
        }
        else {
            blackJackScore.total += card.val;
        }
    })
    return blackJackScore;
}



// /**
//  * Determines whether the dealer should draw another card.
//  * 
//  * @param {Array} dealerHand Array of card objects with val, displayVal, suit properties
//  * @returns {boolean} whether dealer should draw another card
//  */
const dealerShouldDraw = (dealerHand) => {
  // CREATE FUNCTION HERE
  let blackJackScore = calcPoints(dealerHand);
  if(blackJackScore.total == 17 && blackJackScore.isSoft == false)
  {
    return true;
  }
  else if(blackJackScore.total < 17)
  {
    return true;
  }
  else
  {
    return false;
  }

}

// /**
//  * Determines the winner if both player and dealer stand
//  * @param {number} playerScore 
//  * @param {number} dealerScore 
//  * @returns {string} Shows the player's score, the dealer's score, and who wins
//  */
const determineWinner = (playerScore, dealerScore) => {
  // CREATE FUNCTION HERE
  if(playerScore > dealerScore)
  {
    return(`Player wins! ${playerScore} : ${dealerScore}`);
  }
  else if(playerScore == dealerScore)
  {
    return(`It's a tie! ${playerScore}:${dealerScore}`);
  }
  else
  {
    return(`Dealer wins! ${dealerScore} : ${playerScore}`)
  }

}

// /**
//  * Creates user prompt to ask if they'd like to draw a card
//  * @param {number} count 
//  * @param {string} dealerCard 
//  */
const getMessage = (count, dealerCard) => {
  return `Dealer showing ${dealerCard.displayVal}, your count is ${count}.  Draw card?`
}

// /**
//  * Logs the player's hand to the console
//  * @param {CardPlayer} player 
//  */
const showHand = (player) => {
  const displayHand = player.hand.map((card) => card.displayVal);
  console.log(`${player.name}'s hand is ${displayHand.join(', ')} (${calcPoints(player.hand).total})`);
}

/**
 * Runs Blackjack Game
 */
const startGame = function() {
  player.drawCard();
  dealer.drawCard();
  player.drawCard();
  dealer.drawCard();

  let playerScore = calcPoints(player.hand).total;
  showHand(player);
  while (playerScore < 21 && confirm(getMessage(playerScore, dealer.hand[0]))) {
    player.drawCard();
    playerScore = calcPoints(player.hand).total;
    showHand(player);
  }
  if (playerScore > 21) {
    return 'You went over 21 - you lose!';
  }
  console.log(`Player stands at ${playerScore}`);

  let dealerScore = calcPoints(dealer.hand).total;
  while (dealerScore < 21 && dealerShouldDraw(dealer.hand)) {
    dealer.drawCard();
    dealerScore = calcPoints(dealer.hand).total;
    showHand(dealer);
  }
  if (dealerScore > 21) {
    return 'Dealer went over 21 - you win!';
  }
  console.log(`Dealer stands at ${dealerScore}`);

  return determineWinner(playerScore, dealerScore);
}
console.log(startGame());