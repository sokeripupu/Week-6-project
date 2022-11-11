const expect = chai.expect;


describe("Deck related functions", function () {
  it("A new deck should contain 52 cards", function(){
    let deckTest = new Deck;

    expect(deckTest.cardsInDeck.length).to.equal(52);
  })
  
  it("Both player arrays should contain 26 cards after dealing", function () {
    let dealTest = new Deck;  
    player1 = [];
      player2 = [];
    deal(dealTest, player1, player2);
  

    expect(player1.length).to.equal(26) && expect(player2.length).to.equal(26);
  });
});
