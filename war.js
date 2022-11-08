class Card{
    constructor(value, suit){
        this.value = value
        this.suit = suit
    }
}

class Deck{
    constructor(){
        this.deck = [];
        let suits = ['H', 'D', 'S', 'C'];
        let values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

        for (let suit in suits){
            for (let value in values){
                this.deck.push(new Card(value,suit))
            }
        }
    }

    shuffle(){
    const deck = this.deck;
    let j = deck.length, i;

    while(j){
        i = Math.floor(Math.random() * j--);
        [deck[j], deck[i]] = [deck[i], deck[j]];
    }
    return this;
    }

    deal(){
        const deck = this.deck;
        for(let i = 0; i < deck.length; i++){
            if (i%2){
                player1.hand.push(this.deck[i]);
            }else{
                player2.hand.push(this.deck[i]);
            }
          
        }
    }
        
    }


class Player{
    constructor(){
        this.hand = []
    }
    draw(){
        for (i = 0; i < this.hand.length; i++)
        drawnCard = this.hand.pop;  
        return drawnCard 
    }
       
    }

const deck = new Deck()
//console.log(deck.deck)
function playGame(){
const deck = new Deck()
// console.log(`Original deck: ${deck.deck}`)
deck.shuffle();
// console.log(`Shuffled deck: ${deck.deck}`)
var player1 = new Player
var player2 = new Player
let player1Points = 0
let player2Points = 0
deck.deal();
//console.log(`Player 1 Hand: ${player1.hand}` )
//console.log(`Player 2 Hand: ${player2.hand}`)

while (player1.hand.length > 0 || player2.hand.length > 0){
player1Card = player1.hand.pop;
deck.splice(0,1);
player2card = player2.hand.pop;
deck.splice(0,1);
if (player1Card.value > player2Card.value){
    player1Points ++
}
if (player2card.value > player1Card.value)
    player2Points ++
}


{
    console.log(`Game over!
    Player 1: ${player1Points}
    Player 2: ${player2Points}`)
if (player1Points > player2Points){
    console.log(`Player 1 Won`)};

if (player1Points < player2Points){
    console.log('Player 2 Won')};

if (player1Points === player2Points){
    
    console.log('There was a tie.')}
};



}

console.log(playGame())


// hand1 = []
// hand2 = []

// player1Points = 10
// player2Points = 10

// if (hand1.length === 0 && hand2.length === 0){
//     console.log(`Game over!
//     Player 1: ${player1Points}
//     Player 2: ${player2Points}`)};

// if (player1Points > player2Points){
//     console.log(`Player 1 Won`)};

// if (player1Points < player2Points){
//     console.log('Player 2 Won')};

// if (player1Points === player2Points){
    
//     console.log('There was a tie.')}



