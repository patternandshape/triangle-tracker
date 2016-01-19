describe('isTriangle', function() {
  it("is an equilateral triangle when all sides are equal", function() {
    expect(isTriangle(6,6,6)).to.equal("equilateral");
  });

  it("is an isosceles triangle when two sides are equal", function() {
    expect (isTriangle(4,5,5)).to.equal("isosceles");
  });

  it("is an scalene triangle when no sides are equal", function() {
    expect (isTriangle(3,4,5)).to.equal("scalene");
  });

  it("is not a triangle when", function() {
    expect (isTriangle(5,3,8)).to.equal("non");
  });

});
