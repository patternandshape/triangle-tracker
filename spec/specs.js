describe('isTriangle', function() {
  it("is an equilateral triangle when all sides are equal", function() {
    expect(isTriangle(6,6,6)).to.equal(true);
  });

  it("is an isosceles triangle when two sides are equal", function() {
    expect (isTriangle(4,5,5)).to.equal(true);
  });

  it("is an scalene triangle when no sides are equal", function() {
    expect (isTriangle(3,4,5)).to.equal(true);
  });

  it("is not a triangle when", function() {
    expect (isTriangle(2,2,5)).to.equal(true);
  });

});
