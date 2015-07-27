describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

describe('Math Utils', function() {
  describe('Addition', function() {
    it('should add two positive numbers', function() {
      assert.equal(5, GLOBAL.package.math.add(2,3));
    });
  });
});
