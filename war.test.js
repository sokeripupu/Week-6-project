const expect = chai.expect;

player1 = [];
player2 = [];

describe("Test Deal function", function () {
  describe;

  it("Both arrays should contain 26 elements", function () {
    deal(deck, player1, player2);
    expect(player1.length).to.equal(26) && expect(player2.length).to.equal(26);
  });
});
