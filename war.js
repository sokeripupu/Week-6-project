class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }

  //this method returns the face cards that go with the values
  getFace() {
    switch (this.value) {
      case 11:
        return "Jack";
      case 12:
        return "Queen";
      case 13:
        return "King";
      case 1:
        return "Ace";
      default:
        return this.value;
    }
  }
}

class Deck {
  //create deck by creating one instance of Card with 1 value for every suit and pushing to an array.
  constructor() {
    this.cardsInDeck = [];
    this.suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
    this.values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    for (let suit of this.suits) {
      for (let value of this.values) {
        this.cardsInDeck.push(new Card(value, suit));
      }
    }
  }

  shuffle() {
    //shuffles the deck by looping through each card in the deck, picking a random index in the array, and swapping their positions.
    let deck = this.cardsInDeck;
    let r = deck.length,
      i;

    while (r) {
      i = Math.floor(Math.random() * r--);
      [deck[r], deck[i]] = [deck[i], deck[r]];
    }
    return this;
  }
}

function deal(dealerDeck, array1, array2) {
  //pushes every other card in the deck array to each player array
  for (let i = 0; i < dealerDeck.cardsInDeck.length; i++) {
    if (i % 2) {
      array1.push(dealerDeck.cardsInDeck[i]);
    } else {
      array2.push(dealerDeck.cardsInDeck[i]);
    }
  }
}

function playGame(array1, array2) {
  //create variables to hold player point totals
  let player1Points = 0;
  let player2Points = 0;

  /*loop that finds the value of the same index in each array, compares the values, and assigns a point to the player with the greater value. 
    If there's a tie it just loops back without doing anything.*/
  for (i = 0; i < array1.length; i++) {
    let player1Card = array1[i];
    let player2Card = array2[i];

    if (player1Card.value > player2Card.value) {
      player1Points++;
    }

    if (player2Card.value > player1Card.value) {
      player2Points++;      
    }

    //logs out the cards and points for each turn

    console.log(
      `Player 1 card = ${player1Card.getFace()} of ${player1Card.suit}`
    );
    console.log(`Player 1 points = ${player1Points}`);

    console.log(
      `Player 2 card = ${player2Card.getFace()} of ${player2Card.suit}`
    );
    console.log(`Player 2 points = ${player2Points}`);
  }

  //when the loop finishes, this logs out the points for each player and the winner.

  console.log(`Game over!
    Player 1: ${player1Points}
    Player 2: ${player2Points}`);
  if (player1Points > player2Points) {
    console.log(`Player 1 Won!`);
  }

  if (player1Points < player2Points) {
    console.log("Player 2 Won!");
  }

  if (player1Points === player2Points) {
     console.log(`. . . . . . . . . . . . . . . . _,,,--~~~~~~~~--,_
. . . . . . . . . . . . . . ,-' : : : :::: :::: :: : : : : :º '-, ITS A TIE!!!!
. . . . . . . . . . . . .,-' :: : : :::: :::: :::: :::: : : :o : '-,
. . . . . . . . . . . ,-' :: ::: :: : : :: :::: :::: :: : : : : :O '-,
. . . . . . . . . .,-' : :: :: :: :: :: : : : : : , : : :º :::: :::: ::';
. . . . . . . . .,-' / / : :: :: :: :: : : :::: :::-, ;; ;; ;; ;; ;; ;; ;
. . . . . . . . /,-',' :: : : : : : : : : :: :: :: : '-, ;; ;; ;; ;; ;; ;;|
. . . . . . . /,',-' :: :: :: :: :: :: :: : ::_,-~~,_'-, ;; ;; ;; ;; |
. . . . . _/ :,' :/ :: :: :: : : :: :: _,-'/ : ,-';'-'''''~-, ;; ;; ;;,'
. . . ,-' / : : : : : : ,-''' : : :,--'' :|| /,-'-'--'''__,''' \\ ;; ;,-'/
. . . \\ :/,, : : : _,-' --,,_ : : \\ :\\ ||/ /,-'-'x### ::\ \ ;;/
. . . . \\/ /---'''' : \\ #\\ : :\\ : : \\ :\ \| | : {O##º : :/ /-''
. . . . /,'____ : :\\ '-#\\ : \\, : :\\ :\ \ \ : '-,___,-',-'-,,
. . . . '  : : : :''''--,,--,,,,,,¯ \ \ :: ::--,,_''-,,'''¯ :'- :'-,
. . . . .} : : : : : : ,, : ''''~~~~' \\ :: :: :: :'''''¯ :: ,-' :,/\\
. . . . .\\,/ /|\\| | :/ / : : : : : : : ,'-, :: :: :: :: ::,--'' :,-' \ \\
. . . . .\\'|\\ \\|/ '/ / :: :_--,, : , | '; :: :: :: :,-'' : ,-' : : :\ \,
. . . ./¯ :| \\ |\\ : |/\ :: ::----, :\/ :|/ :: :: ,-'' : :,-' : : : : : : ''-,,
. . ..| : : :/ ''-(, :: :: :: '''''~,,,,,'' :: ,-'' : :,-' : : : : : : : : :,-'''\\
. ,-' : : : | : : '') : : :¯''''~-,: : ,--''' : :,-'' : : : : : : : : : ,-' :¯'''''-,_ .
./ : : : : :'-, :: | :: :: :: _,,-''''¯ : ,--'' : : : : : : : : : : : / : : : : : : :''-,
/ : : : : : -, :¯'''''''''''¯ : : _,,-~'' : : : : : : : : : : : : : :| : : : : : : : : :
: : : : : : : :¯''~~~~~~''' : : : : : : : : : : : : : : : : : : | : : : : : : : : :`);
  }
 //i worked really hard to get this to display right in the console so please enjoy
}

//make instance of deck for this game and shuffle it
let deck = new Deck();
deck.shuffle();

// console.log(`original deck: ` + JSON.stringify(cardsInDeck))
// console.log(`shuffled deck: ` + JSON.stringify(cardsInDeck));
// console.log(`This deck has ${deck.cardsInDeck.length} cards`)

//create player arrays to deal cards to

let player1 = [];
let player2 = [];

//deal cards

deal(deck, player1, player2);

// console.log (`Player 1 hand:` + JSON.stringify(player1))
// console.log(`Player 2 hand:`+ JSON.stringify(player2));
// console.log(`Player 1 has ${player1.length} cards` )
// console.log(`Player 1 has ${player2.length} cards` )

//play game!

playGame(player1, player2);
