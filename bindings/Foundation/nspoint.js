// This file is part of coffeekit.  for licensing information, see the LICENSE file

function NSPoint(x, y) {
  this.x = x;
  this.y = y;
}

NSPoint.getTypeSignature = function() {
  return "{CGPoint=ff}";
};
