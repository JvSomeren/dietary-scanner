String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

export const capitalize = String.prototype.capitalize();
